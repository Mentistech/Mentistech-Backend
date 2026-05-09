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
exports.CheckinService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const anthropic_service_1 = require("./anthropic.service");
let CheckinService = class CheckinService {
    prisma;
    anthropicService;
    constructor(prisma, anthropicService) {
        this.prisma = prisma;
        this.anthropicService = anthropicService;
    }
    async realizarCheckin(dto, usuarioId) {
        const perfil = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
        if (!perfil)
            throw new common_1.ForbiddenException('Apenas colaboradores podem realizar check-in');
        const checkin = await this.prisma.checkinEmocional.create({
            data: { colaboradorId: perfil.id, humor: dto.humor, nivelEstresse: dto.nivelEstresse },
        });
        const { respostaIa, conteudoPsicologico } = await this.anthropicService.analisarCheckin(dto.humor, dto.nivelEstresse);
        await this.prisma.analiseIa.create({
            data: { checkinId: checkin.id, respostaIa, conteudoPsicologico },
        });
        return { id: checkin.id, humor: checkin.humor, nivelEstresse: checkin.nivelEstresse, realizadoEm: checkin.realizadoEm, respostaIa };
    }
    async listarMeus(usuarioId) {
        const perfil = await this.prisma.perfilColaborador.findUnique({ where: { usuarioId } });
        if (!perfil)
            throw new common_1.ForbiddenException('Apenas colaboradores podem listar check-ins');
        return this.prisma.checkinEmocional.findMany({
            where: { colaboradorId: perfil.id },
            include: { analise: { select: { respostaIa: true, geradoEm: true } } },
            orderBy: { realizadoEm: 'desc' },
        });
    }
    async buscarPorId(checkinId, usuario) {
        const checkin = await this.prisma.checkinEmocional.findUnique({
            where: { id: checkinId },
            include: { colaborador: true },
        });
        if (!checkin)
            throw new common_1.NotFoundException('Check-in não encontrado');
        if (usuario.papel === 'COLABORADOR') {
            const perfil = await this.prisma.perfilColaborador.findUnique({
                where: { usuarioId: usuario.usuarioId },
            });
            if (!perfil || checkin.colaboradorId !== perfil.id) {
                throw new common_1.ForbiddenException('Acesso negado a este check-in');
            }
        }
        return {
            id: checkin.id,
            humor: checkin.humor,
            nivelEstresse: checkin.nivelEstresse,
            realizadoEm: checkin.realizadoEm,
        };
    }
    async buscarAnalise(checkinId, usuario) {
        const checkin = await this.prisma.checkinEmocional.findUnique({
            where: { id: checkinId },
            include: { analise: true, colaborador: true },
        });
        if (!checkin)
            throw new common_1.NotFoundException('Check-in não encontrado');
        if (usuario.papel === 'COLABORADOR') {
            const perfil = await this.prisma.perfilColaborador.findUnique({
                where: { usuarioId: usuario.usuarioId },
            });
            if (!perfil || checkin.colaboradorId !== perfil.id) {
                throw new common_1.ForbiddenException('Acesso negado a este check-in');
            }
            return {
                id: checkin.id,
                humor: checkin.humor,
                nivelEstresse: checkin.nivelEstresse,
                realizadoEm: checkin.realizadoEm,
                respostaIa: checkin.analise?.respostaIa ?? null,
                geradoEm: checkin.analise?.geradoEm ?? null,
            };
        }
        return {
            id: checkin.id,
            humor: checkin.humor,
            nivelEstresse: checkin.nivelEstresse,
            realizadoEm: checkin.realizadoEm,
            analise: checkin.analise,
        };
    }
};
exports.CheckinService = CheckinService;
exports.CheckinService = CheckinService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        anthropic_service_1.AnthropicService])
], CheckinService);
//# sourceMappingURL=checkin.service.js.map