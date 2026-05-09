import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DisponibilidadeModel = runtime.Types.Result.DefaultSelection<Prisma.$DisponibilidadePayload>;
export type AggregateDisponibilidade = {
    _count: DisponibilidadeCountAggregateOutputType | null;
    _min: DisponibilidadeMinAggregateOutputType | null;
    _max: DisponibilidadeMaxAggregateOutputType | null;
};
export type DisponibilidadeMinAggregateOutputType = {
    id: string | null;
    psicologoId: string | null;
    diaSemana: $Enums.DiaSemana | null;
    horaInicio: string | null;
    horaFim: string | null;
};
export type DisponibilidadeMaxAggregateOutputType = {
    id: string | null;
    psicologoId: string | null;
    diaSemana: $Enums.DiaSemana | null;
    horaInicio: string | null;
    horaFim: string | null;
};
export type DisponibilidadeCountAggregateOutputType = {
    id: number;
    psicologoId: number;
    diaSemana: number;
    horaInicio: number;
    horaFim: number;
    _all: number;
};
export type DisponibilidadeMinAggregateInputType = {
    id?: true;
    psicologoId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFim?: true;
};
export type DisponibilidadeMaxAggregateInputType = {
    id?: true;
    psicologoId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFim?: true;
};
export type DisponibilidadeCountAggregateInputType = {
    id?: true;
    psicologoId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFim?: true;
    _all?: true;
};
export type DisponibilidadeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisponibilidadeWhereInput;
    orderBy?: Prisma.DisponibilidadeOrderByWithRelationInput | Prisma.DisponibilidadeOrderByWithRelationInput[];
    cursor?: Prisma.DisponibilidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DisponibilidadeCountAggregateInputType;
    _min?: DisponibilidadeMinAggregateInputType;
    _max?: DisponibilidadeMaxAggregateInputType;
};
export type GetDisponibilidadeAggregateType<T extends DisponibilidadeAggregateArgs> = {
    [P in keyof T & keyof AggregateDisponibilidade]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDisponibilidade[P]> : Prisma.GetScalarType<T[P], AggregateDisponibilidade[P]>;
};
export type DisponibilidadeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisponibilidadeWhereInput;
    orderBy?: Prisma.DisponibilidadeOrderByWithAggregationInput | Prisma.DisponibilidadeOrderByWithAggregationInput[];
    by: Prisma.DisponibilidadeScalarFieldEnum[] | Prisma.DisponibilidadeScalarFieldEnum;
    having?: Prisma.DisponibilidadeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DisponibilidadeCountAggregateInputType | true;
    _min?: DisponibilidadeMinAggregateInputType;
    _max?: DisponibilidadeMaxAggregateInputType;
};
export type DisponibilidadeGroupByOutputType = {
    id: string;
    psicologoId: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
    _count: DisponibilidadeCountAggregateOutputType | null;
    _min: DisponibilidadeMinAggregateOutputType | null;
    _max: DisponibilidadeMaxAggregateOutputType | null;
};
export type GetDisponibilidadeGroupByPayload<T extends DisponibilidadeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DisponibilidadeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DisponibilidadeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>;
}>>;
export type DisponibilidadeWhereInput = {
    AND?: Prisma.DisponibilidadeWhereInput | Prisma.DisponibilidadeWhereInput[];
    OR?: Prisma.DisponibilidadeWhereInput[];
    NOT?: Prisma.DisponibilidadeWhereInput | Prisma.DisponibilidadeWhereInput[];
    id?: Prisma.StringFilter<"Disponibilidade"> | string;
    psicologoId?: Prisma.StringFilter<"Disponibilidade"> | string;
    diaSemana?: Prisma.EnumDiaSemanaFilter<"Disponibilidade"> | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFilter<"Disponibilidade"> | string;
    horaFim?: Prisma.StringFilter<"Disponibilidade"> | string;
    psicologo?: Prisma.XOR<Prisma.PerfilPsicologoScalarRelationFilter, Prisma.PerfilPsicologoWhereInput>;
};
export type DisponibilidadeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFim?: Prisma.SortOrder;
    psicologo?: Prisma.PerfilPsicologoOrderByWithRelationInput;
};
export type DisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DisponibilidadeWhereInput | Prisma.DisponibilidadeWhereInput[];
    OR?: Prisma.DisponibilidadeWhereInput[];
    NOT?: Prisma.DisponibilidadeWhereInput | Prisma.DisponibilidadeWhereInput[];
    psicologoId?: Prisma.StringFilter<"Disponibilidade"> | string;
    diaSemana?: Prisma.EnumDiaSemanaFilter<"Disponibilidade"> | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFilter<"Disponibilidade"> | string;
    horaFim?: Prisma.StringFilter<"Disponibilidade"> | string;
    psicologo?: Prisma.XOR<Prisma.PerfilPsicologoScalarRelationFilter, Prisma.PerfilPsicologoWhereInput>;
}, "id">;
export type DisponibilidadeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFim?: Prisma.SortOrder;
    _count?: Prisma.DisponibilidadeCountOrderByAggregateInput;
    _max?: Prisma.DisponibilidadeMaxOrderByAggregateInput;
    _min?: Prisma.DisponibilidadeMinOrderByAggregateInput;
};
export type DisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: Prisma.DisponibilidadeScalarWhereWithAggregatesInput | Prisma.DisponibilidadeScalarWhereWithAggregatesInput[];
    OR?: Prisma.DisponibilidadeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DisponibilidadeScalarWhereWithAggregatesInput | Prisma.DisponibilidadeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Disponibilidade"> | string;
    psicologoId?: Prisma.StringWithAggregatesFilter<"Disponibilidade"> | string;
    diaSemana?: Prisma.EnumDiaSemanaWithAggregatesFilter<"Disponibilidade"> | $Enums.DiaSemana;
    horaInicio?: Prisma.StringWithAggregatesFilter<"Disponibilidade"> | string;
    horaFim?: Prisma.StringWithAggregatesFilter<"Disponibilidade"> | string;
};
export type DisponibilidadeCreateInput = {
    id?: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
    psicologo: Prisma.PerfilPsicologoCreateNestedOneWithoutDisponibilidadesInput;
};
export type DisponibilidadeUncheckedCreateInput = {
    id?: string;
    psicologoId: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
};
export type DisponibilidadeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologo?: Prisma.PerfilPsicologoUpdateOneRequiredWithoutDisponibilidadesNestedInput;
};
export type DisponibilidadeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeCreateManyInput = {
    id?: string;
    psicologoId: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
};
export type DisponibilidadeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeListRelationFilter = {
    every?: Prisma.DisponibilidadeWhereInput;
    some?: Prisma.DisponibilidadeWhereInput;
    none?: Prisma.DisponibilidadeWhereInput;
};
export type DisponibilidadeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DisponibilidadeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFim?: Prisma.SortOrder;
};
export type DisponibilidadeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFim?: Prisma.SortOrder;
};
export type DisponibilidadeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFim?: Prisma.SortOrder;
};
export type DisponibilidadeCreateNestedManyWithoutPsicologoInput = {
    create?: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput> | Prisma.DisponibilidadeCreateWithoutPsicologoInput[] | Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput | Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput[];
    createMany?: Prisma.DisponibilidadeCreateManyPsicologoInputEnvelope;
    connect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
};
export type DisponibilidadeUncheckedCreateNestedManyWithoutPsicologoInput = {
    create?: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput> | Prisma.DisponibilidadeCreateWithoutPsicologoInput[] | Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput | Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput[];
    createMany?: Prisma.DisponibilidadeCreateManyPsicologoInputEnvelope;
    connect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
};
export type DisponibilidadeUpdateManyWithoutPsicologoNestedInput = {
    create?: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput> | Prisma.DisponibilidadeCreateWithoutPsicologoInput[] | Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput | Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput[];
    upsert?: Prisma.DisponibilidadeUpsertWithWhereUniqueWithoutPsicologoInput | Prisma.DisponibilidadeUpsertWithWhereUniqueWithoutPsicologoInput[];
    createMany?: Prisma.DisponibilidadeCreateManyPsicologoInputEnvelope;
    set?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    disconnect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    delete?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    connect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    update?: Prisma.DisponibilidadeUpdateWithWhereUniqueWithoutPsicologoInput | Prisma.DisponibilidadeUpdateWithWhereUniqueWithoutPsicologoInput[];
    updateMany?: Prisma.DisponibilidadeUpdateManyWithWhereWithoutPsicologoInput | Prisma.DisponibilidadeUpdateManyWithWhereWithoutPsicologoInput[];
    deleteMany?: Prisma.DisponibilidadeScalarWhereInput | Prisma.DisponibilidadeScalarWhereInput[];
};
export type DisponibilidadeUncheckedUpdateManyWithoutPsicologoNestedInput = {
    create?: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput> | Prisma.DisponibilidadeCreateWithoutPsicologoInput[] | Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput | Prisma.DisponibilidadeCreateOrConnectWithoutPsicologoInput[];
    upsert?: Prisma.DisponibilidadeUpsertWithWhereUniqueWithoutPsicologoInput | Prisma.DisponibilidadeUpsertWithWhereUniqueWithoutPsicologoInput[];
    createMany?: Prisma.DisponibilidadeCreateManyPsicologoInputEnvelope;
    set?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    disconnect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    delete?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    connect?: Prisma.DisponibilidadeWhereUniqueInput | Prisma.DisponibilidadeWhereUniqueInput[];
    update?: Prisma.DisponibilidadeUpdateWithWhereUniqueWithoutPsicologoInput | Prisma.DisponibilidadeUpdateWithWhereUniqueWithoutPsicologoInput[];
    updateMany?: Prisma.DisponibilidadeUpdateManyWithWhereWithoutPsicologoInput | Prisma.DisponibilidadeUpdateManyWithWhereWithoutPsicologoInput[];
    deleteMany?: Prisma.DisponibilidadeScalarWhereInput | Prisma.DisponibilidadeScalarWhereInput[];
};
export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana;
};
export type DisponibilidadeCreateWithoutPsicologoInput = {
    id?: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
};
export type DisponibilidadeUncheckedCreateWithoutPsicologoInput = {
    id?: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
};
export type DisponibilidadeCreateOrConnectWithoutPsicologoInput = {
    where: Prisma.DisponibilidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput>;
};
export type DisponibilidadeCreateManyPsicologoInputEnvelope = {
    data: Prisma.DisponibilidadeCreateManyPsicologoInput | Prisma.DisponibilidadeCreateManyPsicologoInput[];
    skipDuplicates?: boolean;
};
export type DisponibilidadeUpsertWithWhereUniqueWithoutPsicologoInput = {
    where: Prisma.DisponibilidadeWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisponibilidadeUpdateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedUpdateWithoutPsicologoInput>;
    create: Prisma.XOR<Prisma.DisponibilidadeCreateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedCreateWithoutPsicologoInput>;
};
export type DisponibilidadeUpdateWithWhereUniqueWithoutPsicologoInput = {
    where: Prisma.DisponibilidadeWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisponibilidadeUpdateWithoutPsicologoInput, Prisma.DisponibilidadeUncheckedUpdateWithoutPsicologoInput>;
};
export type DisponibilidadeUpdateManyWithWhereWithoutPsicologoInput = {
    where: Prisma.DisponibilidadeScalarWhereInput;
    data: Prisma.XOR<Prisma.DisponibilidadeUpdateManyMutationInput, Prisma.DisponibilidadeUncheckedUpdateManyWithoutPsicologoInput>;
};
export type DisponibilidadeScalarWhereInput = {
    AND?: Prisma.DisponibilidadeScalarWhereInput | Prisma.DisponibilidadeScalarWhereInput[];
    OR?: Prisma.DisponibilidadeScalarWhereInput[];
    NOT?: Prisma.DisponibilidadeScalarWhereInput | Prisma.DisponibilidadeScalarWhereInput[];
    id?: Prisma.StringFilter<"Disponibilidade"> | string;
    psicologoId?: Prisma.StringFilter<"Disponibilidade"> | string;
    diaSemana?: Prisma.EnumDiaSemanaFilter<"Disponibilidade"> | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFilter<"Disponibilidade"> | string;
    horaFim?: Prisma.StringFilter<"Disponibilidade"> | string;
};
export type DisponibilidadeCreateManyPsicologoInput = {
    id?: string;
    diaSemana: $Enums.DiaSemana;
    horaInicio: string;
    horaFim: string;
};
export type DisponibilidadeUpdateWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeUncheckedUpdateWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeUncheckedUpdateManyWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana;
    horaInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    horaFim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DisponibilidadeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    psicologoId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFim?: boolean;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disponibilidade"]>;
