import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StatusConsulta } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AgendarConsultaDto } from './dto/agendar-consulta.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

const DIAS_SEMANA = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

const CONSULTA_INCLUDE = {
  colaborador: { include: { usuario: { select: { nome: true, email: true } } } },
  psicologo: {
    select: {
      id: true, crp: true, especialidade: true, usuarioId: true,
      usuario: { select: { nome: true } },
    },
  },
  analise: true,
} as const;

@Injectable()
export class ConsultaService {
  constructor(private prisma: PrismaService) {}

  async agendar(dto: AgendarConsultaDto, usuarioId: string) {
    const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
    if (!colaborador) throw new ForbiddenException('Apenas colaboradores podem agendar consultas');

    const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { id: dto.psicologoId } });
    if (!psicologo) throw new NotFoundException('Psicólogo não encontrado');

    const dataHora = new Date(dto.dataHora);
    const diaSemana = DIAS_SEMANA[dataHora.getDay()];
    const horaStr = `${String(dataHora.getHours()).padStart(2, '0')}:${String(dataHora.getMinutes()).padStart(2, '0')}`;

    const disponibilidades = await this.prisma.disponibilidade.findMany({
      where: { psicologoId: dto.psicologoId, diaSemana: diaSemana as any },
    });

    const dentroDisponibilidade = disponibilidades.some(
      (d) => horaStr >= d.horaInicio && horaStr < d.horaFim,
    );
    if (!dentroDisponibilidade) {
      throw new BadRequestException('Horário fora da disponibilidade do psicólogo');
    }

    const conflito = await this.prisma.consulta.findFirst({
      where: {
        psicologoId: dto.psicologoId,
        dataHora,
        status: { in: [StatusConsulta.AGENDADA, StatusConsulta.CONFIRMADA] },
      },
    });
    if (conflito) throw new ConflictException('Horário já ocupado');

    return this.prisma.consulta.create({
      data: {
        colaboradorId: colaborador.id,
        psicologoId: dto.psicologoId,
        analiseId: dto.analiseId,
        dataHora,
        observacoes: dto.observacoes,
      },
      include: CONSULTA_INCLUDE,
    });
  }

  async buscarPorId(consultaId: string, usuarioId: string, papel: string) {
    const consulta = await this.prisma.consulta.findUnique({
      where: { id: consultaId },
      include: CONSULTA_INCLUDE,
    });
    if (!consulta) throw new NotFoundException('Consulta não encontrada');

    if (papel === 'COLABORADOR') {
      const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
      if (!colaborador || consulta.colaboradorId !== colaborador.id) {
        throw new ForbiddenException('Acesso negado a esta consulta');
      }
    } else {
      const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
      if (!psicologo || consulta.psicologoId !== psicologo.id) {
        throw new ForbiddenException('Acesso negado a esta consulta');
      }
    }

    return consulta;
  }

  async listarMinhas(usuarioId: string, papel: string) {
    if (papel === 'COLABORADOR') {
      const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
      if (!colaborador) throw new ForbiddenException('Perfil não encontrado');
      const consultas = await this.prisma.consulta.findMany({
        where: { colaboradorId: colaborador.id },
        include: CONSULTA_INCLUDE,
        orderBy: { dataHora: 'desc' },
      });
      return consultas.map(c => ({
        ...c,
        psicologo: {
          ...c.psicologo,
          nome: c.psicologo?.usuario?.nome,
        },
      }));
    }

    const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
    if (!psicologo) throw new ForbiddenException('Perfil não encontrado');
    const consultas = await this.prisma.consulta.findMany({
      where: { psicologoId: psicologo.id },
      include: CONSULTA_INCLUDE,
      orderBy: { dataHora: 'desc' },
    });
    return consultas.map(c => ({
      ...c,
      colaborador: {
        ...c.colaborador,
        nome: c.colaborador?.usuario?.nome,
        email: c.colaborador?.usuario?.email,
      },
    }));
  }

  async cancelar(consultaId: string, usuarioId: string) {
    const consulta = await this.prisma.consulta.findUnique({ where: { id: consultaId } });
    if (!consulta) throw new NotFoundException('Consulta não encontrada');

    const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
    if (!colaborador || consulta.colaboradorId !== colaborador.id) {
      throw new ForbiddenException('Apenas o colaborador dono da consulta pode cancelá-la');
    }

    if (consulta.status === StatusConsulta.REALIZADA) {
      throw new BadRequestException('Não é possível cancelar uma consulta já realizada');
    }

    if (consulta.status === StatusConsulta.CANCELADA) {
      throw new BadRequestException('Consulta já está cancelada');
    }

    return this.prisma.consulta.update({
      where: { id: consultaId },
      data: { status: StatusConsulta.CANCELADA },
    });
  }

  async atualizarStatus(consultaId: string, dto: UpdateStatusDto, usuarioId: string) {
    console.log('atualizarStatus chamado:', { consultaId, dto, usuarioId });
    const consulta = await this.prisma.consulta.findUnique({ where: { id: consultaId } });
    if (!consulta) throw new NotFoundException('Consulta não encontrada');

    const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
    if (!psicologo || consulta.psicologoId !== psicologo.id) {
      throw new ForbiddenException('Apenas o psicólogo responsável pode alterar o status');
    }

    return this.prisma.consulta.update({
      where: { id: consultaId },
      data: { status: dto.status },
    });
  }
}
