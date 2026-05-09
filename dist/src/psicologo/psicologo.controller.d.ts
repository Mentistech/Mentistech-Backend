import { CriarDisponibilidadeDto } from './dto/criar-disponibilidade.dto';
import { PsicologoService } from './psicologo.service';
export declare class PsicologoController {
    private psicologoService;
    constructor(psicologoService: PsicologoService);
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
    buscarDisponibilidade(id: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        psicologoId: string;
        diaSemana: import("@prisma/client").$Enums.DiaSemana;
        horaInicio: string;
        horaFim: string;
    }[]>;
    criarDisponibilidade(dto: CriarDisponibilidadeDto, user: {
        usuarioId: string;
    }): Promise<{
        id: string;
        psicologoId: string;
        diaSemana: import("@prisma/client").$Enums.DiaSemana;
        horaInicio: string;
        horaFim: string;
    }>;
    removerDisponibilidade(id: string, user: {
        usuarioId: string;
    }): Promise<{
        mensagem: string;
    }>;
}
