interface AnaliseResult {
    respostaIa: string;
    conteudoPsicologico: string;
}
export declare class AnthropicService {
    analisarCheckin(humor: string, nivelEstresse: number): Promise<AnaliseResult>;
}
export {};
