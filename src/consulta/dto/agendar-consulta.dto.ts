import {
  IsISO8601,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class AgendarConsultaDto {
  @IsUUID()
  psicologoId: string;

  @IsOptional()
  @IsUUID()
  analiseId?: string;

  @IsISO8601()
  dataHora: string;

  @IsOptional()
  @IsString()
  observacoes?: string;
}
