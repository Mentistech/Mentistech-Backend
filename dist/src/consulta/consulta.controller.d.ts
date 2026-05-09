import { ConsultaService } from './consulta.service';
import { AgendarConsultaDto } from './dto/agendar-consulta.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class ConsultaController {
    private consultaService;
    constructor(consultaService: ConsultaService);
    agendar(dto: AgendarConsultaDto, user: {
        usuarioId: string;
    }): Promise<{
        colaborador: {
            usuario: {
                nome: string;
            };
        } & {
            departamento: string | null;
            cargo: string | null;
            id: string;
            usuarioId: string;
        };
        analise: {
            id: string;
            respostaIa: string | null;
            conteudoPsicologico: string | null;
            geradoEm: Date;
            checkinId: string;
        } | null;
        psicologo: {
            usuario: {
                nome: string;
            };
            crp: string | null;
            especialidade: string | null;
            id: string;
            usuarioId: string;
        };
    } & {
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
    listarMinhas(user: {
        usuarioId: string;
        papel: string;
    }): Promise<({
        colaborador: {
            usuario: {
                nome: string;
            };
        } & {
            departamento: string | null;
            cargo: string | null;
            id: string;
            usuarioId: string;
        };
        analise: {
            id: string;
            respostaIa: string | null;
            conteudoPsicologico: string | null;
            geradoEm: Date;
            checkinId: string;
        } | null;
        psicologo: {
            usuario: {
                nome: string;
            };
            crp: string | null;
            especialidade: string | null;
            id: string;
            usuarioId: string;
        };
    } & {
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    })[]>;
    buscarPorId(id: string, user: {
        usuarioId: string;
        papel: string;
    }): Promise<{
        colaborador: {
            usuario: {
                nome: string;
            };
        } & {
            departamento: string | null;
            cargo: string | null;
            id: string;
            usuarioId: string;
        };
        analise: {
            id: string;
            respostaIa: string | null;
            conteudoPsicologico: string | null;
            geradoEm: Date;
            checkinId: string;
        } | null;
        psicologo: {
            usuario: {
                nome: string;
            };
            crp: string | null;
            especialidade: string | null;
            id: string;
            usuarioId: string;
        };
    } & {
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
    cancelar(id: string, user: {
        usuarioId: string;
    }): Promise<{
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
    atualizarStatus(id: string, dto: UpdateStatusDto, user: {
        usuarioId: string;
    }): Promise<{
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
}
