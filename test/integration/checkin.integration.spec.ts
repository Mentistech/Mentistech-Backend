import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { buildApp, cleanTestData, email, mockAnthropic } from './helpers/app.helper';

describe('Checkin — integração', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let colToken: string;
  let psiToken: string;
  let colEmail: string;

  beforeAll(async () => {
    ({ app, prisma } = await buildApp());

    // Colaborador
    colEmail = email('checkin_col');
    const colRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ nome: 'Col Checkin', email: colEmail, senha: 'Senha@123', papel: 'COLABORADOR' });
    colToken = colRes.body.token;

    // Psicólogo (para testar acesso à análise técnica)
    const psiRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ nome: 'Psi Checkin', email: email('checkin_psi'), senha: 'Senha@123', papel: 'PSICOLOGO' });
    psiToken = psiRes.body.token;
  });

  afterAll(async () => {
    await cleanTestData(prisma);
    await app.close();
  });

  beforeEach(() => {
    mockAnthropic.analisarCheckin.mockResolvedValue({
      respostaIa: 'Você está bem, continue assim!',
      conteudoPsicologico: 'Humor estável. Estresse dentro do esperado.',
    });
  });

  // ---------------------------------------------------------------------------
  // Criar check-in
  // ---------------------------------------------------------------------------
  describe('POST /checkin', () => {
    it('201 — cria check-in e retorna análise da IA', async () => {
      const res = await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'BEM', nivelEstresse: 3 })
        .expect(201);

      expect(res.body.id).toBeTruthy();
      expect(res.body.humor).toBe('BEM');
      expect(res.body.nivelEstresse).toBe(3);
      expect(res.body.respostaIa).toBe('Você está bem, continue assim!');
      expect(res.body.analise?.id).toBeTruthy();
      expect(res.body).not.toHaveProperty('conteudoPsicologico');
    });

    it('201 — cria check-in mesmo quando IA falha (respostaIa null)', async () => {
      mockAnthropic.analisarCheckin.mockRejectedValueOnce(new Error('API fora do ar'));

      const res = await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'NEUTRO', nivelEstresse: 5 })
        .expect(201);

      expect(res.body.id).toBeTruthy();
      expect(res.body.respostaIa).toBeNull();
    });

    it('400 — rejeita nivelEstresse = 0 (mínimo é 1)', async () => {
      await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'BEM', nivelEstresse: 0 })
        .expect(400);
    });

    it('400 — rejeita nivelEstresse = 11 (máximo é 10)', async () => {
      await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'BEM', nivelEstresse: 11 })
        .expect(400);
    });

    it('400 — rejeita humor com valor fora do enum', async () => {
      await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'OTIMO', nivelEstresse: 5 })
        .expect(400);
    });
  });

  // ---------------------------------------------------------------------------
  // Listar meus check-ins
  // ---------------------------------------------------------------------------
  describe('GET /checkin/meus', () => {
    it('200 — retorna lista dos check-ins do colaborador autenticado', async () => {
      await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'MAL', nivelEstresse: 7 });

      const res = await request(app.getHttpServer())
        .get('/checkin/meus')
        .set('Authorization', `Bearer ${colToken}`)
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      // Todos os checkins pertencem ao mesmo colaborador
      const emails = new Set(res.body.map((c: any) => c.colaborador?.usuarioId));
      expect(emails.size).toBeLessThanOrEqual(1);
    });
  });

  // ---------------------------------------------------------------------------
  // Acesso à análise — isolamento por papel
  // ---------------------------------------------------------------------------
  describe('GET /checkin/:id/analise', () => {
    let checkinId: string;

    beforeAll(async () => {
      const res = await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ humor: 'MUITO_MAL', nivelEstresse: 9 });
      checkinId = res.body.id;
    });

    it('200 — colaborador vê respostaIa mas NÃO conteudoPsicologico', async () => {
      const res = await request(app.getHttpServer())
        .get(`/checkin/${checkinId}/analise`)
        .set('Authorization', `Bearer ${colToken}`)
        .expect(200);

      expect(res.body.respostaIa).toBeTruthy();
      expect(res.body.conteudoPsicologico).toBeUndefined();
    });

    it('200 — psicólogo vê conteudoPsicologico na analise', async () => {
      const res = await request(app.getHttpServer())
        .get(`/checkin/${checkinId}/analise`)
        .set('Authorization', `Bearer ${psiToken}`)
        .expect(200);

      expect(res.body.analise?.conteudoPsicologico).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // Isolamento entre colaboradores
  // ---------------------------------------------------------------------------
  describe('Isolamento de dados — colaborador A não acessa checkin de colaborador B', () => {
    it('403 — colaborador B não pode ler checkin de colaborador A', async () => {
      // Cria o colaborador A e faz check-in
      const resA = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Col A', email: email('isol_a'), senha: 'Senha@123', papel: 'COLABORADOR' });
      const tokenA = resA.body.token;

      const checkinRes = await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${tokenA}`)
        .send({ humor: 'BEM', nivelEstresse: 2 });
      const checkinIdA = checkinRes.body.id;

      // Cria o colaborador B
      const resB = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Col B', email: email('isol_b'), senha: 'Senha@123', papel: 'COLABORADOR' });
      const tokenB = resB.body.token;

      // B tenta acessar o checkin de A
      await request(app.getHttpServer())
        .get(`/checkin/${checkinIdA}/analise`)
        .set('Authorization', `Bearer ${tokenB}`)
        .expect(403);
    });
  });
});
