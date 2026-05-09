import { IsOptional, IsString } from 'class-validator';

export class UpdatePerfilDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsOptional()
  @IsString()
  cargo?: string;

  @IsOptional()
  @IsString()
  crp?: string;

  @IsOptional()
  @IsString()
  especialidade?: string;
}
