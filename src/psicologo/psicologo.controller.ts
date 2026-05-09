import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PapelUsuario } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { CriarDisponibilidadeDto } from './dto/criar-disponibilidade.dto';
import { PsicologoService } from './psicologo.service';

@Controller('psicologos')
export class PsicologoController {
  constructor(private psicologoService: PsicologoService) {}

  @Public()
  @Get()
  listarTodos() {
    return this.psicologoService.listarTodos();
  }

  @Public()
  @Get(':id/disponibilidade')
  buscarDisponibilidade(@Param('id') id: string) {
    return this.psicologoService.buscarDisponibilidade(id);
  }

  @Post('disponibilidade')
  @Roles(PapelUsuario.PSICOLOGO)
  criarDisponibilidade(
    @Body() dto: CriarDisponibilidadeDto,
    @CurrentUser() user: { usuarioId: string },
  ) {
    return this.psicologoService.criarDisponibilidade(dto, user.usuarioId);
  }

  @Delete('disponibilidade/:id')
  @Roles(PapelUsuario.PSICOLOGO)
  removerDisponibilidade(
    @Param('id') id: string,
    @CurrentUser() user: { usuarioId: string },
  ) {
    return this.psicologoService.removerDisponibilidade(id, user.usuarioId);
  }
}
