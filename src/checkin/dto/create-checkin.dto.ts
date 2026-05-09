import { HumorTipo } from '@prisma/client';
import { IsEnum, IsInt, Max, Min } from 'class-validator';

export class CreateCheckinDto {
  @IsEnum(HumorTipo)
  humor: HumorTipo;

  @IsInt()
  @Min(1)
  @Max(10)
  nivelEstresse: number;
}
