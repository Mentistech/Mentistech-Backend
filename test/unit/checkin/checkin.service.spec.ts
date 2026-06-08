import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HumorTipo } from '@prisma/client';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { AnthropicService } from '../../../src/checkin/anthropic.service';
import { CheckinService } from '../../../src/checkin/checkin.service';

const mockPrisma = {
  perfilColaborador: { findUnique: jest.fn() },
  checkinEmocional: { create: jest.fn(), findMany: jest.fn(), findUnique: jest.fn() },
  analiseIa: { create: jest.fn(), findUnique: jest.fn() },
};

const mockAnthropic = {
  analisarCheckin: jest.fn().mockResolvedValue({
    respostaIa: 'Você parece bem!',
    conteudoPsicologico: 'Nível de estresse moderado.',
  }),
};

const perfilMock = { id: 'perfil-1', usuarioId: 'user-1' };
const checkinMock = {
  id: 'checkin-1',
  colaboradorId: 'perfil-1',
  humor: HumorTipo.BEM,
  nivelEstresse: 3,
  realizadoEm: new Date(),
};

describe('CheckinService', () => {
  let service: CheckinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckinService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: AnthropicService, useValue: mockAnthropic },
      ],
    }).compile();

    service = module.get<CheckinService>(CheckinService);
    jest.clearAllMocks();
  });

  describe('realizarCheckin', () => {
    it('lança ForbiddenException se usuário não é colaborador', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(null);
      await expect(
        service.realizarCheckin({ humor: HumorTipo.BEM, nivelEstresse: 3 }, 'user-1'),
      ).rejects.toThrow(ForbiddenException);
    });

    it('cria checkin e análise de IA corretamente', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(perfilMock);
      mockPrisma.checkinEmocional.create.mockResolvedValue(checkinMock);
      mockPrisma.analiseIa.create.mockResolvedValue({});
      mockPrisma.analiseIa.findUnique.mockResolvedValue({ id: 'analise-1' });

      const result = await service.realizarCheckin({ humor: HumorTipo.BEM, nivelEstresse: 3 }, 'user-1');

      expect(mockAnthropic.analisarCheckin).toHaveBeenCalledWith(HumorTipo.BEM, 3);
      expect(mockPrisma.analiseIa.create).toHaveBeenCalledTimes(1);
      expect(result.respostaIa).toBe('Você parece bem!');
      expect(result.analise).toEqual({ id: 'analise-1' });
      expect(result).not.toHaveProperty('conteudoPsicologico');
    });

    it('retorna checkin mesmo quando a IA falha (respostaIa null)', async () => {
      mockAnthropic.analisarCheckin.mockRejectedValueOnce(new Error('API indisponível'));
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(perfilMock);
      mockPrisma.checkinEmocional.create.mockResolvedValue(checkinMock);

      const result = await service.realizarCheckin({ humor: HumorTipo.MAL, nivelEstresse: 8 }, 'user-1');

      expect(result.respostaIa).toBeNull();
      expect(result.analise).toBeNull();
      expect(mockPrisma.analiseIa.create).not.toHaveBeenCalled();
    });
  });

  describe('listarMeus', () => {
    it('lança ForbiddenException se não é colaborador', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(null);
      await expect(service.listarMeus('user-1')).rejects.toThrow(ForbiddenException);
    });

    it('retorna checkins do colaborador ordenados', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(perfilMock);
      mockPrisma.checkinEmocional.findMany.mockResolvedValue([checkinMock]);

      const result = await service.listarMeus('user-1');
      expect(mockPrisma.checkinEmocional.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { colaboradorId: 'perfil-1' }, orderBy: { realizadoEm: 'desc' } }),
      );
      expect(result).toHaveLength(1);
    });
  });

  describe('buscarPorId', () => {
    it('lança NotFoundException se checkin não existe', async () => {
      mockPrisma.checkinEmocional.findUnique.mockResolvedValue(null);
      await expect(
        service.buscarPorId('id-qualquer', { usuarioId: 'user-1', papel: 'COLABORADOR' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('lança ForbiddenException se colaborador acessa checkin de outro', async () => {
      mockPrisma.checkinEmocional.findUnique.mockResolvedValue({ ...checkinMock, colaboradorId: 'outro-perfil' });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(perfilMock);

      await expect(
        service.buscarPorId('checkin-1', { usuarioId: 'user-1', papel: 'COLABORADOR' }),
      ).rejects.toThrow(ForbiddenException);
    });

    it('permite psicólogo acessar qualquer checkin', async () => {
      mockPrisma.checkinEmocional.findUnique.mockResolvedValue(checkinMock);

      const result = await service.buscarPorId('checkin-1', { usuarioId: 'psi-1', papel: 'PSICOLOGO' });
      expect(result.id).toBe('checkin-1');
    });
  });

  describe('buscarAnalise', () => {
    it('retorna conteudoPsicologico apenas para psicólogo', async () => {
      const analise = { respostaIa: 'Resposta', conteudoPsicologico: 'Análise técnica', geradoEm: new Date() };
      mockPrisma.checkinEmocional.findUnique.mockResolvedValue({ ...checkinMock, analise });

      const result = await service.buscarAnalise('checkin-1', { usuarioId: 'psi-1', papel: 'PSICOLOGO' });
      expect((result as any).analise.conteudoPsicologico).toBe('Análise técnica');
    });

    it('NÃO retorna conteudoPsicologico para colaborador', async () => {
      const analise = { respostaIa: 'Resposta', conteudoPsicologico: 'Análise técnica', geradoEm: new Date() };
      mockPrisma.checkinEmocional.findUnique.mockResolvedValue({ ...checkinMock, analise, colaborador: perfilMock });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(perfilMock);

      const result = await service.buscarAnalise('checkin-1', { usuarioId: 'user-1', papel: 'COLABORADOR' });
      expect((result as any).conteudoPsicologico).toBeUndefined();
      expect((result as any).respostaIa).toBe('Resposta');
    });
  });
});
