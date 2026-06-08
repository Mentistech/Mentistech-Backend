import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { buildApp, cleanTestData, email } from './helpers/app.helper';

describe('Auth — integração', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    ({ app, prisma } = await buildApp());
  });

  afterAll(async () => {
    await cleanTestData(prisma);
    await app.close();
  });

  // ---------------------------------------------------------------------------
  // Registro
  // ---------------------------------------------------------------------------
  describe('POST /auth/register', () => {
    it('201 — cria colaborador e retorna token', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Col Integração', email: email('col'), senha: 'Senha@123', papel: 'COLABORADOR' })
        .expect(201);

      expect(res.body.token).toBeTruthy();
      expect(res.body.papel).toBe('COLABORADOR');
      expect(res.body.nome).toBe('Col Integração');
    });

    it('201 — cria psicólogo e retorna token', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Psi Integração', email: email('psi'), senha: 'Senha@123', papel: 'PSICOLOGO', crp: 'CRP-01/1234' })
        .expect(201);

      expect(res.body.token).toBeTruthy();
      expect(res.body.papel).toBe('PSICOLOGO');
    });

    it('409 — rejeita e-mail já cadastrado', async () => {
      const colEmail = email('dup');
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Dup', email: colEmail, senha: 'Senha@123', papel: 'COLABORADOR' });

      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Dup', email: colEmail, senha: 'Senha@123', papel: 'COLABORADOR' })
        .expect(409);

      expect(res.body.mensagem).toMatch(/e-mail|email|já cadastrado/i);
    });

    it('400 — rejeita e-mail com formato inválido', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Test', email: 'nao-eh-email', senha: 'Senha@123', papel: 'COLABORADOR' })
        .expect(400);

      expect(res.body.statusCode).toBe(400);
    });

    it('400 — rejeita senha com menos de 6 caracteres', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Test', email: email('short'), senha: '123', papel: 'COLABORADOR' })
        .expect(400);
    });

    it('400 — rejeita papel inválido', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Test', email: email('badpapel'), senha: 'Senha@123', papel: 'ADMIN' })
        .expect(400);
    });
  });

  // ---------------------------------------------------------------------------
  // Login
  // ---------------------------------------------------------------------------
  describe('POST /auth/login', () => {
    const loginEmail = email('login');
    const loginSenha = 'Senha@123';

    beforeAll(async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Login Test', email: loginEmail, senha: loginSenha, papel: 'COLABORADOR' });
    });

    it('201 — retorna token com credenciais corretas', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: loginEmail, senha: loginSenha })
        .expect(201);

      expect(res.body.token).toBeTruthy();
      expect(res.body.papel).toBe('COLABORADOR');
    });

    it('401 — rejeita e-mail inexistente', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: email('inexistente'), senha: loginSenha })
        .expect(401);

      expect(res.body.statusCode).toBe(401);
    });

    it('401 — rejeita senha incorreta', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: loginEmail, senha: 'senhaErrada' })
        .expect(401);

      expect(res.body.statusCode).toBe(401);
    });
  });

  // ---------------------------------------------------------------------------
  // GET /auth/me e proteção de rotas
  // ---------------------------------------------------------------------------
  describe('GET /auth/me', () => {
    let token: string;
    const meEmail = email('me');

    beforeAll(async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Me Test', email: meEmail, senha: 'Senha@123', papel: 'COLABORADOR' });
      token = res.body.token;
    });

    it('401 — sem token', async () => {
      await request(app.getHttpServer()).get('/auth/me').expect(401);
    });

    it('401 — token malformado', async () => {
      await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', 'Bearer token-invalido')
        .expect(401);
    });

    it('200 — retorna dados do usuário autenticado', async () => {
      const res = await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(res.body.email).toBe(meEmail);
      expect(res.body.senhaHash).toBeUndefined();
    });
  });

  // ---------------------------------------------------------------------------
  // Proteção por papel (RolesGuard)
  // ---------------------------------------------------------------------------
  describe('RolesGuard — proteção por papel', () => {
    let psiToken: string;

    beforeAll(async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Psi Role', email: email('psirole'), senha: 'Senha@123', papel: 'PSICOLOGO' });
      psiToken = res.body.token;
    });

    it('403 — psicólogo não pode realizar check-in', async () => {
      await request(app.getHttpServer())
        .post('/checkin')
        .set('Authorization', `Bearer ${psiToken}`)
        .send({ humor: 'BEM', nivelEstresse: 3 })
        .expect(403);
    });

    it('403 — colaborador não pode criar disponibilidade', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Col Role', email: email('colrole'), senha: 'Senha@123', papel: 'COLABORADOR' });
      const colToken = res.body.token;

      await request(app.getHttpServer())
        .post('/psicologos/disponibilidade')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ diaSemana: 'SEGUNDA', horaInicio: '08:00', horaFim: '12:00' })
        .expect(403);
    });
  });
});
