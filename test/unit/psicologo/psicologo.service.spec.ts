import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DiaSemana } from '@prisma/client';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { PsicologoService } from '../../../src/psicologo/psicologo.service';

const mockPrisma = {
  perfilPsicologo: { findMany: jest.fn(), findUnique: jest.fn() },
  disponibilidade: { findMany: jest.fn(), create: jest.fn(), findUnique: jest.fn(), delete: jest.fn() },
};

const perfilMock = { id: 'psi-perfil-1', usuarioId: 'user-psi-1' };

const disponibilidadeMock = {
  id: 'disp-1',
  psicologoId: 'psi-perfil-1',
  diaSemana: DiaSemana.SEGUNDA,
  horaInicio: '08:00',
  horaFim: '12:00',
};

describe('PsicologoService', () => {
  let service: PsicologoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PsicologoService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<PsicologoService>(PsicologoService);
    jest.clearAllMocks();
  });

  describe('listarTodos', () => {
    it('retorna lista de psicólogos com includes', async () => {
      mockPrisma.perfilPsicologo.findMany.mockResolvedValue([perfilMock]);
      const result = await service.listarTodos();
      expect(result).toHaveLength(1);
    });
  });

  describe('criarDisponibilidade', () => {
    it('lança ForbiddenException se usuário não é psicólogo', async () => {
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(null);
      await expect(
        service.criarDisponibilidade(
          { diaSemana: DiaSemana.SEGUNDA, horaInicio: '08:00', horaFim: '12:00' },
          'user-1',
        ),
      ).rejects.toThrow(ForbiddenException);
    });

    it('lança BadRequestException se horaFim <= horaInicio', async () => {
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(perfilMock);
      await expect(
        service.criarDisponibilidade(
          { diaSemana: DiaSemana.SEGUNDA, horaInicio: '12:00', horaFim: '08:00' },
          'user-psi-1',
        ),
      ).rejects.toThrow(BadRequestException);
    });

    it('lança BadRequestException se horaFim igual a horaInicio', async () => {
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(perfilMock);
      await expect(
        service.criarDisponibilidade(
          { diaSemana: DiaSemana.SEGUNDA, horaInicio: '10:00', horaFim: '10:00' },
          'user-psi-1',
        ),
      ).rejects.toThrow(BadRequestException);
    });

    it('cria disponibilidade com dados válidos', async () => {
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(perfilMock);
      mockPrisma.disponibilidade.create.mockResolvedValue(disponibilidadeMock);

      const result = await service.criarDisponibilidade(
        { diaSemana: DiaSemana.SEGUNDA, horaInicio: '08:00', horaFim: '12:00' },
        'user-psi-1',
      );

      expect(mockPrisma.disponibilidade.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ psicologoId: 'psi-perfil-1' }) }),
      );
      expect(result.id).toBe('disp-1');
    });
  });

  describe('removerDisponibilidade', () => {
    it('lança NotFoundException se disponibilidade não existe', async () => {
      mockPrisma.disponibilidade.findUnique.mockResolvedValue(null);
      await expect(service.removerDisponibilidade('disp-x', 'user-psi-1')).rejects.toThrow(NotFoundException);
    });

    it('lança ForbiddenException se psicólogo não é dono', async () => {
      mockPrisma.disponibilidade.findUnique.mockResolvedValue({ ...disponibilidadeMock, psicologoId: 'outro-psi' });
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(perfilMock);

      await expect(service.removerDisponibilidade('disp-1', 'user-psi-1')).rejects.toThrow(ForbiddenException);
    });

    it('deleta e retorna mensagem de sucesso', async () => {
      mockPrisma.disponibilidade.findUnique.mockResolvedValue(disponibilidadeMock);
      mockPrisma.perfilPsicologo.findUnique.mockResolvedValue(perfilMock);
      mockPrisma.disponibilidade.delete.mockResolvedValue({});

      const result = await service.removerDisponibilidade('disp-1', 'user-psi-1');
      expect(mockPrisma.disponibilidade.delete).toHaveBeenCalledWith({ where: { id: 'disp-1' } });
      expect(result.mensagem).toContain('sucesso');
    });
  });
});
