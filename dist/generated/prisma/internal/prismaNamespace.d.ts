import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "perfilColaborador" | "perfilPsicologo" | "disponibilidade" | "checkinEmocional" | "analiseIa" | "consulta";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        PerfilColaborador: {
            payload: Prisma.$PerfilColaboradorPayload<ExtArgs>;
            fields: Prisma.PerfilColaboradorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerfilColaboradorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerfilColaboradorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                findFirst: {
                    args: Prisma.PerfilColaboradorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerfilColaboradorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                findMany: {
                    args: Prisma.PerfilColaboradorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>[];
                };
                create: {
                    args: Prisma.PerfilColaboradorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                createMany: {
                    args: Prisma.PerfilColaboradorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerfilColaboradorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>[];
                };
                delete: {
                    args: Prisma.PerfilColaboradorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                update: {
                    args: Prisma.PerfilColaboradorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                deleteMany: {
                    args: Prisma.PerfilColaboradorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerfilColaboradorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerfilColaboradorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>[];
                };
                upsert: {
                    args: Prisma.PerfilColaboradorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilColaboradorPayload>;
                };
                aggregate: {
                    args: Prisma.PerfilColaboradorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerfilColaborador>;
                };
                groupBy: {
                    args: Prisma.PerfilColaboradorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilColaboradorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerfilColaboradorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilColaboradorCountAggregateOutputType> | number;
                };
            };
        };
        PerfilPsicologo: {
            payload: Prisma.$PerfilPsicologoPayload<ExtArgs>;
            fields: Prisma.PerfilPsicologoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerfilPsicologoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerfilPsicologoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                findFirst: {
                    args: Prisma.PerfilPsicologoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerfilPsicologoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                findMany: {
                    args: Prisma.PerfilPsicologoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>[];
                };
                create: {
                    args: Prisma.PerfilPsicologoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                createMany: {
                    args: Prisma.PerfilPsicologoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerfilPsicologoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>[];
                };
                delete: {
                    args: Prisma.PerfilPsicologoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                update: {
                    args: Prisma.PerfilPsicologoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                deleteMany: {
                    args: Prisma.PerfilPsicologoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerfilPsicologoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerfilPsicologoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>[];
                };
                upsert: {
                    args: Prisma.PerfilPsicologoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPsicologoPayload>;
                };
                aggregate: {
                    args: Prisma.PerfilPsicologoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerfilPsicologo>;
                };
                groupBy: {
                    args: Prisma.PerfilPsicologoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilPsicologoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerfilPsicologoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilPsicologoCountAggregateOutputType> | number;
                };
            };
        };
        Disponibilidade: {
            payload: Prisma.$DisponibilidadePayload<ExtArgs>;
            fields: Prisma.DisponibilidadeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisponibilidadeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                findFirst: {
                    args: Prisma.DisponibilidadeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisponibilidadeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                findMany: {
                    args: Prisma.DisponibilidadeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[];
                };
                create: {
                    args: Prisma.DisponibilidadeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                createMany: {
                    args: Prisma.DisponibilidadeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisponibilidadeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[];
                };
                delete: {
                    args: Prisma.DisponibilidadeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                update: {
                    args: Prisma.DisponibilidadeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                deleteMany: {
                    args: Prisma.DisponibilidadeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisponibilidadeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[];
                };
                upsert: {
                    args: Prisma.DisponibilidadeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisponibilidadePayload>;
                };
                aggregate: {
                    args: Prisma.DisponibilidadeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisponibilidade>;
                };
                groupBy: {
                    args: Prisma.DisponibilidadeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisponibilidadeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisponibilidadeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisponibilidadeCountAggregateOutputType> | number;
                };
            };
        };
        CheckinEmocional: {
            payload: Prisma.$CheckinEmocionalPayload<ExtArgs>;
            fields: Prisma.CheckinEmocionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CheckinEmocionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CheckinEmocionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                findFirst: {
                    args: Prisma.CheckinEmocionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CheckinEmocionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                findMany: {
                    args: Prisma.CheckinEmocionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>[];
                };
                create: {
                    args: Prisma.CheckinEmocionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                createMany: {
                    args: Prisma.CheckinEmocionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CheckinEmocionalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>[];
                };
                delete: {
                    args: Prisma.CheckinEmocionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                update: {
                    args: Prisma.CheckinEmocionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                deleteMany: {
                    args: Prisma.CheckinEmocionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CheckinEmocionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CheckinEmocionalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>[];
                };
                upsert: {
                    args: Prisma.CheckinEmocionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinEmocionalPayload>;
                };
                aggregate: {
                    args: Prisma.CheckinEmocionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCheckinEmocional>;
                };
                groupBy: {
                    args: Prisma.CheckinEmocionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinEmocionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CheckinEmocionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinEmocionalCountAggregateOutputType> | number;
                };
            };
        };
        AnaliseIa: {
            payload: Prisma.$AnaliseIaPayload<ExtArgs>;
            fields: Prisma.AnaliseIaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnaliseIaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnaliseIaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                findFirst: {
                    args: Prisma.AnaliseIaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnaliseIaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                findMany: {
                    args: Prisma.AnaliseIaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>[];
                };
                create: {
                    args: Prisma.AnaliseIaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                createMany: {
                    args: Prisma.AnaliseIaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnaliseIaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>[];
                };
                delete: {
                    args: Prisma.AnaliseIaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                update: {
                    args: Prisma.AnaliseIaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                deleteMany: {
                    args: Prisma.AnaliseIaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnaliseIaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnaliseIaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>[];
                };
                upsert: {
                    args: Prisma.AnaliseIaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnaliseIaPayload>;
                };
                aggregate: {
                    args: Prisma.AnaliseIaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnaliseIa>;
                };
                groupBy: {
                    args: Prisma.AnaliseIaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnaliseIaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnaliseIaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnaliseIaCountAggregateOutputType> | number;
                };
            };
        };
        Consulta: {
            payload: Prisma.$ConsultaPayload<ExtArgs>;
            fields: Prisma.ConsultaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsultaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                findFirst: {
                    args: Prisma.ConsultaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                findMany: {
                    args: Prisma.ConsultaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>[];
                };
                create: {
                    args: Prisma.ConsultaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                createMany: {
                    args: Prisma.ConsultaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>[];
                };
                delete: {
                    args: Prisma.ConsultaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                update: {
                    args: Prisma.ConsultaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsultaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsultaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>[];
                };
                upsert: {
                    args: Prisma.ConsultaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultaPayload>;
                };
                aggregate: {
                    args: Prisma.ConsultaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsulta>;
                };
                groupBy: {
                    args: Prisma.ConsultaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsultaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsultaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsultaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumPapelUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelUsuario'>;
export type ListEnumPapelUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelUsuario[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>;
export type ListEnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana[]'>;
export type EnumHumorTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HumorTipo'>;
export type ListEnumHumorTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HumorTipo[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumStatusConsultaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConsulta'>;
export type ListEnumStatusConsultaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConsulta[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    perfilColaborador?: Prisma.PerfilColaboradorOmit;
    perfilPsicologo?: Prisma.PerfilPsicologoOmit;
    disponibilidade?: Prisma.DisponibilidadeOmit;
    checkinEmocional?: Prisma.CheckinEmocionalOmit;
    analiseIa?: Prisma.AnaliseIaOmit;
    consulta?: Prisma.ConsultaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
