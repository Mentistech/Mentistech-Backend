import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DiaSemana, StatusConsulta } from '@prisma/client';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { ConsultaService } from '../../../src/consulta/consulta.service';

const mockPrisma = {
  perfilColaborador: { findUnique: jest.fn() },
  perfilPsicologo: { findUnique: jest.fn() },
  disponibilidade: { findMany: jest.fn() },
  consulta: { findFirst: jest.fn(), findUnique: jest.fn(), findMany: jest.fn(), create: jest.fn(), update: jest.fn() },
};

const colaboradorMock = { id: 'col-1', usuarioId: 'user-col-1' };
const psicologoMock = { id: 'psi-1', usuarioId: 'user-psi-1' };

const consultaMock = {
  id: 'cons-1',
  colaboradorId: 'col-1',
  psicologoId: 'psi-1',
  dataHora: new Date('2026-06-02T09:00:00'), // segunda-feira
  status: StatusConsulta.AGENDADA,
  observacoes: null,
  analiseId: null,
};

// 2026-06-02 é segunda-feira
const dtSegunda = '2026-06-02T09:00:00.000Z';

describe('ConsultaService', () => {
  let service: ConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConsultaService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ConsultaService>(ConsultaService);
    jest.clearAllMocks();
  });

  describe('agendar', () => {
    it('lança ForbiddenException se usuário não é colaborador', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(null);
      await expect(
        service.agendar({ psicologoId: 'psi-1', dataHora: dtSegunda }, 'user-1'),
      ).rejects.toThrow(ForbiddenException);
    });

    it('lança NotFoundException se psicólogo não existe', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(null);

      await expect(
        service.agendar({ psicologoId: 'psi-inexistente', dataHora: dtSegunda }, 'user-col-1'),
      ).rejects.toThrow(NotFoundException);
    });

    it('lança BadRequestException se horário fora da disponibilidade', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      mockPrisma.disponibilidade.findMany.mockResolvedValue([]);

      await expect(
        service.agendar({ psicologoId: 'psi-1', dataHora: dtSegunda }, 'user-col-1'),
      ).rejects.toThrow(BadRequestException);
    });

    it('lança ConflictException se horário já ocupado', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      // Janela ampla para cobrir qualquer fuso horário do runner
      mockPrisma.disponibilidade.findMany.mockResolvedValue([
        { diaSemana: DiaSemana.SEGUNDA, horaInicio: '00:00', horaFim: '23:59' },
      ]);
      mockPrisma.consulta.findFirst.mockResolvedValue(consultaMock);

      await expect(
        service.agendar({ psicologoId: 'psi-1', dataHora: dtSegunda }, 'user-col-1'),
      ).rejects.toThrow(ConflictException);
    });

    it('cria consulta com sucesso', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      // Janela ampla para cobrir qualquer fuso horário do runner
      mockPrisma.disponibilidade.findMany.mockResolvedValue([
        { diaSemana: DiaSemana.SEGUNDA, horaInicio: '00:00', horaFim: '23:59' },
      ]);
      mockPrisma.consulta.findFirst.mockResolvedValue(null);
      mockPrisma.consulta.create.mockResolvedValue(consultaMock);

      const result = await service.agendar({ psicologoId: 'psi-1', dataHora: dtSegunda }, 'user-col-1');
      expect(mockPrisma.consulta.create).toHaveBeenCalledTimes(1);
      expect(result.id).toBe('cons-1');
    });
  });

  describe('cancelar', () => {
    it('lança NotFoundException se consulta não existe', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(null);
      await expect(service.cancelar('cons-x', 'user-col-1')).rejects.toThrow(NotFoundException);
    });

    it('lança ForbiddenException se colaborador não é dono', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, colaboradorId: 'outro-col' });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);

      await expect(service.cancelar('cons-1', 'user-col-1')).rejects.toThrow(ForbiddenException);
    });

    it('lança BadRequestException se consulta já realizada', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, status: StatusConsulta.REALIZADA });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);

      await expect(service.cancelar('cons-1', 'user-col-1')).rejects.toThrow(BadRequestException);
    });

    it('lança BadRequestException se consulta já cancelada', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, status: StatusConsulta.CANCELADA });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);

      await expect(service.cancelar('cons-1', 'user-col-1')).rejects.toThrow(BadRequestException);
    });

    it('cancela consulta com sucesso', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(consultaMock);
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.consulta.update.mockResolvedValue({ ...consultaMock, status: StatusConsulta.CANCELADA });

      const result = await service.cancelar('cons-1', 'user-col-1');
      expect(mockPrisma.consulta.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { status: StatusConsulta.CANCELADA } }),
      );
      expect(result.status).toBe(StatusConsulta.CANCELADA);
    });
  });

  describe('atualizarStatus', () => {
    it('lança NotFoundException se consulta não existe', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(null);
      await expect(
        service.atualizarStatus('cons-x', { status: StatusConsulta.CONFIRMADA }, 'user-psi-1'),
      ).rejects.toThrow(NotFoundException);
    });

    it('lança ForbiddenException se psicólogo não é responsável', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, psicologoId: 'outro-psi' });
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);

      await expect(
        service.atualizarStatus('cons-1', { status: StatusConsulta.CONFIRMADA }, 'user-psi-1'),
      ).rejects.toThrow(ForbiddenException);
    });

    it('atualiza status com sucesso', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(consultaMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      mockPrisma.consulta.update.mockResolvedValue({ ...consultaMock, status: StatusConsulta.CONFIRMADA });

      const result = await service.atualizarStatus(
        'cons-1', { status: StatusConsulta.CONFIRMADA }, 'user-psi-1',
      );
      expect(result.status).toBe(StatusConsulta.CONFIRMADA);
    });
  });

  describe('buscarPorId', () => {
    it('lança NotFoundException se consulta não existe', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(null);
      await expect(service.buscarPorId('cons-x', 'user-col-1', 'COLABORADOR')).rejects.toThrow(NotFoundException);
    });

    it('lança ForbiddenException se colaborador acessa consulta de outro', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, colaboradorId: 'outro-col' });
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      await expect(service.buscarPorId('cons-1', 'user-col-1', 'COLABORADOR')).rejects.toThrow(ForbiddenException);
    });

    it('lança ForbiddenException se psicólogo acessa consulta de outro', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue({ ...consultaMock, psicologoId: 'outro-psi' });
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      await expect(service.buscarPorId('cons-1', 'user-psi-1', 'PSICOLOGO')).rejects.toThrow(ForbiddenException);
    });

    it('retorna consulta para o colaborador dono', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(consultaMock);
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      const result = await service.buscarPorId('cons-1', 'user-col-1', 'COLABORADOR');
      expect(result.id).toBe('cons-1');
    });

    it('retorna consulta para o psicólogo responsável', async () => {
      mockPrisma.consulta.findUnique.mockResolvedValue(consultaMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      const result = await service.buscarPorId('cons-1', 'user-psi-1', 'PSICOLOGO');
      expect(result.id).toBe('cons-1');
    });
  });

  describe('listarMinhas', () => {
    it('retorna consultas do colaborador', async () => {
      mockPrisma.perfilColaborador.findUnique.mockResolvedValue(colaboradorMock);
      mockPrisma.consulta.findMany.mockResolvedValue([consultaMock]);

      const result = await service.listarMinhas('user-col-1', 'COLABORADOR');
      expect(mockPrisma.consulta.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { colaboradorId: 'col-1' } }),
      );
      expect(result).toHaveLength(1);
    });

    it('retorna consultas do psicólogo', async () => {
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(psicologoMock);
      mockPrisma.consulta.findMany.mockResolvedValue([consultaMock]);

      const result = await service.listarMinhas('user-psi-1', 'PSICOLOGO');
      expect(mockPrisma.consulta.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { psicologoId: 'psi-1' } }),
      );
      expect(result).toHaveLength(1);
    });
  });
});
