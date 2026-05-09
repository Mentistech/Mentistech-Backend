import { CheckinService } from './checkin.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
export declare class CheckinController {
    private checkinService;
    constructor(checkinService: CheckinService);
    realizarCheckin(user: {
        usuarioId: string;
        papel: string;
    }, dto: CreateCheckinDto): Promise<{
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
        respostaIa: string;
    }>;
    listarMeus(user: {
        usuarioId: string;
    }): Promise<({
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
    buscarPorId(id: string, user: {
        usuarioId: string;
        papel: string;
    }): Promise<{
        id: string;
        humor: import("@prisma/client").$Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
    }>;
    buscarAnalise(id: string, user: {
        usuarioId: string;
        papel: string;
    }): Promise<{
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
