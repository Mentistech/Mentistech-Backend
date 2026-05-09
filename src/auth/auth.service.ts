import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PapelUsuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    const existing = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new ConflictException('E-mail já cadastrado');

    const senhaHash = await bcrypt.hash(dto.senha, 10);

    const usuario = await this.prisma.usuario.create({
      data: { nome: dto.nome, email: dto.email, senhaHash, papel: dto.papel },
    });

    if (dto.papel === PapelUsuario.COLABORADOR) {
      await this.prisma.perfilColaborador.create({
        data: { usuarioId: usuario.id, departamento: dto.departamento, cargo: dto.cargo },
      });
    }

    if (dto.papel === PapelUsuario.PSICOLOGO) {
      await this.prisma.perfilPsicologo.create({
        data: { usuarioId: usuario.id, crp: dto.crp, especialidade: dto.especialidade },
      });
    }

    return this.gerarToken(usuario);
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const usuario = await this.prisma.usuario.findUnique({ where: { email: dto.email } });
    if (!usuario) throw new UnauthorizedException('Credenciais inválidas');

    const senhaValida = await bcrypt.compare(dto.senha, usuario.senhaHash);
    if (!senhaValida) throw new UnauthorizedException('Credenciais inválidas');

    return this.gerarToken(usuario);
  }

  async me(usuarioId: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: {
        id: true,
        nome: true,
        email: true,
        papel: true,
        criadoEm: true,
        perfilColaborador: { select: { id: true, departamento: true, cargo: true } },
        perfilPsicologo: { select: { id: true, crp: true, especialidade: true } },
      },
    });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');
    return usuario;
  }

  async atualizarPerfil(usuarioId: string, dto: UpdatePerfilDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const updates: Array<Promise<unknown>> = [];

    if (dto.nome) {
      updates.push(
        this.prisma.usuario.update({ where: { id: usuarioId }, data: { nome: dto.nome } }),
      );
    }

    if (usuario.papel === PapelUsuario.COLABORADOR) {
      updates.push(
        this.prisma.perfilColaborador.update({
          where: { usuarioId },
          data: { departamento: dto.departamento, cargo: dto.cargo },
        }),
      );
    }

    if (usuario.papel === PapelUsuario.PSICOLOGO) {
      updates.push(
        this.prisma.perfilPsicologo.update({
          where: { usuarioId },
          data: { crp: dto.crp, especialidade: dto.especialidade },
        }),
      );
    }

    await Promise.all(updates);
    return this.me(usuarioId);
  }

  private gerarToken(usuario: {
    id: string;
    email: string;
    papel: PapelUsuario;
    nome: string;
  }): AuthResponseDto {
    const payload = { sub: usuario.id, email: usuario.email, papel: usuario.papel, nome: usuario.nome };
    return {
      token: this.jwtService.sign(payload),
      papel: usuario.papel,
      nome: usuario.nome,
      usuarioId: usuario.id,
    };
  }
}
