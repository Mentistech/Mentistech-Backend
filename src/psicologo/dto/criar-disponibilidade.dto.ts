import { DiaSemana } from '@prisma/client';
import { IsEnum, IsString, Matches } from 'class-validator';

export class CriarDisponibilidadeDto {
  @IsEnum(DiaSemana)
  diaSemana: DiaSemana;

  @IsString()
  @Matches(/^\d{2}:\d{2}$/)
  horaInicio: string;

  @IsString()
  @Matches(/^\d{2}:\d{2}$/)
  horaFim: string;
}
