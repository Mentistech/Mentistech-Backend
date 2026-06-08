import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import { AnthropicService } from '../../../src/checkin/anthropic.service';
import { HttpExceptionFilter } from '../../../src/common/filters/http-exception.filter';
import { PrismaService } from '../../../src/prisma/prisma.service';

// Sufixo exclusivo de testes — facilita identificar e limpar dados
export const TEST_SUFFIX = '@integration.test.local';

// IA mockada para todos os testes de integração
export const mockAnthropic = {
  analisarCheckin: jest.fn().mockResolvedValue({
    respostaIa: 'Você está bem, continue assim!',
    conteudoPsicologico: 'Humor estável. Estresse dentro do esperado.',
  }),
};

/** Sobe o app NestJS com banco real e IA mockada. */
export async function buildApp(): Promise<{ app: INestApplication; prisma: PrismaService }> {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(AnthropicService)
    .useValue(mockAnthropic)
    .compile();

  const app = moduleRef.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.init();

  const prisma = moduleRef.get<PrismaService>(PrismaService);
  return { app, prisma };
}

/**
 * Remove apenas dados criados pelos testes de integração
 * (identificados pelo e-mail com sufixo TEST_SUFFIX).
 * Segue a ordem de FK: consulta → analiseIa → checkin → disponibilidade → perfis → usuario.
 */
export async function cleanTestData(prisma: PrismaService): Promise<void> {
  const testUsers = await prisma.usuario.findMany({
    where: { email: { endsWith: TEST_SUFFIX } },
    select: { id: true, perfilColaborador: { select: { id: true } }, perfilPsicologo: { select: { id: true } } },
  });

  if (testUsers.length === 0) return;

  const colIds = testUsers.flatMap(u => (u.perfilColaborador ? [u.perfilColaborador.id] : []));
  const psiIds = testUsers.flatMap(u => (u.perfilPsicologo ? [u.perfilPsicologo.id] : []));
  const userIds = testUsers.map(u => u.id);

  const checkinIds = colIds.length
    ? (await prisma.checkinEmocional.findMany({ where: { colaboradorId: { in: colIds } }, select: { id: true } })).map(c => c.id)
    : [];

  await prisma.consulta.deleteMany({ where: { OR: [{ colaboradorId: { in: colIds } }, { psicologoId: { in: psiIds } }] } });
  if (checkinIds.length) await prisma.analiseIa.deleteMany({ where: { checkinId: { in: checkinIds } } });
  if (colIds.length) await prisma.checkinEmocional.deleteMany({ where: { colaboradorId: { in: colIds } } });
  if (psiIds.length) await prisma.disponibilidade.deleteMany({ where: { psicologoId: { in: psiIds } } });
  if (colIds.length) await prisma.perfilColaborador.deleteMany({ where: { id: { in: colIds } } });
  if (psiIds.length) await prisma.perfilPsicologo.deleteMany({ where: { id: { in: psiIds } } });
  await prisma.usuario.deleteMany({ where: { id: { in: userIds } } });
}

/** Gera e-mail único para evitar conflitos em execuções consecutivas. */
export const email = (prefix: string) => `${prefix}_${Date.now()}${TEST_SUFFIX}`;
