import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PapelUsuario } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { ConsultaService } from './consulta.service';
import { AgendarConsultaDto } from './dto/agendar-consulta.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('consultas')
export class ConsultaController {
  constructor(private consultaService: ConsultaService) {}

  @Post()
  @Roles(PapelUsuario.COLABORADOR)
  agendar(
    @Body() dto: AgendarConsultaDto,
    @CurrentUser() user: { usuarioId: string },
  ) {
    return this.consultaService.agendar(dto, user.usuarioId);
  }

  @Get('minhas')
  listarMinhas(@CurrentUser() user: { usuarioId: string; papel: string }) {
    return this.consultaService.listarMinhas(user.usuarioId, user.papel);
  }

  @Get(':id')
  buscarPorId(
    @Param('id') id: string,
    @CurrentUser() user: { usuarioId: string; papel: string },
  ) {
    return this.consultaService.buscarPorId(id, user.usuarioId, user.papel);
  }

  @Delete(':id')
  @Roles(PapelUsuario.COLABORADOR)
  cancelar(
    @Param('id') id: string,
    @CurrentUser() user: { usuarioId: string },
  ) {
    return this.consultaService.cancelar(id, user.usuarioId);
  }

  @Patch(':id/status')
  @Roles(PapelUsuario.PSICOLOGO)
  atualizarStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto,
    @CurrentUser() user: { usuarioId: string },
  ) {
    return this.consultaService.atualizarStatus(id, dto, user.usuarioId);
  }
}
