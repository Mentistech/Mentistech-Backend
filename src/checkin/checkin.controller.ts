import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PapelUsuario } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { CheckinService } from './checkin.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';

@Controller('checkin')
export class CheckinController {
  constructor(private checkinService: CheckinService) {}

  @Post()
  @Roles(PapelUsuario.COLABORADOR)
  realizarCheckin(
    @CurrentUser() user: { usuarioId: string; papel: string },
    @Body() dto: CreateCheckinDto,
  ) {
    return this.checkinService.realizarCheckin(dto, user.usuarioId);
  }

  @Get('meus')
  @Roles(PapelUsuario.COLABORADOR)
  listarMeus(@CurrentUser() user: { usuarioId: string }) {
    return this.checkinService.listarMeus(user.usuarioId);
  }

  @Get(':id')
  buscarPorId(
    @Param('id') id: string,
    @CurrentUser() user: { usuarioId: string; papel: string },
  ) {
    return this.checkinService.buscarPorId(id, user);
  }

  @Get(':id/analise')
  buscarAnalise(
    @Param('id') id: string,
    @CurrentUser() user: { usuarioId: string; papel: string },
  ) {
    return this.checkinService.buscarAnalise(id, user);
  }
}
