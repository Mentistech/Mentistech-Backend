import { PrismaService } from '../prisma/prisma.service';
import { CriarDisponibilidadeDto } from './dto/criar-disponibilidade.dto';
export declare class PsicologoService {
    private prisma;
    constructor(prisma: PrismaService);
    listarTodos(): import("@prisma/client").Prisma.PrismaPromise<({
        usuario: {
            email: string;
            nome: string;
        };
        disponibilidades: {
            id: string;
            psicologoId: string;
            diaSemana: import("@prisma/client").$Enums.DiaSemana;
            horaInicio: string;
            horaFim: string;
        }[];
    } & {
        crp: string | null;
        especialidade: string | null;
        id: string;
        usuarioId: string;
    })[]>;
    buscarDisponibilidade(psicologoId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        psicologoId: string;
        diaSemana: import("@prisma/client").$Enums.DiaSemana;
        horaInicio: string;
        horaFim: string;
    }[]>;
    criarDisponibilidade(dto: CriarDisponibilidadeDto, usuarioId: string): Promise<{
        id: string;
        psicologoId: string;
        diaSemana: import("@prisma/client").$Enums.DiaSemana;
        horaInicio: string;
        horaFim: string;
    }>;
    removerDisponibilidade(disponibilidadeId: string, usuarioId: string): Promise<{
        mensagem: string;
    }>;
}
