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
exports.PsicologoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PsicologoService = class PsicologoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    listarTodos() {
        return this.prisma.perfilPsicologo.findMany({
            include: {
                usuario: { select: { nome: true, email: true } },
                disponibilidades: true,
            },
        });
    }
    buscarDisponibilidade(psicologoId) {
        return this.prisma.disponibilidade.findMany({ where: { psicologoId } });
    }
    async criarDisponibilidade(dto, usuarioId) {
        const perfil = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
        if (!perfil)
            throw new common_1.ForbiddenException('Apenas psicólogos podem cadastrar disponibilidade');
        if (dto.horaFim <= dto.horaInicio) {
            throw new common_1.BadRequestException('horaFim deve ser posterior a horaInicio');
        }
        return this.prisma.disponibilidade.create({
            data: { psicologoId: perfil.id, diaSemana: dto.diaSemana, horaInicio: dto.horaInicio, horaFim: dto.horaFim },
        });
    }
    async removerDisponibilidade(disponibilidadeId, usuarioId) {
        const disponibilidade = await this.prisma.disponibilidade.findUnique({
            where: { id: disponibilidadeId },
        });
        if (!disponibilidade)
            throw new common_1.NotFoundException('Disponibilidade não encontrada');
        const perfil = await this.prisma.perfilPsicologo.findUnique({ where: { usuarioId } });
        if (!perfil || disponibilidade.psicologoId !== perfil.id) {
            throw new common_1.ForbiddenException('Acesso negado a esta disponibilidade');
        }
        await this.prisma.disponibilidade.delete({ where: { id: disponibilidadeId } });
        return { mensagem: 'Disponibilidade removida com sucesso' };
    }
};
exports.PsicologoService = PsicologoService;
exports.PsicologoService = PsicologoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PsicologoService);
//# sourceMappingURL=psicologo.service.js.map