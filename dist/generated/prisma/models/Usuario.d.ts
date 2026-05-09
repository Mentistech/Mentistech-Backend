import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    senhaHash: string | null;
    papel: $Enums.PapelUsuario | null;
    criadoEm: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    senhaHash: string | null;
    papel: $Enums.PapelUsuario | null;
    criadoEm: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    senhaHash: number;
    papel: number;
    criadoEm: number;
    _all: number;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    papel?: true;
    criadoEm?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    papel?: true;
    criadoEm?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    papel?: true;
    criadoEm?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.StringFilter<"Usuario"> | string;
    nome?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    senhaHash?: Prisma.StringFilter<"Usuario"> | string;
    papel?: Prisma.EnumPapelUsuarioFilter<"Usuario"> | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    perfilColaborador?: Prisma.XOR<Prisma.PerfilColaboradorNullableScalarRelationFilter, Prisma.PerfilColaboradorWhereInput> | null;
    perfilPsicologo?: Prisma.XOR<Prisma.PerfilPsicologoNullableScalarRelationFilter, Prisma.PerfilPsicologoWhereInput> | null;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    perfilColaborador?: Prisma.PerfilColaboradorOrderByWithRelationInput;
    perfilPsicologo?: Prisma.PerfilPsicologoOrderByWithRelationInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nome?: Prisma.StringFilter<"Usuario"> | string;
    senhaHash?: Prisma.StringFilter<"Usuario"> | string;
    papel?: Prisma.EnumPapelUsuarioFilter<"Usuario"> | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    perfilColaborador?: Prisma.XOR<Prisma.PerfilColaboradorNullableScalarRelationFilter, Prisma.PerfilColaboradorWhereInput> | null;
    perfilPsicologo?: Prisma.XOR<Prisma.PerfilPsicologoNullableScalarRelationFilter, Prisma.PerfilPsicologoWhereInput> | null;
}, "id" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    senhaHash?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    papel?: Prisma.EnumPapelUsuarioWithAggregatesFilter<"Usuario"> | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorCreateNestedOneWithoutUsuarioInput;
    perfilPsicologo?: Prisma.PerfilPsicologoCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUncheckedCreateNestedOneWithoutUsuarioInput;
    perfilPsicologo?: Prisma.PerfilPsicologoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUpdateOneWithoutUsuarioNestedInput;
    perfilPsicologo?: Prisma.PerfilPsicologoUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUncheckedUpdateOneWithoutUsuarioNestedInput;
    perfilPsicologo?: Prisma.PerfilPsicologoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumPapelUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.PapelUsuario;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UsuarioCreateNestedOneWithoutPerfilColaboradorInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedCreateWithoutPerfilColaboradorInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPerfilColaboradorInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutPerfilColaboradorNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedCreateWithoutPerfilColaboradorInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPerfilColaboradorInput;
    upsert?: Prisma.UsuarioUpsertWithoutPerfilColaboradorInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutPerfilColaboradorInput, Prisma.UsuarioUpdateWithoutPerfilColaboradorInput>, Prisma.UsuarioUncheckedUpdateWithoutPerfilColaboradorInput>;
};
export type UsuarioCreateNestedOneWithoutPerfilPsicologoInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedCreateWithoutPerfilPsicologoInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPerfilPsicologoInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutPerfilPsicologoNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedCreateWithoutPerfilPsicologoInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPerfilPsicologoInput;
    upsert?: Prisma.UsuarioUpsertWithoutPerfilPsicologoInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutPerfilPsicologoInput, Prisma.UsuarioUpdateWithoutPerfilPsicologoInput>, Prisma.UsuarioUncheckedUpdateWithoutPerfilPsicologoInput>;
};
export type UsuarioCreateWithoutPerfilColaboradorInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilPsicologo?: Prisma.PerfilPsicologoCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutPerfilColaboradorInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilPsicologo?: Prisma.PerfilPsicologoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutPerfilColaboradorInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedCreateWithoutPerfilColaboradorInput>;
};
export type UsuarioUpsertWithoutPerfilColaboradorInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedUpdateWithoutPerfilColaboradorInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedCreateWithoutPerfilColaboradorInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutPerfilColaboradorInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutPerfilColaboradorInput, Prisma.UsuarioUncheckedUpdateWithoutPerfilColaboradorInput>;
};
export type UsuarioUpdateWithoutPerfilColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilPsicologo?: Prisma.PerfilPsicologoUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutPerfilColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilPsicologo?: Prisma.PerfilPsicologoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutPerfilPsicologoInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutPerfilPsicologoInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    papel: $Enums.PapelUsuario;
    criadoEm?: Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutPerfilPsicologoInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedCreateWithoutPerfilPsicologoInput>;
};
export type UsuarioUpsertWithoutPerfilPsicologoInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedUpdateWithoutPerfilPsicologoInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedCreateWithoutPerfilPsicologoInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutPerfilPsicologoInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutPerfilPsicologoInput, Prisma.UsuarioUncheckedUpdateWithoutPerfilPsicologoInput>;
};
export type UsuarioUpdateWithoutPerfilPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutPerfilPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.EnumPapelUsuarioFieldUpdateOperationsInput | $Enums.PapelUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perfilColaborador?: Prisma.PerfilColaboradorUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    papel?: boolean;
    criadoEm?: boolean;
    perfilColaborador?: boolean | Prisma.Usuario$perfilColaboradorArgs<ExtArgs>;
    perfilPsicologo?: boolean | Prisma.Usuario$perfilPsicologoArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    papel?: boolean;
    criadoEm?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    papel?: boolean;
    criadoEm?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    papel?: boolean;
    criadoEm?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "senhaHash" | "papel" | "criadoEm", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfilColaborador?: boolean | Prisma.Usuario$perfilColaboradorArgs<ExtArgs>;
    perfilPsicologo?: boolean | Prisma.Usuario$perfilPsicologoArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        perfilColaborador: Prisma.$PerfilColaboradorPayload<ExtArgs> | null;
        perfilPsicologo: Prisma.$PerfilPsicologoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        email: string;
        senhaHash: string;
        papel: $Enums.PapelUsuario;
        criadoEm: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    perfilColaborador<T extends Prisma.Usuario$perfilColaboradorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$perfilColaboradorArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    perfilPsicologo<T extends Prisma.Usuario$perfilPsicologoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$perfilPsicologoArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'String'>;
    readonly nome: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly senhaHash: Prisma.FieldRef<"Usuario", 'String'>;
    readonly papel: Prisma.FieldRef<"Usuario", 'PapelUsuario'>;
    readonly criadoEm: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$perfilColaboradorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where?: Prisma.PerfilColaboradorWhereInput;
};
export type Usuario$perfilPsicologoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where?: Prisma.PerfilPsicologoWhereInput;
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
