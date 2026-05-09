import { StatusConsulta } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateStatusDto {
  @IsEnum(StatusConsulta)
  status: StatusConsulta;
}
