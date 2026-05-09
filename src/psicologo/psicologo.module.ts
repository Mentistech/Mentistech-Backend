import { Module } from '@nestjs/common';
import { PsicologoController } from './psicologo.controller';
import { PsicologoService } from './psicologo.service';

@Module({
  controllers: [PsicologoController],
  providers: [PsicologoService],
})
export class PsicologoModule {}
