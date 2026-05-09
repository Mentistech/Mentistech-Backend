import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CriarDisponibilidadeDto } from './dto/criar-disponibilidade.dto';

@Injectable()
export class PsicologoService {
  constructor(private prisma: PrismaService) {}

  listarTodos() {
    return this.prisma.perfilPsicologo.findMany({
      include: {
        usuario: { select: { nome: true, email: true } },
        disponibilidades: true,
      },
    });
  }

  buscarDisponibilidade(psicologoId: string) {
    return this.prisma.disponibilidade.findMany({ where: { psicologoId } });
  }

  async criarDisponibilidade(dto: CriarDisponibilidadeDto, usuarioId: string) {
    const perfil = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
    if (!perfil) throw new ForbiddenException('Apenas psicólogos podem cadastrar disponibilidade');

    if (dto.horaFim <= dto.horaInicio) {
      throw new BadRequestException('horaFim deve ser posterior a horaInicio');
    }

    return this.prisma.disponibilidade.create({
      data: { psicologoId: perfil.id, diaSemana: dto.diaSemana, horaInicio: dto.horaInicio, horaFim: dto.horaFim },
    });
  }

  async removerDisponibilidade(disponibilidadeId: string, usuarioId: string) {
    const disponibilidade = await this.prisma.disponibilidade.findUnique({
      where: { id: disponibilidadeId },
    });
    if (!disponibilidade) throw new NotFoundException('Disponibilidade não encontrada');

    const perfil = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
    if (!perfil || disponibilidade.psicologoId !== perfil.id) {
      throw new ForbiddenException('Acesso negado a esta disponibilidade');
    }

    await this.prisma.disponibilidade.delete({ where: { id: disponibilidadeId } });
    return { mensagem: 'Disponibilidade removida com sucesso' };
  }
}