export type DisponibilidadeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    psicologoId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFim?: boolean;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disponibilidade"]>;
export type DisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    psicologoId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFim?: boolean;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disponibilidade"]>;
export type DisponibilidadeSelectScalar = {
    id?: boolean;
    psicologoId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFim?: boolean;
};
export type DisponibilidadeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "psicologoId" | "diaSemana" | "horaInicio" | "horaFim", ExtArgs["result"]["disponibilidade"]>;
export type DisponibilidadeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
};
export type DisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
};
export type DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
};
export type $DisponibilidadePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Disponibilidade";
    objects: {
        psicologo: Prisma.$PerfilPsicologoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        psicologoId: string;
        diaSemana: $Enums.DiaSemana;
        horaInicio: string;
        horaFim: string;
    }, ExtArgs["result"]["disponibilidade"]>;
    composites: {};
};
export type DisponibilidadeGetPayload<S extends boolean | null | undefined | DisponibilidadeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload, S>;
export type DisponibilidadeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DisponibilidadeCountAggregateInputType | true;
};
export interface DisponibilidadeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidade'];
        meta: {
            name: 'Disponibilidade';
        };
    };
    findUnique<T extends DisponibilidadeFindUniqueArgs>(args: Prisma.SelectSubset<T, DisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DisponibilidadeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DisponibilidadeFindFirstArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeFindFirstArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DisponibilidadeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DisponibilidadeFindManyArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DisponibilidadeCreateArgs>(args: Prisma.SelectSubset<T, DisponibilidadeCreateArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DisponibilidadeCreateManyArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DisponibilidadeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DisponibilidadeDeleteArgs>(args: Prisma.SelectSubset<T, DisponibilidadeDeleteArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DisponibilidadeUpdateArgs>(args: Prisma.SelectSubset<T, DisponibilidadeUpdateArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DisponibilidadeDeleteManyArgs>(args?: Prisma.SelectSubset<T, DisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DisponibilidadeUpdateManyArgs>(args: Prisma.SelectSubset<T, DisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DisponibilidadeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DisponibilidadeUpsertArgs>(args: Prisma.SelectSubset<T, DisponibilidadeUpsertArgs<ExtArgs>>): Prisma.Prisma__DisponibilidadeClient<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DisponibilidadeCountArgs>(args?: Prisma.Subset<T, DisponibilidadeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DisponibilidadeCountAggregateOutputType> : number>;
    aggregate<T extends DisponibilidadeAggregateArgs>(args: Prisma.Subset<T, DisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadeAggregateType<T>>;
    groupBy<T extends DisponibilidadeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DisponibilidadeGroupByArgs['orderBy'];
    } : {
        orderBy?: DisponibilidadeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DisponibilidadeFieldRefs;
}
export interface Prisma__DisponibilidadeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    psicologo<T extends Prisma.PerfilPsicologoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilPsicologoDefaultArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DisponibilidadeFieldRefs {
    readonly id: Prisma.FieldRef<"Disponibilidade", 'String'>;
    readonly psicologoId: Prisma.FieldRef<"Disponibilidade", 'String'>;
    readonly diaSemana: Prisma.FieldRef<"Disponibilidade", 'DiaSemana'>;
    readonly horaInicio: Prisma.FieldRef<"Disponibilidade", 'String'>;
    readonly horaFim: Prisma.FieldRef<"Disponibilidade", 'String'>;
}
export type DisponibilidadeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where: Prisma.DisponibilidadeWhereUniqueInput;
};
export type DisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where: Prisma.DisponibilidadeWhereUniqueInput;
};
export type DisponibilidadeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where?: Prisma.DisponibilidadeWhereInput;
    orderBy?: Prisma.DisponibilidadeOrderByWithRelationInput | Prisma.DisponibilidadeOrderByWithRelationInput[];
    cursor?: Prisma.DisponibilidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisponibilidadeScalarFieldEnum | Prisma.DisponibilidadeScalarFieldEnum[];
};
export type DisponibilidadeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where?: Prisma.DisponibilidadeWhereInput;
    orderBy?: Prisma.DisponibilidadeOrderByWithRelationInput | Prisma.DisponibilidadeOrderByWithRelationInput[];
    cursor?: Prisma.DisponibilidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisponibilidadeScalarFieldEnum | Prisma.DisponibilidadeScalarFieldEnum[];
};
export type DisponibilidadeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where?: Prisma.DisponibilidadeWhereInput;
    orderBy?: Prisma.DisponibilidadeOrderByWithRelationInput | Prisma.DisponibilidadeOrderByWithRelationInput[];
    cursor?: Prisma.DisponibilidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisponibilidadeScalarFieldEnum | Prisma.DisponibilidadeScalarFieldEnum[];
};
export type DisponibilidadeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisponibilidadeCreateInput, Prisma.DisponibilidadeUncheckedCreateInput>;
};
export type DisponibilidadeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DisponibilidadeCreateManyInput | Prisma.DisponibilidadeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DisponibilidadeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    data: Prisma.DisponibilidadeCreateManyInput | Prisma.DisponibilidadeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DisponibilidadeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisponibilidadeUpdateInput, Prisma.DisponibilidadeUncheckedUpdateInput>;
    where: Prisma.DisponibilidadeWhereUniqueInput;
};
export type DisponibilidadeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DisponibilidadeUpdateManyMutationInput, Prisma.DisponibilidadeUncheckedUpdateManyInput>;
    where?: Prisma.DisponibilidadeWhereInput;
    limit?: number;
};
export type DisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisponibilidadeUpdateManyMutationInput, Prisma.DisponibilidadeUncheckedUpdateManyInput>;
    where?: Prisma.DisponibilidadeWhereInput;
    limit?: number;
    include?: Prisma.DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DisponibilidadeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where: Prisma.DisponibilidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisponibilidadeCreateInput, Prisma.DisponibilidadeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DisponibilidadeUpdateInput, Prisma.DisponibilidadeUncheckedUpdateInput>;
};
export type DisponibilidadeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
    where: Prisma.DisponibilidadeWhereUniqueInput;
};
export type DisponibilidadeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisponibilidadeWhereInput;
    limit?: number;
};
export type DisponibilidadeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisponibilidadeSelect<ExtArgs> | null;
    omit?: Prisma.DisponibilidadeOmit<ExtArgs> | null;
    include?: Prisma.DisponibilidadeInclude<ExtArgs> | null;
};
