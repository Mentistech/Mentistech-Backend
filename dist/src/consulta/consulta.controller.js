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
exports.ConsultaController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const consulta_service_1 = require("./consulta.service");
const agendar_consulta_dto_1 = require("./dto/agendar-consulta.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
let ConsultaController = class ConsultaController {
    consultaService;
    constructor(consultaService) {
        this.consultaService = consultaService;
    }
    agendar(dto, user) {
        return this.consultaService.agendar(dto, user.usuarioId);
    }
    listarMinhas(user) {
        return this.consultaService.listarMinhas(user.usuarioId, user.papel);
    }
    buscarPorId(id, user) {
        return this.consultaService.buscarPorId(id, user.usuarioId, user.papel);
    }
    cancelar(id, user) {
        return this.consultaService.cancelar(id, user.usuarioId);
    }
    atualizarStatus(id, dto, user) {
        return this.consultaService.atualizarStatus(id, dto, user.usuarioId);
    }
};
exports.ConsultaController = ConsultaController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.PapelUsuario.COLABORADOR),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agendar_consulta_dto_1.AgendarConsultaDto, Object]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "agendar", null);
__decorate([
    (0, common_1.Get)('minhas'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "listarMinhas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.PapelUsuario.COLABORADOR),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "cancelar", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, roles_decorator_1.Roles)(client_1.PapelUsuario.PSICOLOGO),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto, Object]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "atualizarStatus", null);
exports.ConsultaController = ConsultaController = __decorate([
    (0, common_1.Controller)('consultas'),
    __metadata("design:paramtypes", [consulta_service_1.ConsultaService])
], ConsultaController);
//# sourceMappingURL=consulta.controller.js.map