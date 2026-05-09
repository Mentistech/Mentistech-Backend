export declare class ConsultaResponseDto {
    id: string;
    dataHora: Date;
    status: string;
    observacoes: string | null;
    colaborador: {
        usuario: {
            nome: string;
        };
    } | null;
    psicologo: {
        crp: string | null;
        usuario: {
            nome: string;
        };
    } | null;
}
