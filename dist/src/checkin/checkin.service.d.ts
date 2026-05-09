import { PrismaService } from '../prisma/prisma.service';
import { AnthropicService } from './anthropic.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
interface UsuarioLogado {
    usuarioId: string;
    papel: string;
}
export declare class CheckinService {
    private prisma;
    private anthropicService;
    constructor(prisma: PrismaService, anthropicService: AnthropicService);
    realizarCheckin(dto: CreateCheckinDto, usuarioId: string): Promise<{
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
        respostaIa: string;
    }>;
    listarMeus(usuarioId: string): Promise<({
        analise: {
            respostaIa: string | null;
            geradoEm: Date;
        } | null;
    } & {
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
        colaboradorId: string;
    })[]>;
    buscarPorId(checkinId: string, usuario: UsuarioLogado): Promise<{
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
    }>;
    buscarAnalise(checkinId: string, usuario: UsuarioLogado): Promise<{
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
        respostaIa: string | null;
        geradoEm: Date | null;
        analise?: undefined;
    } | {
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
        analise: {
            id: string;
            respostaIa: string | null;
            conteudoPsicologico: string | null;
            geradoEm: Date;
            checkinId: string;
        } | null;
        respostaIa?: undefined;
        geradoEm?: undefined;
    }>;
}
export {};
