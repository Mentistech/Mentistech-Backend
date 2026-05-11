import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnthropicService } from './anthropic.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';

interface UsuarioLogado {
  usuarioId: string;
  papel: string;
}

@Injectable()
export class CheckinService {
  constructor(
    private prisma: PrismaService,
    private anthropicService: AnthropicService,
  ) {}

  async realizarCheckin(dto: CreateCheckinDto, usuarioId: string) {
    const perfil = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
    if (!perfil) throw new ForbiddenException('Apenas colaboradores podem realizar check-in');

    const checkin = await this.prisma.checkinEmocional.create({
      data: { colaboradorId: perfil.id, humor: dto.humor, nivelEstresse: dto.nivelEstresse },
    });

    // IA é opcional — se falhar, o checkin salva normalmente
    let respostaIa: string | null = null;
    try {
      const analise = await this.anthropicService.analisarCheckin(dto.humor, dto.nivelEstresse);
      respostaIa = analise.respostaIa;
      await this.prisma.analiseIa.create({
        data: {
          checkinId: checkin.id,
          respostaIa: analise.respostaIa,
          conteudoPsicologico: analise.conteudoPsicologico,
        },
      });
    } catch {
      // sem chave da Anthropic ou falha na API — continua sem análise
    }

    return {
      id: checkin.id,
      humor: checkin.humor,
      nivelEstresse: checkin.nivelEstresse,
      realizadoEm: checkin.realizadoEm,
      respostaIa,
    };
  }

  async listarMeus(usuarioId: string) {
    const perfil = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
    if (!perfil) throw new ForbiddenException('Apenas colaboradores podem listar check-ins');

    return this.prisma.checkinEmocional.findMany({
      where: { colaboradorId: perfil.id },
      include: { analise: { select: { respostaIa: true, geradoEm: true } } },
      orderBy: { realizadoEm: 'desc' },
    });
  }

  async buscarPorId(checkinId: string, usuario: UsuarioLogado) {
    const checkin = await this.prisma.checkinEmocional.findUnique({
      where: { id: checkinId },
      include: { colaborador: true },
    });
    if (!checkin) throw new NotFoundException('Check-in não encontrado');

    if (usuario.papel === 'COLABORADOR') {
      const perfil = await this.prisma.perfilColaborador.findUnique({
        where: { usuarioId: usuario.usuarioId },
      });
      if (!perfil || checkin.colaboradorId !== perfil.id) {
        throw new ForbiddenException('Acesso negado a este check-in');
      }
    }

    return {
      id: checkin.id,
      humor: checkin.humor,
      nivelEstresse: checkin.nivelEstresse,
      realizadoEm: checkin.realizadoEm,
    };
  }

  async buscarAnalise(checkinId: string, usuario: UsuarioLogado) {
    const checkin = await this.prisma.checkinEmocional.findUnique({
      where: { id: checkinId },
      include: { analise: true, colaborador: true },
    });
    if (!checkin) throw new NotFoundException('Check-in não encontrado');

    if (usuario.papel === 'COLABORADOR') {
      const perfil = await this.prisma.perfilColaborador.findUnique({
        where: { usuarioId: usuario.usuarioId },
      });
      if (!perfil || checkin.colaboradorId !== perfil.id) {
        throw new ForbiddenException('Acesso negado a este check-in');
      }

      // colaborador vê apenas respostaIa — sem conteudoPsicologico
      return {
        id: checkin.id,
        humor: checkin.humor,
        nivelEstresse: checkin.nivelEstresse,
        realizadoEm: checkin.realizadoEm,
        respostaIa: checkin.analise?.respostaIa ?? null,
        geradoEm: checkin.analise?.geradoEm ?? null,
      };
    }

    // psicólogo vê tudo incluindo conteudoPsicologico
    return {
      id: checkin.id,
      humor: checkin.humor,
      nivelEstresse: checkin.nivelEstresse,
      realizadoEm: checkin.realizadoEm,
      analise: checkin.analise,
    };
  }
}
