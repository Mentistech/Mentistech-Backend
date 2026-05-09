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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologoController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const public_decorator_1 = require("../common/decorators/public.decorator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const criar_disponibilidade_dto_1 = require("./dto/criar-disponibilidade.dto");
const psicologo_service_1 = require("./psicologo.service");
let PsicologoController = class PsicologoController {
    psicologoService;
    constructor(psicologoService) {
        this.psicologoService = psicologoService;
    }
    listarTodos() {
        return this.psicologoService.listarTodos();
    }
    buscarDisponibilidade(id) {
        return this.psicologoService.buscarDisponibilidade(id);
    }
    criarDisponibilidade(dto, user) {
        return this.psicologoService.criarDisponibilidade(dto, user.usuarioId);
    }
    removerDisponibilidade(id, user) {
        return this.psicologoService.removerDisponibilidade(id, user.usuarioId);
    }
};
exports.PsicologoController = PsicologoController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PsicologoController.prototype, "listarTodos", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/disponibilidade'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsicologoController.prototype, "buscarDisponibilidade", null);
__decorate([
    (0, common_1.Post)('disponibilidade'),
    (0, roles_decorator_1.Roles)(client_1.PapelUsuario.PSICOLOGO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_disponibilidade_dto_1.CriarDisponibilidadeDto, Object]),
    __metadata("design:returntype", void 0)
], PsicologoController.prototype, "criarDisponibilidade", null);
__decorate([
    (0, common_1.Delete)('disponibilidade/:id'),
    (0, roles_decorator_1.Roles)(client_1.PapelUsuario.PSICOLOGO),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PsicologoController.prototype, "removerDisponibilidade", null);
exports.PsicologoController = PsicologoController = __decorate([
    (0, common_1.Controller)('psicologos'),
    __metadata("design:paramtypes", [psicologo_service_1.PsicologoService])
], PsicologoController);
//# sourceMappingURL=psicologo.controller.js.map