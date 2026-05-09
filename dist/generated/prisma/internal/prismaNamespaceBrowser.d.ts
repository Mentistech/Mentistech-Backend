import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly PerfilColaborador: "PerfilColaborador";
    readonly PerfilPsicologo: "PerfilPsicologo";
    readonly Disponibilidade: "Disponibilidade";
    readonly CheckinEmocional: "CheckinEmocional";
    readonly AnaliseIa: "AnaliseIa";
    readonly Consulta: "Consulta";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly senhaHash: "senhaHash";
    readonly papel: "papel";
    readonly criadoEm: "criadoEm";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const PerfilColaboradorScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly departamento: "departamento";
    readonly cargo: "cargo";
};
export type PerfilColaboradorScalarFieldEnum = (typeof PerfilColaboradorScalarFieldEnum)[keyof typeof PerfilColaboradorScalarFieldEnum];
export declare const PerfilPsicologoScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly crp: "crp";
    readonly especialidade: "especialidade";
};
export type PerfilPsicologoScalarFieldEnum = (typeof PerfilPsicologoScalarFieldEnum)[keyof typeof PerfilPsicologoScalarFieldEnum];
export declare const DisponibilidadeScalarFieldEnum: {
    readonly id: "id";
    readonly psicologoId: "psicologoId";
    readonly diaSemana: "diaSemana";
    readonly horaInicio: "horaInicio";
    readonly horaFim: "horaFim";
};
export type DisponibilidadeScalarFieldEnum = (typeof DisponibilidadeScalarFieldEnum)[keyof typeof DisponibilidadeScalarFieldEnum];
export declare const CheckinEmocionalScalarFieldEnum: {
    readonly id: "id";
    readonly colaboradorId: "colaboradorId";
    readonly humor: "humor";
    readonly nivelEstresse: "nivelEstresse";
    readonly realizadoEm: "realizadoEm";
};
export type CheckinEmocionalScalarFieldEnum = (typeof CheckinEmocionalScalarFieldEnum)[keyof typeof CheckinEmocionalScalarFieldEnum];
export declare const AnaliseIaScalarFieldEnum: {
    readonly id: "id";
    readonly checkinId: "checkinId";
    readonly respostaIa: "respostaIa";
    readonly conteudoPsicologico: "conteudoPsicologico";
    readonly geradoEm: "geradoEm";
};
export type AnaliseIaScalarFieldEnum = (typeof AnaliseIaScalarFieldEnum)[keyof typeof AnaliseIaScalarFieldEnum];
export declare const ConsultaScalarFieldEnum: {
    readonly id: "id";
    readonly colaboradorId: "colaboradorId";
    readonly psicologoId: "psicologoId";
    readonly analiseId: "analiseId";
    readonly dataHora: "dataHora";
    readonly status: "status";
    readonly observacoes: "observacoes";
};
export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
