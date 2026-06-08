import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { buildApp, cleanTestData, email } from './helpers/app.helper';

// 2026-06-01 é segunda-feira — usado em todos os testes de agendamento.
// Janela ampla de disponibilidade (00:00–23:59) para ser agnóstico de fuso horário.
const DT_SEGUNDA_09 = '2026-06-01T12:00:00.000Z'; // 09:00 BRT / 12:00 UTC
const DT_SEGUNDA_10 = '2026-06-01T13:00:00.000Z'; // 10:00 BRT / 13:00 UTC

describe('Consulta — integração', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  let colToken: string;
  let col2Token: string;
  let psiToken: string;
  let psiId: string; // UUID do perfilPsicologo
  let dispId: string; // UUID da disponibilidade criada

  beforeAll(async () => {
    ({ app, prisma } = await buildApp());

    // Colaborador 1
    const colRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ nome: 'Col Consulta', email: email('cons_col1'), senha: 'Senha@123', papel: 'COLABORADOR' });
    colToken = colRes.body.token;

    // Colaborador 2 (para testar isolamento)
    const col2Res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ nome: 'Col Consulta 2', email: email('cons_col2'), senha: 'Senha@123', papel: 'COLABORADOR' });
    col2Token = col2Res.body.token;

    // Psicólogo
    const psiRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ nome: 'Psi Consulta', email: email('cons_psi'), senha: 'Senha@123', papel: 'PSICOLOGO' });
    psiToken = psiRes.body.token;

    // Descobre o UUID do perfilPsicologo via listagem pública
    const psiListRes = await request(app.getHttpServer()).get('/psicologos');
    const psiPerfil = psiListRes.body.find((p: any) => p.usuario?.nome === 'Psi Consulta');
    psiId = psiPerfil?.id;

    // Psicólogo cria disponibilidade: SEGUNDA, 00:00–23:59 (agnóstico de fuso)
    const dispRes = await request(app.getHttpServer())
      .post('/psicologos/disponibilidade')
      .set('Authorization', `Bearer ${psiToken}`)
      .send({ diaSemana: 'SEGUNDA', horaInicio: '00:00', horaFim: '23:59' })
      .expect(201);
    dispId = dispRes.body.id;
  });

  afterAll(async () => {
    await cleanTestData(prisma);
    await app.close();
  });

  // ---------------------------------------------------------------------------
  // Agendamento
  // ---------------------------------------------------------------------------
  describe('POST /consultas', () => {
    it('201 — agenda consulta dentro da disponibilidade', async () => {
      const res = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: DT_SEGUNDA_10 })
        .expect(201);

      expect(res.body.id).toBeTruthy();
      expect(res.body.status).toBe('AGENDADA');
      expect(res.body.psicologo?.id).toBe(psiId);
    });

    it('409 — conflito quando mesmo horário já está ocupado', async () => {
      // Garante que DT_SEGUNDA_09 não está ocupado antes de testar conflito
      await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: DT_SEGUNDA_09 })
        .expect(201);

      // Segunda tentativa no mesmo horário
      const res = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${col2Token}`)
        .send({ psicologoId: psiId, dataHora: DT_SEGUNDA_09 })
        .expect(409);

      expect(res.body.mensagem).toMatch(/ocupado/i);
    });

    it('400 — fora da disponibilidade (domingo sem cadastro)', async () => {
      // 2026-06-07 é domingo — psicólogo não tem disponibilidade nesse dia
      const res = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: '2026-06-07T12:00:00.000Z' })
        .expect(400);

      expect(res.body.mensagem).toMatch(/disponibilidade/i);
    });

    it('404 — psicólogo inexistente', async () => {
      await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: '00000000-0000-0000-0000-000000000000', dataHora: DT_SEGUNDA_10 })
        .expect(404);
    });
  });

  // ---------------------------------------------------------------------------
  // Listagem
  // ---------------------------------------------------------------------------
  describe('GET /consultas/minhas', () => {
    it('200 — colaborador vê apenas suas consultas', async () => {
      const res = await request(app.getHttpServer())
        .get('/consultas/minhas')
        .set('Authorization', `Bearer ${colToken}`)
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });

    it('200 — psicólogo vê as consultas agendadas com ele', async () => {
      const res = await request(app.getHttpServer())
        .get('/consultas/minhas')
        .set('Authorization', `Bearer ${psiToken}`)
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.every((c: any) => c.psicologoId === psiId)).toBe(true);
    });
  });

  // ---------------------------------------------------------------------------
  // Ciclo de status
  // ---------------------------------------------------------------------------
  describe('Ciclo de status da consulta', () => {
    let consultaId: string;

    beforeAll(async () => {
      const res = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: '2026-06-08T12:00:00.000Z' }); // segunda
      consultaId = res.body.id;
    });

    it('200 — psicólogo confirma consulta (AGENDADA → CONFIRMADA)', async () => {
      const res = await request(app.getHttpServer())
        .patch(`/consultas/${consultaId}/status`)
        .set('Authorization', `Bearer ${psiToken}`)
        .send({ status: 'CONFIRMADA' })
        .expect(200);

      expect(res.body.status).toBe('CONFIRMADA');
    });

    it('200 — colaborador cancela consulta confirmada', async () => {
      // Precisa estar em status cancelável — cria nova consulta
      const novaRes = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: '2026-06-15T12:00:00.000Z' }); // segunda
      const novaId = novaRes.body.id;

      const res = await request(app.getHttpServer())
        .delete(`/consultas/${novaId}`)
        .set('Authorization', `Bearer ${colToken}`)
        .expect(200);

      expect(res.body.status).toBe('CANCELADA');
    });

    it('200 — psicólogo marca como realizada (CONFIRMADA → REALIZADA)', async () => {
      const res = await request(app.getHttpServer())
        .patch(`/consultas/${consultaId}/status`)
        .set('Authorization', `Bearer ${psiToken}`)
        .send({ status: 'REALIZADA' })
        .expect(200);

      expect(res.body.status).toBe('REALIZADA');
    });

    it('400 — não é possível cancelar consulta já realizada', async () => {
      const res = await request(app.getHttpServer())
        .delete(`/consultas/${consultaId}`)
        .set('Authorization', `Bearer ${colToken}`)
        .expect(400);

      expect(res.body.mensagem).toMatch(/realizada/i);
    });
  });

  // ---------------------------------------------------------------------------
  // Isolamento entre usuários
  // ---------------------------------------------------------------------------
  describe('Isolamento de acesso', () => {
    let consultaId: string;

    beforeAll(async () => {
      const res = await request(app.getHttpServer())
        .post('/consultas')
        .set('Authorization', `Bearer ${colToken}`)
        .send({ psicologoId: psiId, dataHora: '2026-06-22T12:00:00.000Z' }); // segunda
      consultaId = res.body.id;
    });

    it('403 — colaborador 2 não pode cancelar consulta do colaborador 1', async () => {
      await request(app.getHttpServer())
        .delete(`/consultas/${consultaId}`)
        .set('Authorization', `Bearer ${col2Token}`)
        .expect(403);
    });

    it('403 — psicólogo não pode atualizar status de consulta de outro psicólogo', async () => {
      const outroPsiRes = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ nome: 'Psi Outro', email: email('outro_psi'), senha: 'Senha@123', papel: 'PSICOLOGO' });
      const outroPsiToken = outroPsiRes.body.token;

      await request(app.getHttpServer())
        .patch(`/consultas/${consultaId}/status`)
        .set('Authorization', `Bearer ${outroPsiToken}`)
        .send({ status: 'CONFIRMADA' })
        .expect(403);
    });
  });

  // ---------------------------------------------------------------------------
  // Disponibilidade do psicólogo
  // ---------------------------------------------------------------------------
  describe('Disponibilidade', () => {
    it('400 — rejeita horaFim <= horaInicio', async () => {
      await request(app.getHttpServer())
        .post('/psicologos/disponibilidade')
        .set('Authorization', `Bearer ${psiToken}`)
        .send({ diaSemana: 'TERCA', horaInicio: '14:00', horaFim: '10:00' })
        .expect(400);
    });

    it('200 — lista disponibilidade pública do psicólogo', async () => {
      const res = await request(app.getHttpServer())
        .get(`/psicologos/${psiId}/disponibilidade`)
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.some((d: any) => d.id === dispId)).toBe(true);
    });
  });
});
