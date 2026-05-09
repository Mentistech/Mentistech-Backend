import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CheckinEmocionalModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckinEmocionalPayload>;
export type AggregateCheckinEmocional = {
    _count: CheckinEmocionalCountAggregateOutputType | null;
    _avg: CheckinEmocionalAvgAggregateOutputType | null;
    _sum: CheckinEmocionalSumAggregateOutputType | null;
    _min: CheckinEmocionalMinAggregateOutputType | null;
    _max: CheckinEmocionalMaxAggregateOutputType | null;
};
export type CheckinEmocionalAvgAggregateOutputType = {
    nivelEstresse: number | null;
};
export type CheckinEmocionalSumAggregateOutputType = {
    nivelEstresse: number | null;
};
export type CheckinEmocionalMinAggregateOutputType = {
    id: string | null;
    colaboradorId: string | null;
    humor: $Enums.HumorTipo | null;
    nivelEstresse: number | null;
    realizadoEm: Date | null;
};
export type CheckinEmocionalMaxAggregateOutputType = {
    id: string | null;
    colaboradorId: string | null;
    humor: $Enums.HumorTipo | null;
    nivelEstresse: number | null;
    realizadoEm: Date | null;
};
export type CheckinEmocionalCountAggregateOutputType = {
    id: number;
    colaboradorId: number;
    humor: number;
    nivelEstresse: number;
    realizadoEm: number;
    _all: number;
};
export type CheckinEmocionalAvgAggregateInputType = {
    nivelEstresse?: true;
};
export type CheckinEmocionalSumAggregateInputType = {
    nivelEstresse?: true;
};
export type CheckinEmocionalMinAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    humor?: true;
    nivelEstresse?: true;
    realizadoEm?: true;
};
export type CheckinEmocionalMaxAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    humor?: true;
    nivelEstresse?: true;
    realizadoEm?: true;
};
export type CheckinEmocionalCountAggregateInputType = {
    id?: true;
    colaboradorId?: true;
    humor?: true;
    nivelEstresse?: true;
    realizadoEm?: true;
    _all?: true;
};
export type CheckinEmocionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinEmocionalWhereInput;
    orderBy?: Prisma.CheckinEmocionalOrderByWithRelationInput | Prisma.CheckinEmocionalOrderByWithRelationInput[];
    cursor?: Prisma.CheckinEmocionalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CheckinEmocionalCountAggregateInputType;
    _avg?: CheckinEmocionalAvgAggregateInputType;
    _sum?: CheckinEmocionalSumAggregateInputType;
    _min?: CheckinEmocionalMinAggregateInputType;
    _max?: CheckinEmocionalMaxAggregateInputType;
};
export type GetCheckinEmocionalAggregateType<T extends CheckinEmocionalAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckinEmocional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckinEmocional[P]> : Prisma.GetScalarType<T[P], AggregateCheckinEmocional[P]>;
};
export type CheckinEmocionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinEmocionalWhereInput;
    orderBy?: Prisma.CheckinEmocionalOrderByWithAggregationInput | Prisma.CheckinEmocionalOrderByWithAggregationInput[];
    by: Prisma.CheckinEmocionalScalarFieldEnum[] | Prisma.CheckinEmocionalScalarFieldEnum;
    having?: Prisma.CheckinEmocionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckinEmocionalCountAggregateInputType | true;
    _avg?: CheckinEmocionalAvgAggregateInputType;
    _sum?: CheckinEmocionalSumAggregateInputType;
    _min?: CheckinEmocionalMinAggregateInputType;
    _max?: CheckinEmocionalMaxAggregateInputType;
};
export type CheckinEmocionalGroupByOutputType = {
    id: string;
    colaboradorId: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm: Date;
    _count: CheckinEmocionalCountAggregateOutputType | null;
    _avg: CheckinEmocionalAvgAggregateOutputType | null;
    _sum: CheckinEmocionalSumAggregateOutputType | null;
    _min: CheckinEmocionalMinAggregateOutputType | null;
    _max: CheckinEmocionalMaxAggregateOutputType | null;
};
export type GetCheckinEmocionalGroupByPayload<T extends CheckinEmocionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckinEmocionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckinEmocionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckinEmocionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckinEmocionalGroupByOutputType[P]>;
}>>;
export type CheckinEmocionalWhereInput = {
    AND?: Prisma.CheckinEmocionalWhereInput | Prisma.CheckinEmocionalWhereInput[];
    OR?: Prisma.CheckinEmocionalWhereInput[];
    NOT?: Prisma.CheckinEmocionalWhereInput | Prisma.CheckinEmocionalWhereInput[];
    id?: Prisma.StringFilter<"CheckinEmocional"> | string;
    colaboradorId?: Prisma.StringFilter<"CheckinEmocional"> | string;
    humor?: Prisma.EnumHumorTipoFilter<"CheckinEmocional"> | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFilter<"CheckinEmocional"> | number;
    realizadoEm?: Prisma.DateTimeFilter<"CheckinEmocional"> | Date | string;
    colaborador?: Prisma.XOR<Prisma.PerfilColaboradorScalarRelationFilter, Prisma.PerfilColaboradorWhereInput>;
    analise?: Prisma.XOR<Prisma.AnaliseIaNullableScalarRelationFilter, Prisma.AnaliseIaWhereInput> | null;
};
export type CheckinEmocionalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    humor?: Prisma.SortOrder;
    nivelEstresse?: Prisma.SortOrder;
    realizadoEm?: Prisma.SortOrder;
    colaborador?: Prisma.PerfilColaboradorOrderByWithRelationInput;
    analise?: Prisma.AnaliseIaOrderByWithRelationInput;
};
export type CheckinEmocionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CheckinEmocionalWhereInput | Prisma.CheckinEmocionalWhereInput[];
    OR?: Prisma.CheckinEmocionalWhereInput[];
    NOT?: Prisma.CheckinEmocionalWhereInput | Prisma.CheckinEmocionalWhereInput[];
    colaboradorId?: Prisma.StringFilter<"CheckinEmocional"> | string;
    humor?: Prisma.EnumHumorTipoFilter<"CheckinEmocional"> | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFilter<"CheckinEmocional"> | number;
    realizadoEm?: Prisma.DateTimeFilter<"CheckinEmocional"> | Date | string;
    colaborador?: Prisma.XOR<Prisma.PerfilColaboradorScalarRelationFilter, Prisma.PerfilColaboradorWhereInput>;
    analise?: Prisma.XOR<Prisma.AnaliseIaNullableScalarRelationFilter, Prisma.AnaliseIaWhereInput> | null;
}, "id">;
export type CheckinEmocionalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    humor?: Prisma.SortOrder;
    nivelEstresse?: Prisma.SortOrder;
    realizadoEm?: Prisma.SortOrder;
    _count?: Prisma.CheckinEmocionalCountOrderByAggregateInput;
    _avg?: Prisma.CheckinEmocionalAvgOrderByAggregateInput;
    _max?: Prisma.CheckinEmocionalMaxOrderByAggregateInput;
    _min?: Prisma.CheckinEmocionalMinOrderByAggregateInput;
    _sum?: Prisma.CheckinEmocionalSumOrderByAggregateInput;
};
export type CheckinEmocionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckinEmocionalScalarWhereWithAggregatesInput | Prisma.CheckinEmocionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckinEmocionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckinEmocionalScalarWhereWithAggregatesInput | Prisma.CheckinEmocionalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckinEmocional"> | string;
    colaboradorId?: Prisma.StringWithAggregatesFilter<"CheckinEmocional"> | string;
    humor?: Prisma.EnumHumorTipoWithAggregatesFilter<"CheckinEmocional"> | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntWithAggregatesFilter<"CheckinEmocional"> | number;
    realizadoEm?: Prisma.DateTimeWithAggregatesFilter<"CheckinEmocional"> | Date | string;
};
export type CheckinEmocionalCreateInput = {
    id?: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
    colaborador: Prisma.PerfilColaboradorCreateNestedOneWithoutCheckinsInput;
    analise?: Prisma.AnaliseIaCreateNestedOneWithoutCheckinInput;
};
export type CheckinEmocionalUncheckedCreateInput = {
    id?: string;
    colaboradorId: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
    analise?: Prisma.AnaliseIaUncheckedCreateNestedOneWithoutCheckinInput;
};
export type CheckinEmocionalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    colaborador?: Prisma.PerfilColaboradorUpdateOneRequiredWithoutCheckinsNestedInput;
    analise?: Prisma.AnaliseIaUpdateOneWithoutCheckinNestedInput;
};
export type CheckinEmocionalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analise?: Prisma.AnaliseIaUncheckedUpdateOneWithoutCheckinNestedInput;
};
export type CheckinEmocionalCreateManyInput = {
    id?: string;
    colaboradorId: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
};
export type CheckinEmocionalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinEmocionalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinEmocionalListRelationFilter = {
    every?: Prisma.CheckinEmocionalWhereInput;
    some?: Prisma.CheckinEmocionalWhereInput;
    none?: Prisma.CheckinEmocionalWhereInput;
};
export type CheckinEmocionalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CheckinEmocionalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    humor?: Prisma.SortOrder;
    nivelEstresse?: Prisma.SortOrder;
    realizadoEm?: Prisma.SortOrder;
};
export type CheckinEmocionalAvgOrderByAggregateInput = {
    nivelEstresse?: Prisma.SortOrder;
};
export type CheckinEmocionalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    humor?: Prisma.SortOrder;
    nivelEstresse?: Prisma.SortOrder;
    realizadoEm?: Prisma.SortOrder;
};
export type CheckinEmocionalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    colaboradorId?: Prisma.SortOrder;
    humor?: Prisma.SortOrder;
    nivelEstresse?: Prisma.SortOrder;
    realizadoEm?: Prisma.SortOrder;
};
export type CheckinEmocionalSumOrderByAggregateInput = {
    nivelEstresse?: Prisma.SortOrder;
};
export type CheckinEmocionalScalarRelationFilter = {
    is?: Prisma.CheckinEmocionalWhereInput;
    isNot?: Prisma.CheckinEmocionalWhereInput;
};
export type CheckinEmocionalCreateNestedManyWithoutColaboradorInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput> | Prisma.CheckinEmocionalCreateWithoutColaboradorInput[] | Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput | Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput[];
    createMany?: Prisma.CheckinEmocionalCreateManyColaboradorInputEnvelope;
    connect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
};
export type CheckinEmocionalUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput> | Prisma.CheckinEmocionalCreateWithoutColaboradorInput[] | Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput | Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput[];
    createMany?: Prisma.CheckinEmocionalCreateManyColaboradorInputEnvelope;
    connect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
};
export type CheckinEmocionalUpdateManyWithoutColaboradorNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput> | Prisma.CheckinEmocionalCreateWithoutColaboradorInput[] | Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput | Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput[];
    upsert?: Prisma.CheckinEmocionalUpsertWithWhereUniqueWithoutColaboradorInput | Prisma.CheckinEmocionalUpsertWithWhereUniqueWithoutColaboradorInput[];
    createMany?: Prisma.CheckinEmocionalCreateManyColaboradorInputEnvelope;
    set?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    disconnect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    delete?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    connect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    update?: Prisma.CheckinEmocionalUpdateWithWhereUniqueWithoutColaboradorInput | Prisma.CheckinEmocionalUpdateWithWhereUniqueWithoutColaboradorInput[];
    updateMany?: Prisma.CheckinEmocionalUpdateManyWithWhereWithoutColaboradorInput | Prisma.CheckinEmocionalUpdateManyWithWhereWithoutColaboradorInput[];
    deleteMany?: Prisma.CheckinEmocionalScalarWhereInput | Prisma.CheckinEmocionalScalarWhereInput[];
};
export type CheckinEmocionalUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput> | Prisma.CheckinEmocionalCreateWithoutColaboradorInput[] | Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput[];
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput | Prisma.CheckinEmocionalCreateOrConnectWithoutColaboradorInput[];
    upsert?: Prisma.CheckinEmocionalUpsertWithWhereUniqueWithoutColaboradorInput | Prisma.CheckinEmocionalUpsertWithWhereUniqueWithoutColaboradorInput[];
    createMany?: Prisma.CheckinEmocionalCreateManyColaboradorInputEnvelope;
    set?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    disconnect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    delete?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    connect?: Prisma.CheckinEmocionalWhereUniqueInput | Prisma.CheckinEmocionalWhereUniqueInput[];
    update?: Prisma.CheckinEmocionalUpdateWithWhereUniqueWithoutColaboradorInput | Prisma.CheckinEmocionalUpdateWithWhereUniqueWithoutColaboradorInput[];
    updateMany?: Prisma.CheckinEmocionalUpdateManyWithWhereWithoutColaboradorInput | Prisma.CheckinEmocionalUpdateManyWithWhereWithoutColaboradorInput[];
    deleteMany?: Prisma.CheckinEmocionalScalarWhereInput | Prisma.CheckinEmocionalScalarWhereInput[];
};
export type EnumHumorTipoFieldUpdateOperationsInput = {
    set?: $Enums.HumorTipo;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CheckinEmocionalCreateNestedOneWithoutAnaliseInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedCreateWithoutAnaliseInput>;
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutAnaliseInput;
    connect?: Prisma.CheckinEmocionalWhereUniqueInput;
};
export type CheckinEmocionalUpdateOneRequiredWithoutAnaliseNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedCreateWithoutAnaliseInput>;
    connectOrCreate?: Prisma.CheckinEmocionalCreateOrConnectWithoutAnaliseInput;
    upsert?: Prisma.CheckinEmocionalUpsertWithoutAnaliseInput;
    connect?: Prisma.CheckinEmocionalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckinEmocionalUpdateToOneWithWhereWithoutAnaliseInput, Prisma.CheckinEmocionalUpdateWithoutAnaliseInput>, Prisma.CheckinEmocionalUncheckedUpdateWithoutAnaliseInput>;
};
export type CheckinEmocionalCreateWithoutColaboradorInput = {
    id?: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
    analise?: Prisma.AnaliseIaCreateNestedOneWithoutCheckinInput;
};
export type CheckinEmocionalUncheckedCreateWithoutColaboradorInput = {
    id?: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
    analise?: Prisma.AnaliseIaUncheckedCreateNestedOneWithoutCheckinInput;
};
export type CheckinEmocionalCreateOrConnectWithoutColaboradorInput = {
    where: Prisma.CheckinEmocionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput>;
};
export type CheckinEmocionalCreateManyColaboradorInputEnvelope = {
    data: Prisma.CheckinEmocionalCreateManyColaboradorInput | Prisma.CheckinEmocionalCreateManyColaboradorInput[];
    skipDuplicates?: boolean;
};
export type CheckinEmocionalUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: Prisma.CheckinEmocionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinEmocionalUpdateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedUpdateWithoutColaboradorInput>;
    create: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedCreateWithoutColaboradorInput>;
};
export type CheckinEmocionalUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: Prisma.CheckinEmocionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateWithoutColaboradorInput, Prisma.CheckinEmocionalUncheckedUpdateWithoutColaboradorInput>;
};
export type CheckinEmocionalUpdateManyWithWhereWithoutColaboradorInput = {
    where: Prisma.CheckinEmocionalScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateManyMutationInput, Prisma.CheckinEmocionalUncheckedUpdateManyWithoutColaboradorInput>;
};
export type CheckinEmocionalScalarWhereInput = {
    AND?: Prisma.CheckinEmocionalScalarWhereInput | Prisma.CheckinEmocionalScalarWhereInput[];
    OR?: Prisma.CheckinEmocionalScalarWhereInput[];
    NOT?: Prisma.CheckinEmocionalScalarWhereInput | Prisma.CheckinEmocionalScalarWhereInput[];
    id?: Prisma.StringFilter<"CheckinEmocional"> | string;
    colaboradorId?: Prisma.StringFilter<"CheckinEmocional"> | string;
    humor?: Prisma.EnumHumorTipoFilter<"CheckinEmocional"> | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFilter<"CheckinEmocional"> | number;
    realizadoEm?: Prisma.DateTimeFilter<"CheckinEmocional"> | Date | string;
};
export type CheckinEmocionalCreateWithoutAnaliseInput = {
    id?: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
    colaborador: Prisma.PerfilColaboradorCreateNestedOneWithoutCheckinsInput;
};
export type CheckinEmocionalUncheckedCreateWithoutAnaliseInput = {
    id?: string;
    colaboradorId: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
};
export type CheckinEmocionalCreateOrConnectWithoutAnaliseInput = {
    where: Prisma.CheckinEmocionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedCreateWithoutAnaliseInput>;
};
export type CheckinEmocionalUpsertWithoutAnaliseInput = {
    update: Prisma.XOR<Prisma.CheckinEmocionalUpdateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedUpdateWithoutAnaliseInput>;
    create: Prisma.XOR<Prisma.CheckinEmocionalCreateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedCreateWithoutAnaliseInput>;
    where?: Prisma.CheckinEmocionalWhereInput;
};
export type CheckinEmocionalUpdateToOneWithWhereWithoutAnaliseInput = {
    where?: Prisma.CheckinEmocionalWhereInput;
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateWithoutAnaliseInput, Prisma.CheckinEmocionalUncheckedUpdateWithoutAnaliseInput>;
};
export type CheckinEmocionalUpdateWithoutAnaliseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    colaborador?: Prisma.PerfilColaboradorUpdateOneRequiredWithoutCheckinsNestedInput;
};
export type CheckinEmocionalUncheckedUpdateWithoutAnaliseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    colaboradorId?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinEmocionalCreateManyColaboradorInput = {
    id?: string;
    humor: $Enums.HumorTipo;
    nivelEstresse: number;
    realizadoEm?: Date | string;
};
export type CheckinEmocionalUpdateWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analise?: Prisma.AnaliseIaUpdateOneWithoutCheckinNestedInput;
};
export type CheckinEmocionalUncheckedUpdateWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analise?: Prisma.AnaliseIaUncheckedUpdateOneWithoutCheckinNestedInput;
};
export type CheckinEmocionalUncheckedUpdateManyWithoutColaboradorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    humor?: Prisma.EnumHumorTipoFieldUpdateOperationsInput | $Enums.HumorTipo;
    nivelEstresse?: Prisma.IntFieldUpdateOperationsInput | number;
    realizadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinEmocionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    humor?: boolean;
    nivelEstresse?: boolean;
    realizadoEm?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.CheckinEmocional$analiseArgs<ExtArgs>;
}, ExtArgs["result"]["checkinEmocional"]>;
export type CheckinEmocionalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    humor?: boolean;
    nivelEstresse?: boolean;
    realizadoEm?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checkinEmocional"]>;
