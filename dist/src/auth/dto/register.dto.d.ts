import { PapelUsuario } from '@prisma/client';
export declare class RegisterDto {
    nome: string;
    email: string;
    senha: string;
    papel: PapelUsuario;
    departamento?: string;
    cargo?: string;
    crp?: string;
    especialidade?: string;
}
