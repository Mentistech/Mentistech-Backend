"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const DIAS_SEMANA = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];
const CONSULTA_INCLUDE = {
    colaborador: { include: { usuario: { select: { nome: true } } } },
    psicologo: {
        select: {
            id: true, crp: true, especialidade: true, usuarioId: true,
            usuario: { select: { nome: true } },
        },
    },
    analise: true,
};
let ConsultaService = class ConsultaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async agendar(dto, usuarioId) {
        const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
        if (!colaborador)
            throw new common_1.ForbiddenException('Apenas colaboradores podem agendar consultas');
        const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { id: dto.psicologoId } });
        if (!psicologo)
            throw new common_1.NotFoundException('Psicólogo não encontrado');
        const dataHora = new Date(dto.dataHora);
        const diaSemana = DIAS_SEMANA[dataHora.getDay()];
        const horaStr = `${String(dataHora.getHours()).padStart(2, '0')}:${String(dataHora.getMinutes()).padStart(2, '0')}`;
        const disponibilidades = await this.prisma.disponibilidade.findMany({
            where: { psicologoId: dto.psicologoId, diaSemana: diaSemana },
        });
        const dentroDisponibilidade = disponibilidades.some((d) => horaStr >= d.horaInicio && horaStr < d.horaFim);
        if (!dentroDisponibilidade) {
            throw new common_1.BadRequestException('Horário fora da disponibilidade do psicólogo');
        }
        const conflito = await this.prisma.consulta.findFirst({
            where: {
                psicologoId: dto.psicologoId,
                dataHora,
                status: { in: [client_1.StatusConsulta.AGENDADA, client_1.StatusConsulta.CONFIRMADA] },
            },
        });
        if (conflito)
            throw new common_1.ConflictException('Horário já ocupado');
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
    async buscarPorId(consultaId, usuarioId, papel) {
        const consulta = await this.prisma.consulta.findUnique({
            where: { id: consultaId },
            include: CONSULTA_INCLUDE,
        });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta não encontrada');
        if (papel === 'COLABORADOR') {
            const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
            if (!colaborador || consulta.colaboradorId !== colaborador.id) {
                throw new common_1.ForbiddenException('Acesso negado a esta consulta');
            }
        }
        else {
            const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
            if (!psicologo || consulta.psicologoId !== psicologo.id) {
                throw new common_1.ForbiddenException('Acesso negado a esta consulta');
            }
        }
        return consulta;
    }
    async listarMinhas(usuarioId, papel) {
        if (papel === 'COLABORADOR') {
            const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
            if (!colaborador)
                throw new common_1.ForbiddenException('Perfil não encontrado');
            return this.prisma.consulta.findMany({
                where: { colaboradorId: colaborador.id },
                include: CONSULTA_INCLUDE,
                orderBy: { dataHora: 'desc' },
            });
        }
        const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
        if (!psicologo)
            throw new common_1.ForbiddenException('Perfil não encontrado');
        return this.prisma.consulta.findMany({
            where: { psicologoId: psicologo.id },
            include: CONSULTA_INCLUDE,
            orderBy: { dataHora: 'desc' },
        });
    }
    async cancelar(consultaId, usuarioId) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id: consultaId } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta não encontrada');
        const colaborador = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
        if (!colaborador || consulta.colaboradorId !== colaborador.id) {
            throw new common_1.ForbiddenException('Apenas o colaborador dono da consulta pode cancelá-la');
        }
        if (consulta.status === client_1.StatusConsulta.REALIZADA) {
            throw new common_1.BadRequestException('Não é possível cancelar uma consulta já realizada');
        }
        if (consulta.status === client_1.StatusConsulta.CANCELADA) {
            throw new common_1.BadRequestException('Consulta já está cancelada');
        }
        return this.prisma.consulta.update({
            where: { id: consultaId },
            data: { status: client_1.StatusConsulta.CANCELADA },
        });
    }
    async atualizarStatus(consultaId, dto, usuarioId) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id: consultaId } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta não encontrada');
        const psicologo = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
        if (!psicologo || consulta.psicologoId !== psicologo.id) {
            throw new common_1.ForbiddenException('Apenas o psicólogo responsável pode alterar o status');
        }
        return this.prisma.consulta.update({
            where: { id: consultaId },
            data: { status: dto.status },
        });
    }
};
exports.ConsultaService = ConsultaService;
exports.ConsultaService = ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsultaService);
//# sourceMappingURL=consulta.service.js.map