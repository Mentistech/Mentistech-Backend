import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PapelUsuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { AuthService } from '../../../src/auth/auth.service';

const mockPrisma = {
  usuario: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  perfilColaborador: {
    create: jest.fn(),
    update: jest.fn(),
  },
  perfilPsicologo: {
    create: jest.fn(),
    update: jest.fn(),
  },
};

const mockJwt = { sign: jest.fn().mockReturnValue('token-mock') };

const usuarioColaborador = {
  id: 'uuid-1',
  nome: 'João',
  email: 'joao@test.com',
  senhaHash: 'hash',
  papel: PapelUsuario.COLABORADOR,
  criadoEm: new Date(),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: JwtService, useValue: mockJwt },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('lança ConflictException se e-mail já existe', async () => {
      mockPrisma.usuario.findUnique.mockResolvedValue(usuarioColaborador);
      await expect(
        service.register({ nome: 'X', email: 'joao@test.com', senha: '123456', papel: PapelUsuario.COLABORADOR }),
      ).rejects.toThrow(ConflictException);
    });

    it('cria usuário colaborador e retorna token', async () => {
      mockPrisma.usuario.findUnique.mockResolvedValue(null);
      mockPrisma.usuario.create.mockResolvedValue(usuarioColaborador);
      mockPrisma.perfilColaborador.create.mockResolvedValue({});

      const result = await service.register({
        nome: 'João', email: 'joao@test.com', senha: '123456',
        papel: PapelUsuario.COLABORADOR, departamento: 'TI', cargo: 'Dev',
      });

      expect(mockPrisma.perfilColaborador.create).toHaveBeenCalledTimes(1);
      expect(mockPrisma.perfilPsicologo.create).not.toHaveBeenCalled();
      expect(result.token).toBe('token-mock');
      expect(result.papel).toBe(PapelUsuario.COLABORADOR);
    });

    it('cria usuário psicólogo e perfil correto', async () => {
      const psicologo = { ...usuarioColaborador, papel: PapelUsuario.PSICOLOGO };
      mockPrisma.usuario.findUnique.mockResolvedValue(null);
      mockPrisma.usuario.create.mockResolvedValue(psicologo);
      mockPrisma.perfilPsicologo.create.mockResolvedValue({});

      await service.register({
        nome: 'Dra. Ana', email: 'ana@test.com', senha: '123456',
        papel: PapelUsuario.PSICOLOGO, crp: '12345', especialidade: 'Clínica',
      });

      expect(mockPrisma.perfilPsicologo.create).toHaveBeenCalledTimes(1);
      expect(mockPrisma.perfilColaborador.create).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('lança UnauthorizedException se usuário não existe', async () => {
      mockPrisma.usuario.findUnique.mockResolvedValue(null);
      await expect(service.login({ email: 'x@x.com', senha: '123456' })).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('lança UnauthorizedException se senha incorreta', async () => {
      const hash = await bcrypt.hash('correta', 10);
      mockPrisma.usuario.findUnique.mockResolvedValue({ ...usuarioColaborador, senhaHash: hash });
      await expect(service.login({ email: 'joao@test.com', senha: 'errada' })).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('retorna token quando credenciais corretas', async () => {
      const hash = await bcrypt.hash('123456', 10);
      mockPrisma.usuario.findUnique.mockResolvedValue({ ...usuarioColaborador, senhaHash: hash });

      const result = await service.login({ email: 'joao@test.com', senha: '123456' });
      expect(result.token).toBe('token-mock');
      expect(result.usuarioId).toBe('uuid-1');
    });
  });

  describe('me', () => {
    it('lança NotFoundException se usuário não existe', async () => {
      mockPrisma.usuario.findUnique.mockResolvedValue(null);
      await expect(service.me('uuid-inexistente')).rejects.toThrow(NotFoundException);
    });

    it('retorna dados do usuário sem senhaHash', async () => {
      const dados = { id: 'uuid-1', nome: 'João', email: 'joao@test.com', papel: PapelUsuario.COLABORADOR, criadoEm: new Date(), perfilColaborador: null, perfilPsicologo: null };
      mockPrisma.usuario.findUnique.mockResolvedValue(dados);

      const result = await service.me('uuid-1');
      expect(result.id).toBe('uuid-1');
      expect((result as any).senhaHash).toBeUndefined();
    });
  });

  describe('atualizarPerfil', () => {
    it('lança NotFoundException se usuário não existe', async () => {
      mockPrisma.usuario.findUnique.mockResolvedValue(null);
      await expect(service.atualizarPerfil('uuid-1', {})).rejects.toThrow(NotFoundException);
    });

    it('atualiza nome e perfil colaborador', async () => {
      mockPrisma.usuario.findUnique
        .mockResolvedValueOnce(usuarioColaborador)
        .mockResolvedValueOnce({ ...usuarioColaborador, nome: 'João Novo', perfilColaborador: null, perfilPsicologo: null });
      mockPrisma.usuario.update.mockResolvedValue({});
      mockPrisma.perfilColaborador.update.mockResolvedValue({});

      const result = await service.atualizarPerfil('uuid-1', { nome: 'João Novo', departamento: 'RH' });
      expect(mockPrisma.usuario.update).toHaveBeenCalled();
      expect(mockPrisma.perfilColaborador.update).toHaveBeenCalled();
      expect(result).toBeDefined();
    });
  });
});
