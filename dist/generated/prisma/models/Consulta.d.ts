import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConsultaModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsultaPayload>;
export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null;
    _min: ConsultaMinAggregateOutputType | null;
    _max: ConsultaMaxAggregateOutputType | null;
};
export type ConsultaMinAggregateOutputType = {
    id: string | null;
    colaboradorId: string | null;
    psicologoId: string | null;
    analiseId: string | null;
    dataHora: Date | null;
    status: $Enums.StatusConsulta | null;
    observacoes: string | null;
};
export type ConsultaMaxAggregateOutputType = {
    id: string | null;
    colaboradorId: string | null;
    psicologoId: string | null;
    analiseId: string | null;
    dataHora: Date | null;
    status: $Enums.StatusConsulta | null;
    observacoes: string | null;
};
export type ConsultaCountAggregateOutputType = {
    id: number;
    colaboradorId: number;
    psicologoId: number;
    analiseId: number;
    dataHora: number;
    status: number;
    observacoes: number;
    _all: number;
};
export type ConsultaMinAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    psicologoId?: true;
    analiseId?: true;
    dataHora?: true;
    status?: true;
    observacoes?: true;
};
export type ConsultaMaxAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    psicologoId?: true;
    analiseId?: true;
    dataHora?: true;
    status?: true;
    observacoes?: true;
};
export type ConsultaCountAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    psicologoId?: true;
    analiseId?: true;
    dataHora?: true;
    status?: true;
    observacoes?: true;
    _all?: true;
};
export type ConsultaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    cursor?: Prisma.ConsultaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsultaCountAggregateInputType;
    _min?: ConsultaMinAggregateInputType;
    _max?: ConsultaMaxAggregateInputType;
};
export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
    [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsulta[P]> : Prisma.GetScalarType<T[P], AggregateConsulta[P]>;
};
export type ConsultaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithAggregationInput | Prisma.ConsultaOrderByWithAggregationInput[];
    by: Prisma.ConsultaScalarFieldEnum[] | Prisma.ConsultaScalarFieldEnum;
    having?: Prisma.ConsultaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsultaCountAggregateInputType | true;
    _min?: ConsultaMinAggregateInputType;
    _max?: ConsultaMaxAggregateInputType;
};
export type ConsultaGroupByOutputType = {
    id: string;
    colaboradorId: string;
    psicologoId: string;
    analiseId: string | null;
    dataHora: Date;
    status: $Enums.StatusConsulta;
    observacoes: string | null;
    _count: ConsultaCountAggregateOutputType | null;
    _min: ConsultaMinAggregateOutputType | null;
    _max: ConsultaMaxAggregateOutputType | null;
};
export type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsultaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsultaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsultaGroupByOutputType[P]>;
}>>;
export type ConsultaWhereInput = {
    AND?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    OR?: Prisma.ConsultaWhereInput[];
    NOT?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    id?: Prisma.StringFilter<"Consulta"> | string;
    colaboradorId?: Prisma.StringFilter<"Consulta"> | string;
    psicologoId?: Prisma.StringFilter<"Consulta"> | string;
    analiseId?: Prisma.StringNullableFilter<"Consulta"> | string | null;
    dataHora?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    status?: Prisma.EnumStatusConsultaFilter<"Consulta"> | $Enums.StatusConsulta;
    observacoes?: Prisma.StringNullableFilter<"Consulta"> | string | null;
    colaborador?: Prisma.XOR<Prisma.PerfilColaboradorScalarRelationFilter, Prisma.PerfilColaboradorWhereInput>;
    psicologo?: Prisma.XOR<Prisma.PerfilPsicologoScalarRelationFilter, Prisma.PerfilPsicologoWhereInput>;
    analise?: Prisma.XOR<Prisma.AnaliseIaNullableScalarRelationFilter, Prisma.AnaliseIaWhereInput> | null;
};
export type ConsultaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    analiseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dataHora?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    colaborador?: Prisma.PerfilColaboradorOrderByWithRelationInput;
    psicologo?: Prisma.PerfilPsicologoOrderByWithRelationInput;
    analise?: Prisma.AnaliseIaOrderByWithRelationInput;
};
export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    OR?: Prisma.ConsultaWhereInput[];
    NOT?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    colaboradorId?: Prisma.StringFilter<"Consulta"> | string;
    psicologoId?: Prisma.StringFilter<"Consulta"> | string;
    analiseId?: Prisma.StringNullableFilter<"Consulta"> | string | null;
    dataHora?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    status?: Prisma.EnumStatusConsultaFilter<"Consulta"> | $Enums.StatusConsulta;
    observacoes?: Prisma.StringNullableFilter<"Consulta"> | string | null;
    colaborador?: Prisma.XOR<Prisma.PerfilColaboradorScalarRelationFilter, Prisma.PerfilColaboradorWhereInput>;
    psicologo?: Prisma.XOR<Prisma.PerfilPsicologoScalarRelationFilter, Prisma.PerfilPsicologoWhereInput>;
    analise?: Prisma.XOR<Prisma.AnaliseIaNullableScalarRelationFilter, Prisma.AnaliseIaWhereInput> | null;
}, "id">;
export type ConsultaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    analiseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dataHora?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ConsultaCountOrderByAggregateInput;
    _max?: Prisma.ConsultaMaxOrderByAggregateInput;
    _min?: Prisma.ConsultaMinOrderByAggregateInput;
};
export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsultaScalarWhereWithAggregatesInput | Prisma.ConsultaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsultaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsultaScalarWhereWithAggregatesInput | Prisma.ConsultaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    colaboradorId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    psicologoId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    analiseId?: Prisma.StringNullableWithAggregatesFilter<"Consulta"> | string | null;
    dataHora?: Prisma.DateTimeWithAggregatesFilter<"Consulta"> | Date | string;
    status?: Prisma.EnumStatusConsultaWithAggregatesFilter<"Consulta"> | $Enums.StatusConsulta;
    observacoes?: Prisma.StringNullableWithAggregatesFilter<"Consulta"> | string | null;
};
export type ConsultaCreateInput = {
    id?: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
    colaborador: Prisma.PerfilColaboradorCreateNestedOneWithoutConsultasInput;
    psicologo: Prisma.PerfilPsicologoCreateNestedOneWithoutConsultasInput;
    analise?: Prisma.AnaliseIaCreateNestedOneWithoutConsultasInput;
};
export type ConsultaUncheckedCreateInput = {
    id?: string;
    colaboradorId: string;
    psicologoId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colaborador?: Prisma.PerfilColaboradorUpdateOneRequiredWithoutConsultasNestedInput;
    psicologo?: Prisma.PerfilPsicologoUpdateOneRequiredWithoutConsultasNestedInput;
    analise?: Prisma.AnaliseIaUpdateOneWithoutConsultasNestedInput;
};
export type ConsultaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaCreateManyInput = {
    id?: string;
    colaboradorId: string;
    psicologoId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaListRelationFilter = {
    every?: Prisma.ConsultaWhereInput;
    some?: Prisma.ConsultaWhereInput;
    none?: Prisma.ConsultaWhereInput;
};
export type ConsultaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsultaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    analiseId?: Prisma.SortOrder;
    dataHora?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type ConsultaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    analiseId?: Prisma.SortOrder;
    dataHora?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type ConsultaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    psicologoId?: Prisma.SortOrder;
    analiseId?: Prisma.SortOrder;
    dataHora?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type ConsultaCreateNestedManyWithoutColaboradorInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput> | Prisma.ConsultaCreateWithoutColaboradorInput[] | Prisma.ConsultaUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutColaboradorInput | Prisma.ConsultaCreateOrConnectWithoutColaboradorInput[];
    createMany?: Prisma.ConsultaCreateManyColaboradorInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput> | Prisma.ConsultaCreateWithoutColaboradorInput[] | Prisma.ConsultaUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutColaboradorInput | Prisma.ConsultaCreateOrConnectWithoutColaboradorInput[];
    createMany?: Prisma.ConsultaCreateManyColaboradorInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutColaboradorNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput> | Prisma.ConsultaCreateWithoutColaboradorInput[] | Prisma.ConsultaUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutColaboradorInput | Prisma.ConsultaCreateOrConnectWithoutColaboradorInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutColaboradorInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutColaboradorInput[];
    createMany?: Prisma.ConsultaCreateManyColaboradorInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutColaboradorInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutColaboradorInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutColaboradorInput | Prisma.ConsultaUpdateManyWithWhereWithoutColaboradorInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput> | Prisma.ConsultaCreateWithoutColaboradorInput[] | Prisma.ConsultaUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutColaboradorInput | Prisma.ConsultaCreateOrConnectWithoutColaboradorInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutColaboradorInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutColaboradorInput[];
    createMany?: Prisma.ConsultaCreateManyColaboradorInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutColaboradorInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutColaboradorInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutColaboradorInput | Prisma.ConsultaUpdateManyWithWhereWithoutColaboradorInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutPsicologoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput> | Prisma.ConsultaCreateWithoutPsicologoInput[] | Prisma.ConsultaUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPsicologoInput | Prisma.ConsultaCreateOrConnectWithoutPsicologoInput[];
    createMany?: Prisma.ConsultaCreateManyPsicologoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutPsicologoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput> | Prisma.ConsultaCreateWithoutPsicologoInput[] | Prisma.ConsultaUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPsicologoInput | Prisma.ConsultaCreateOrConnectWithoutPsicologoInput[];
    createMany?: Prisma.ConsultaCreateManyPsicologoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutPsicologoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput> | Prisma.ConsultaCreateWithoutPsicologoInput[] | Prisma.ConsultaUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPsicologoInput | Prisma.ConsultaCreateOrConnectWithoutPsicologoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutPsicologoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutPsicologoInput[];
    createMany?: Prisma.ConsultaCreateManyPsicologoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutPsicologoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutPsicologoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutPsicologoInput | Prisma.ConsultaUpdateManyWithWhereWithoutPsicologoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutPsicologoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput> | Prisma.ConsultaCreateWithoutPsicologoInput[] | Prisma.ConsultaUncheckedCreateWithoutPsicologoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPsicologoInput | Prisma.ConsultaCreateOrConnectWithoutPsicologoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutPsicologoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutPsicologoInput[];
    createMany?: Prisma.ConsultaCreateManyPsicologoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutPsicologoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutPsicologoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutPsicologoInput | Prisma.ConsultaUpdateManyWithWhereWithoutPsicologoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutAnaliseInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput> | Prisma.ConsultaCreateWithoutAnaliseInput[] | Prisma.ConsultaUncheckedCreateWithoutAnaliseInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutAnaliseInput | Prisma.ConsultaCreateOrConnectWithoutAnaliseInput[];
    createMany?: Prisma.ConsultaCreateManyAnaliseInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutAnaliseInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput> | Prisma.ConsultaCreateWithoutAnaliseInput[] | Prisma.ConsultaUncheckedCreateWithoutAnaliseInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutAnaliseInput | Prisma.ConsultaCreateOrConnectWithoutAnaliseInput[];
    createMany?: Prisma.ConsultaCreateManyAnaliseInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutAnaliseNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput> | Prisma.ConsultaCreateWithoutAnaliseInput[] | Prisma.ConsultaUncheckedCreateWithoutAnaliseInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutAnaliseInput | Prisma.ConsultaCreateOrConnectWithoutAnaliseInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutAnaliseInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutAnaliseInput[];
    createMany?: Prisma.ConsultaCreateManyAnaliseInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutAnaliseInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutAnaliseInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutAnaliseInput | Prisma.ConsultaUpdateManyWithWhereWithoutAnaliseInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutAnaliseNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput> | Prisma.ConsultaCreateWithoutAnaliseInput[] | Prisma.ConsultaUncheckedCreateWithoutAnaliseInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutAnaliseInput | Prisma.ConsultaCreateOrConnectWithoutAnaliseInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutAnaliseInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutAnaliseInput[];
    createMany?: Prisma.ConsultaCreateManyAnaliseInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutAnaliseInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutAnaliseInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutAnaliseInput | Prisma.ConsultaUpdateManyWithWhereWithoutAnaliseInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type EnumStatusConsultaFieldUpdateOperationsInput = {
    set?: $Enums.StatusConsulta;
};
export type ConsultaCreateWithoutColaboradorInput = {
    id?: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
    psicologo: Prisma.PerfilPsicologoCreateNestedOneWithoutConsultasInput;
    analise?: Prisma.AnaliseIaCreateNestedOneWithoutConsultasInput;
};
export type ConsultaUncheckedCreateWithoutColaboradorInput = {
    id?: string;
    psicologoId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaCreateOrConnectWithoutColaboradorInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput>;
};
export type ConsultaCreateManyColaboradorInputEnvelope = {
    data: Prisma.ConsultaCreateManyColaboradorInput | Prisma.ConsultaCreateManyColaboradorInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutColaboradorInput, Prisma.ConsultaUncheckedUpdateWithoutColaboradorInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutColaboradorInput, Prisma.ConsultaUncheckedCreateWithoutColaboradorInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutColaboradorInput, Prisma.ConsultaUncheckedUpdateWithoutColaboradorInput>;
};
export type ConsultaUpdateManyWithWhereWithoutColaboradorInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutColaboradorInput>;
};
export type ConsultaScalarWhereInput = {
    AND?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
    OR?: Prisma.ConsultaScalarWhereInput[];
    NOT?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
    id?: Prisma.StringFilter<"Consulta"> | string;
    colaboradorId?: Prisma.StringFilter<"Consulta"> | string;
    psicologoId?: Prisma.StringFilter<"Consulta"> | string;
    analiseId?: Prisma.StringNullableFilter<"Consulta"> | string | null;
    dataHora?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    status?: Prisma.EnumStatusConsultaFilter<"Consulta"> | $Enums.StatusConsulta;
    observacoes?: Prisma.StringNullableFilter<"Consulta"> | string | null;
};
export type ConsultaCreateWithoutPsicologoInput = {
    id?: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
    colaborador: Prisma.PerfilColaboradorCreateNestedOneWithoutConsultasInput;
    analise?: Prisma.AnaliseIaCreateNestedOneWithoutConsultasInput;
};
export type ConsultaUncheckedCreateWithoutPsicologoInput = {
    id?: string;
    colaboradorId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaCreateOrConnectWithoutPsicologoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput>;
};
export type ConsultaCreateManyPsicologoInputEnvelope = {
    data: Prisma.ConsultaCreateManyPsicologoInput | Prisma.ConsultaCreateManyPsicologoInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutPsicologoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutPsicologoInput, Prisma.ConsultaUncheckedUpdateWithoutPsicologoInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutPsicologoInput, Prisma.ConsultaUncheckedCreateWithoutPsicologoInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutPsicologoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutPsicologoInput, Prisma.ConsultaUncheckedUpdateWithoutPsicologoInput>;
};
export type ConsultaUpdateManyWithWhereWithoutPsicologoInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutPsicologoInput>;
};
export type ConsultaCreateWithoutAnaliseInput = {
    id?: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
    colaborador: Prisma.PerfilColaboradorCreateNestedOneWithoutConsultasInput;
    psicologo: Prisma.PerfilPsicologoCreateNestedOneWithoutConsultasInput;
};
export type ConsultaUncheckedCreateWithoutAnaliseInput = {
    id?: string;
    colaboradorId: string;
    psicologoId: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaCreateOrConnectWithoutAnaliseInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput>;
};
export type ConsultaCreateManyAnaliseInputEnvelope = {
    data: Prisma.ConsultaCreateManyAnaliseInput | Prisma.ConsultaCreateManyAnaliseInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutAnaliseInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutAnaliseInput, Prisma.ConsultaUncheckedUpdateWithoutAnaliseInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutAnaliseInput, Prisma.ConsultaUncheckedCreateWithoutAnaliseInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutAnaliseInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutAnaliseInput, Prisma.ConsultaUncheckedUpdateWithoutAnaliseInput>;
};
export type ConsultaUpdateManyWithWhereWithoutAnaliseInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutAnaliseInput>;
};
export type ConsultaCreateManyColaboradorInput = {
    id?: string;
    psicologoId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaUpdateWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    psicologo?: Prisma.PerfilPsicologoUpdateOneRequiredWithoutConsultasNestedInput;
    analise?: Prisma.AnaliseIaUpdateOneWithoutConsultasNestedInput;
};
export type ConsultaUncheckedUpdateWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaUncheckedUpdateManyWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaCreateManyPsicologoInput = {
    id?: string;
    colaboradorId: string;
    analiseId?: string | null;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaUpdateWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colaborador?: Prisma.PerfilColaboradorUpdateOneRequiredWithoutConsultasNestedInput;
    analise?: Prisma.AnaliseIaUpdateOneWithoutConsultasNestedInput;
};
export type ConsultaUncheckedUpdateWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaUncheckedUpdateManyWithoutPsicologoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    analiseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaCreateManyAnaliseInput = {
    id?: string;
    colaboradorId: string;
    psicologoId: string;
    dataHora: Date | string;
    status?: $Enums.StatusConsulta;
    observacoes?: string | null;
};
export type ConsultaUpdateWithoutAnaliseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colaborador?: Prisma.PerfilColaboradorUpdateOneRequiredWithoutConsultasNestedInput;
    psicologo?: Prisma.PerfilPsicologoUpdateOneRequiredWithoutConsultasNestedInput;
};
export type ConsultaUncheckedUpdateWithoutAnaliseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaUncheckedUpdateManyWithoutAnaliseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    psicologoId?: Prisma.StringFieldUpdateOperationsInput | string;
    dataHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusConsultaFieldUpdateOperationsInput | $Enums.StatusConsulta;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConsultaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    psicologoId?: boolean;
    analiseId?: boolean;
    dataHora?: boolean;
    status?: boolean;
    observacoes?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    psicologoId?: boolean;
    analiseId?: boolean;
    dataHora?: boolean;
    status?: boolean;
    observacoes?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    psicologoId?: boolean;
    analiseId?: boolean;
    dataHora?: boolean;
    status?: boolean;
    observacoes?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectScalar = {
    id?: boolean;
    colaboradorId?: boolean;
    psicologoId?: boolean;
    analiseId?: boolean;
    dataHora?: boolean;
    status?: boolean;
    observacoes?: boolean;
};
export type ConsultaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "colaboradorId" | "psicologoId" | "analiseId" | "dataHora" | "status" | "observacoes", ExtArgs["result"]["consulta"]>;
export type ConsultaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
};
export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
};
export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    psicologo?: boolean | Prisma.PerfilPsicologoDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.Consulta$analiseArgs<ExtArgs>;
};
export type $ConsultaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consulta";
    objects: {
        colaborador: Prisma.$PerfilColaboradorPayload<ExtArgs>;
        psicologo: Prisma.$PerfilPsicologoPayload<ExtArgs>;
        analise: Prisma.$AnaliseIaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        colaboradorId: string;
        psicologoId: string;
        analiseId: string | null;
        dataHora: Date;
        status: $Enums.StatusConsulta;
        observacoes: string | null;
    }, ExtArgs["result"]["consulta"]>;
    composites: {};
};
export type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsultaPayload, S>;
export type ConsultaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsultaCountAggregateInputType | true;
};
export interface ConsultaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consulta'];
        meta: {
            name: 'Consulta';
        };
    };
    findUnique<T extends ConsultaFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsultaFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsultaFindManyArgs>(args?: Prisma.SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsultaCreateArgs>(args: Prisma.SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsultaCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsultaDeleteArgs>(args: Prisma.SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsultaUpdateArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsultaUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsultaUpsertArgs>(args: Prisma.SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsultaCountArgs>(args?: Prisma.Subset<T, ConsultaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsultaCountAggregateOutputType> : number>;
    aggregate<T extends ConsultaAggregateArgs>(args: Prisma.Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>;
    groupBy<T extends ConsultaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsultaGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsultaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsultaFieldRefs;
}
export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    colaborador<T extends Prisma.PerfilColaboradorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilColaboradorDefaultArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    psicologo<T extends Prisma.PerfilPsicologoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilPsicologoDefaultArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    analise<T extends Prisma.Consulta$analiseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Consulta$analiseArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsultaFieldRefs {
    readonly id: Prisma.FieldRef<"Consulta", 'String'>;
    readonly colaboradorId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly psicologoId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly analiseId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly dataHora: Prisma.FieldRef<"Consulta", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Consulta", 'StatusConsulta'>;
    readonly observacoes: Prisma.FieldRef<"Consulta", 'String'>;
}
export type ConsultaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where: Prisma.ConsultaWhereUniqueInput;
};
export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where: Prisma.ConsultaWhereUniqueInput;
};
export type ConsultaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    cursor?: Prisma.ConsultaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
export type ConsultaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    cursor?: Prisma.ConsultaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
export type ConsultaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    cursor?: Prisma.ConsultaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
export type ConsultaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultaCreateInput, Prisma.ConsultaUncheckedCreateInput>;
};
export type ConsultaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsultaCreateManyInput | Prisma.ConsultaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsultaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    data: Prisma.ConsultaCreateManyInput | Prisma.ConsultaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConsultaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConsultaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultaUpdateInput, Prisma.ConsultaUncheckedUpdateInput>;
    where: Prisma.ConsultaWhereUniqueInput;
};
export type ConsultaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyInput>;
    where?: Prisma.ConsultaWhereInput;
    limit?: number;
};
export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyInput>;
    where?: Prisma.ConsultaWhereInput;
    limit?: number;
    include?: Prisma.ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConsultaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateInput, Prisma.ConsultaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsultaUpdateInput, Prisma.ConsultaUncheckedUpdateInput>;
};
export type ConsultaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    where: Prisma.ConsultaWhereUniqueInput;
};
export type ConsultaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
    limit?: number;
};
export type Consulta$analiseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where?: Prisma.AnaliseIaWhereInput;
};
export type ConsultaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
};