export type CheckinEmocionalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    colaboradorId?: boolean;
    humor?: boolean;
    nivelEstresse?: boolean;
    realizadoEm?: boolean;
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checkinEmocional"]>;
export type CheckinEmocionalSelectScalar = {
    id?: boolean;
    colaboradorId?: boolean;
    humor?: boolean;
    nivelEstresse?: boolean;
    realizadoEm?: boolean;
};
export type CheckinEmocionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "colaboradorId" | "humor" | "nivelEstresse" | "realizadoEm", ExtArgs["result"]["checkinEmocional"]>;
export type CheckinEmocionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
    analise?: boolean | Prisma.CheckinEmocional$analiseArgs<ExtArgs>;
};
export type CheckinEmocionalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
};
export type CheckinEmocionalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    colaborador?: boolean | Prisma.PerfilColaboradorDefaultArgs<ExtArgs>;
};
export type $CheckinEmocionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckinEmocional";
    objects: {
        colaborador: Prisma.$PerfilColaboradorPayload<ExtArgs>;
        analise: Prisma.$AnaliseIaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        colaboradorId: string;
        humor: $Enums.HumorTipo;
        nivelEstresse: number;
        realizadoEm: Date;
    }, ExtArgs["result"]["checkinEmocional"]>;
    composites: {};
};
export type CheckinEmocionalGetPayload<S extends boolean | null | undefined | CheckinEmocionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload, S>;
export type CheckinEmocionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckinEmocionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckinEmocionalCountAggregateInputType | true;
};
export interface CheckinEmocionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckinEmocional'];
        meta: {
            name: 'CheckinEmocional';
        };
    };
    findUnique<T extends CheckinEmocionalFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CheckinEmocionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CheckinEmocionalFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CheckinEmocionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CheckinEmocionalFindManyArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CheckinEmocionalCreateArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalCreateArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CheckinEmocionalCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CheckinEmocionalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CheckinEmocionalDeleteArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CheckinEmocionalUpdateArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CheckinEmocionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckinEmocionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CheckinEmocionalUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CheckinEmocionalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CheckinEmocionalUpsertArgs>(args: Prisma.SelectSubset<T, CheckinEmocionalUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CheckinEmocionalCountArgs>(args?: Prisma.Subset<T, CheckinEmocionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckinEmocionalCountAggregateOutputType> : number>;
    aggregate<T extends CheckinEmocionalAggregateArgs>(args: Prisma.Subset<T, CheckinEmocionalAggregateArgs>): Prisma.PrismaPromise<GetCheckinEmocionalAggregateType<T>>;
    groupBy<T extends CheckinEmocionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckinEmocionalGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckinEmocionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckinEmocionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinEmocionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CheckinEmocionalFieldRefs;
}
export interface Prisma__CheckinEmocionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    colaborador<T extends Prisma.PerfilColaboradorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilColaboradorDefaultArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    analise<T extends Prisma.CheckinEmocional$analiseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinEmocional$analiseArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CheckinEmocionalFieldRefs {
    readonly id: Prisma.FieldRef<"CheckinEmocional", 'String'>;
    readonly colaboradorId: Prisma.FieldRef<"CheckinEmocional", 'String'>;
    readonly humor: Prisma.FieldRef<"CheckinEmocional", 'HumorTipo'>;
    readonly nivelEstresse: Prisma.FieldRef<"CheckinEmocional", 'Int'>;
    readonly realizadoEm: Prisma.FieldRef<"CheckinEmocional", 'DateTime'>;
}
export type CheckinEmocionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where: Prisma.CheckinEmocionalWhereUniqueInput;
};
export type CheckinEmocionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where: Prisma.CheckinEmocionalWhereUniqueInput;
};
export type CheckinEmocionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where?: Prisma.CheckinEmocionalWhereInput;
    orderBy?: Prisma.CheckinEmocionalOrderByWithRelationInput | Prisma.CheckinEmocionalOrderByWithRelationInput[];
    cursor?: Prisma.CheckinEmocionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinEmocionalScalarFieldEnum | Prisma.CheckinEmocionalScalarFieldEnum[];
};
export type CheckinEmocionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where?: Prisma.CheckinEmocionalWhereInput;
    orderBy?: Prisma.CheckinEmocionalOrderByWithRelationInput | Prisma.CheckinEmocionalOrderByWithRelationInput[];
    cursor?: Prisma.CheckinEmocionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinEmocionalScalarFieldEnum | Prisma.CheckinEmocionalScalarFieldEnum[];
};
export type CheckinEmocionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where?: Prisma.CheckinEmocionalWhereInput;
    orderBy?: Prisma.CheckinEmocionalOrderByWithRelationInput | Prisma.CheckinEmocionalOrderByWithRelationInput[];
    cursor?: Prisma.CheckinEmocionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinEmocionalScalarFieldEnum | Prisma.CheckinEmocionalScalarFieldEnum[];
};
export type CheckinEmocionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinEmocionalCreateInput, Prisma.CheckinEmocionalUncheckedCreateInput>;
};
export type CheckinEmocionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CheckinEmocionalCreateManyInput | Prisma.CheckinEmocionalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CheckinEmocionalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    data: Prisma.CheckinEmocionalCreateManyInput | Prisma.CheckinEmocionalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CheckinEmocionalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CheckinEmocionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateInput, Prisma.CheckinEmocionalUncheckedUpdateInput>;
    where: Prisma.CheckinEmocionalWhereUniqueInput;
};
export type CheckinEmocionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateManyMutationInput, Prisma.CheckinEmocionalUncheckedUpdateManyInput>;
    where?: Prisma.CheckinEmocionalWhereInput;
    limit?: number;
};
export type CheckinEmocionalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinEmocionalUpdateManyMutationInput, Prisma.CheckinEmocionalUncheckedUpdateManyInput>;
    where?: Prisma.CheckinEmocionalWhereInput;
    limit?: number;
    include?: Prisma.CheckinEmocionalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CheckinEmocionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where: Prisma.CheckinEmocionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinEmocionalCreateInput, Prisma.CheckinEmocionalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CheckinEmocionalUpdateInput, Prisma.CheckinEmocionalUncheckedUpdateInput>;
};
export type CheckinEmocionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
    where: Prisma.CheckinEmocionalWhereUniqueInput;
};
export type CheckinEmocionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinEmocionalWhereInput;
    limit?: number;
};
export type CheckinEmocional$analiseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where?: Prisma.AnaliseIaWhereInput;
};
export type CheckinEmocionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinEmocionalSelect<ExtArgs> | null;
    omit?: Prisma.CheckinEmocionalOmit<ExtArgs> | null;
    include?: Prisma.CheckinEmocionalInclude<ExtArgs> | null;
};
