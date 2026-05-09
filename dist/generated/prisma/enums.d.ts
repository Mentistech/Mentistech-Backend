export declare const PapelUsuario: {
    readonly COLABORADOR: "COLABORADOR";
    readonly PSICOLOGO: "PSICOLOGO";
};
export type PapelUsuario = (typeof PapelUsuario)[keyof typeof PapelUsuario];
export declare const HumorTipo: {
    readonly MUITO_BEM: "MUITO_BEM";
    readonly BEM: "BEM";
    readonly NEUTRO: "NEUTRO";
    readonly MAL: "MAL";
    readonly MUITO_MAL: "MUITO_MAL";
};
export type HumorTipo = (typeof HumorTipo)[keyof typeof HumorTipo];
export declare const StatusConsulta: {
    readonly AGENDADA: "AGENDADA";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly CANCELADA: "CANCELADA";
    readonly REALIZADA: "REALIZADA";
};
export type StatusConsulta = (typeof StatusConsulta)[keyof typeof StatusConsulta];
export declare const DiaSemana: {
    readonly SEGUNDA: "SEGUNDA";
    readonly TERCA: "TERCA";
    readonly QUARTA: "QUARTA";
    readonly QUINTA: "QUINTA";
    readonly SEXTA: "SEXTA";
    readonly SABADO: "SABADO";
    readonly DOMINGO: "DOMINGO";
};
export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana];
