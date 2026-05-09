import { PrismaService } from '../prisma/prisma.service';
import { AgendarConsultaDto } from './dto/agendar-consulta.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class ConsultaService {
    private prisma;
    constructor(prisma: PrismaService);
    agendar(dto: AgendarConsultaDto, usuarioId: string): Promise<{
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
    buscarPorId(consultaId: string, usuarioId: string, papel: string): Promise<{
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
    listarMinhas(usuarioId: string, papel: string): Promise<({
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
    cancelar(consultaId: string, usuarioId: string): Promise<{
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
    atualizarStatus(consultaId: string, dto: UpdateStatusDto, usuarioId: string): Promise<{
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        observacoes: string | null;
        status: import("@prisma/client").$Enums.StatusConsulta;
    }>;
}
