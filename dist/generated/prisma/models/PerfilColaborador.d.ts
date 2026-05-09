import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerfilColaboradorModel = runtime.Types.Result.DefaultSelection<Prisma.$PerfilColaboradorPayload>;
export type AggregatePerfilColaborador = {
    _count: PerfilColaboradorCountAggregateOutputType | null;
    _min: PerfilColaboradorMinAggregateOutputType | null;
    _max: PerfilColaboradorMaxAggregateOutputType | null;
};
export type PerfilColaboradorMinAggregateOutputType = {
    id: string | null;
    usuarioId: string | null;
    departamento: string | null;
    cargo: string | null;
};
export type PerfilColaboradorMaxAggregateOutputType = {
    id: string | null;
    usuarioId: string | null;
    departamento: string | null;
    cargo: string | null;
};
export type PerfilColaboradorCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    departamento: number;
    cargo: number;
    _all: number;
};
export type PerfilColaboradorMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    departamento?: true;
    cargo?: true;
};
export type PerfilColaboradorMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    departamento?: true;
    cargo?: true;
};
export type PerfilColaboradorCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    departamento?: true;
    cargo?: true;
    _all?: true;
};
export type PerfilColaboradorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilColaboradorWhereInput;
    orderBy?: Prisma.PerfilColaboradorOrderByWithRelationInput | Prisma.PerfilColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.PerfilColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerfilColaboradorCountAggregateInputType;
    _min?: PerfilColaboradorMinAggregateInputType;
    _max?: PerfilColaboradorMaxAggregateInputType;
};
export type GetPerfilColaboradorAggregateType<T extends PerfilColaboradorAggregateArgs> = {
    [P in keyof T & keyof AggregatePerfilColaborador]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerfilColaborador[P]> : Prisma.GetScalarType<T[P], AggregatePerfilColaborador[P]>;
};
export type PerfilColaboradorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilColaboradorWhereInput;
    orderBy?: Prisma.PerfilColaboradorOrderByWithAggregationInput | Prisma.PerfilColaboradorOrderByWithAggregationInput[];
    by: Prisma.PerfilColaboradorScalarFieldEnum[] | Prisma.PerfilColaboradorScalarFieldEnum;
    having?: Prisma.PerfilColaboradorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerfilColaboradorCountAggregateInputType | true;
    _min?: PerfilColaboradorMinAggregateInputType;
    _max?: PerfilColaboradorMaxAggregateInputType;
};
export type PerfilColaboradorGroupByOutputType = {
    id: string;
    usuarioId: string;
    departamento: string | null;
    cargo: string | null;
    _count: PerfilColaboradorCountAggregateOutputType | null;
    _min: PerfilColaboradorMinAggregateOutputType | null;
    _max: PerfilColaboradorMaxAggregateOutputType | null;
};
export type GetPerfilColaboradorGroupByPayload<T extends PerfilColaboradorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerfilColaboradorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerfilColaboradorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerfilColaboradorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerfilColaboradorGroupByOutputType[P]>;
}>>;
export type PerfilColaboradorWhereInput = {
    AND?: Prisma.PerfilColaboradorWhereInput | Prisma.PerfilColaboradorWhereInput[];
    OR?: Prisma.PerfilColaboradorWhereInput[];
    NOT?: Prisma.PerfilColaboradorWhereInput | Prisma.PerfilColaboradorWhereInput[];
    id?: Prisma.StringFilter<"PerfilColaborador"> | string;
    usuarioId?: Prisma.StringFilter<"PerfilColaborador"> | string;
    departamento?: Prisma.StringNullableFilter<"PerfilColaborador"> | string | null;
    cargo?: Prisma.StringNullableFilter<"PerfilColaborador"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    checkins?: Prisma.CheckinEmocionalListRelationFilter;
    consultas?: Prisma.ConsultaListRelationFilter;
};
export type PerfilColaboradorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    departamento?: Prisma.SortOrderInput | Prisma.SortOrder;
    cargo?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    checkins?: Prisma.CheckinEmocionalOrderByRelationAggregateInput;
    consultas?: Prisma.ConsultaOrderByRelationAggregateInput;
};
export type PerfilColaboradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    usuarioId?: string;
    AND?: Prisma.PerfilColaboradorWhereInput | Prisma.PerfilColaboradorWhereInput[];
    OR?: Prisma.PerfilColaboradorWhereInput[];
    NOT?: Prisma.PerfilColaboradorWhereInput | Prisma.PerfilColaboradorWhereInput[];
    departamento?: Prisma.StringNullableFilter<"PerfilColaborador"> | string | null;
    cargo?: Prisma.StringNullableFilter<"PerfilColaborador"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    checkins?: Prisma.CheckinEmocionalListRelationFilter;
    consultas?: Prisma.ConsultaListRelationFilter;
}, "id" | "usuarioId">;
export type PerfilColaboradorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    departamento?: Prisma.SortOrderInput | Prisma.SortOrder;
    cargo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PerfilColaboradorCountOrderByAggregateInput;
    _max?: Prisma.PerfilColaboradorMaxOrderByAggregateInput;
    _min?: Prisma.PerfilColaboradorMinOrderByAggregateInput;
};
export type PerfilColaboradorScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerfilColaboradorScalarWhereWithAggregatesInput | Prisma.PerfilColaboradorScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerfilColaboradorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerfilColaboradorScalarWhereWithAggregatesInput | Prisma.PerfilColaboradorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PerfilColaborador"> | string;
    usuarioId?: Prisma.StringWithAggregatesFilter<"PerfilColaborador"> | string;
    departamento?: Prisma.StringNullableWithAggregatesFilter<"PerfilColaborador"> | string | null;
    cargo?: Prisma.StringNullableWithAggregatesFilter<"PerfilColaborador"> | string | null;
};
export type PerfilColaboradorCreateInput = {
    id?: string;
    departamento?: string | null;
    cargo?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilColaboradorInput;
    checkins?: Prisma.CheckinEmocionalCreateNestedManyWithoutColaboradorInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorUncheckedCreateInput = {
    id?: string;
    usuarioId: string;
    departamento?: string | null;
    cargo?: string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedCreateNestedManyWithoutColaboradorInput;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilColaboradorNestedInput;
    checkins?: Prisma.CheckinEmocionalUpdateManyWithoutColaboradorNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedUpdateManyWithoutColaboradorNestedInput;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorCreateManyInput = {
    id?: string;
    usuarioId: string;
    departamento?: string | null;
    cargo?: string | null;
};
export type PerfilColaboradorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PerfilColaboradorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PerfilColaboradorNullableScalarRelationFilter = {
    is?: Prisma.PerfilColaboradorWhereInput | null;
    isNot?: Prisma.PerfilColaboradorWhereInput | null;
};
export type PerfilColaboradorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
};
export type PerfilColaboradorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
};
export type PerfilColaboradorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
};
export type PerfilColaboradorScalarRelationFilter = {
    is?: Prisma.PerfilColaboradorWhereInput;
    isNot?: Prisma.PerfilColaboradorWhereInput;
};
export type PerfilColaboradorCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.PerfilColaboradorUpsertWithoutUsuarioInput;
    disconnect?: Prisma.PerfilColaboradorWhereInput | boolean;
    delete?: Prisma.PerfilColaboradorWhereInput | boolean;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilColaboradorUpdateToOneWithWhereWithoutUsuarioInput, Prisma.PerfilColaboradorUpdateWithoutUsuarioInput>, Prisma.PerfilColaboradorUncheckedUpdateWithoutUsuarioInput>;
};
export type PerfilColaboradorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.PerfilColaboradorUpsertWithoutUsuarioInput;
    disconnect?: Prisma.PerfilColaboradorWhereInput | boolean;
    delete?: Prisma.PerfilColaboradorWhereInput | boolean;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilColaboradorUpdateToOneWithWhereWithoutUsuarioInput, Prisma.PerfilColaboradorUpdateWithoutUsuarioInput>, Prisma.PerfilColaboradorUncheckedUpdateWithoutUsuarioInput>;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type PerfilColaboradorCreateNestedOneWithoutCheckinsInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedCreateWithoutCheckinsInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutCheckinsInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedCreateWithoutCheckinsInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutCheckinsInput;
    upsert?: Prisma.PerfilColaboradorUpsertWithoutCheckinsInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilColaboradorUpdateToOneWithWhereWithoutCheckinsInput, Prisma.PerfilColaboradorUpdateWithoutCheckinsInput>, Prisma.PerfilColaboradorUncheckedUpdateWithoutCheckinsInput>;
};
export type PerfilColaboradorCreateNestedOneWithoutConsultasInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutConsultasInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.PerfilColaboradorCreateOrConnectWithoutConsultasInput;
    upsert?: Prisma.PerfilColaboradorUpsertWithoutConsultasInput;
    connect?: Prisma.PerfilColaboradorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilColaboradorUpdateToOneWithWhereWithoutConsultasInput, Prisma.PerfilColaboradorUpdateWithoutConsultasInput>, Prisma.PerfilColaboradorUncheckedUpdateWithoutConsultasInput>;
};
export type PerfilColaboradorCreateWithoutUsuarioInput = {
    id?: string;
    departamento?: string | null;
    cargo?: string | null;
    checkins?: Prisma.CheckinEmocionalCreateNestedManyWithoutColaboradorInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorUncheckedCreateWithoutUsuarioInput = {
    id?: string;
    departamento?: string | null;
    cargo?: string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedCreateNestedManyWithoutColaboradorInput;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.PerfilColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
};
export type PerfilColaboradorUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.PerfilColaboradorWhereInput;
};
export type PerfilColaboradorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.PerfilColaboradorWhereInput;
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutUsuarioInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutUsuarioInput>;
};
export type PerfilColaboradorUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkins?: Prisma.CheckinEmocionalUpdateManyWithoutColaboradorNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedUpdateManyWithoutColaboradorNestedInput;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorCreateWithoutCheckinsInput = {
    id?: string;
    departamento?: string | null;
    cargo?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilColaboradorInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorUncheckedCreateWithoutCheckinsInput = {
    id?: string;
    usuarioId: string;
    departamento?: string | null;
    cargo?: string | null;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorCreateOrConnectWithoutCheckinsInput = {
    where: Prisma.PerfilColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedCreateWithoutCheckinsInput>;
};
export type PerfilColaboradorUpsertWithoutCheckinsInput = {
    update: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutCheckinsInput>;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedCreateWithoutCheckinsInput>;
    where?: Prisma.PerfilColaboradorWhereInput;
};
export type PerfilColaboradorUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: Prisma.PerfilColaboradorWhereInput;
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutCheckinsInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutCheckinsInput>;
};
export type PerfilColaboradorUpdateWithoutCheckinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilColaboradorNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorUncheckedUpdateWithoutCheckinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorCreateWithoutConsultasInput = {
    id?: string;
    departamento?: string | null;
    cargo?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilColaboradorInput;
    checkins?: Prisma.CheckinEmocionalCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorUncheckedCreateWithoutConsultasInput = {
    id?: string;
    usuarioId: string;
    departamento?: string | null;
    cargo?: string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedCreateNestedManyWithoutColaboradorInput;
};
export type PerfilColaboradorCreateOrConnectWithoutConsultasInput = {
    where: Prisma.PerfilColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedCreateWithoutConsultasInput>;
};
export type PerfilColaboradorUpsertWithoutConsultasInput = {
    update: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutConsultasInput>;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedCreateWithoutConsultasInput>;
    where?: Prisma.PerfilColaboradorWhereInput;
};
export type PerfilColaboradorUpdateToOneWithWhereWithoutConsultasInput = {
    where?: Prisma.PerfilColaboradorWhereInput;
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateWithoutConsultasInput, Prisma.PerfilColaboradorUncheckedUpdateWithoutConsultasInput>;
};
export type PerfilColaboradorUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilColaboradorNestedInput;
    checkins?: Prisma.CheckinEmocionalUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorUncheckedUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cargo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkins?: Prisma.CheckinEmocionalUncheckedUpdateManyWithoutColaboradorNestedInput;
};
export type PerfilColaboradorCountOutputType = {
    checkins: number;
    consultas: number;
};
export type PerfilColaboradorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkins?: boolean | PerfilColaboradorCountOutputTypeCountCheckinsArgs;
    consultas?: boolean | PerfilColaboradorCountOutputTypeCountConsultasArgs;
};
export type PerfilColaboradorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorCountOutputTypeSelect<ExtArgs> | null;
};
export type PerfilColaboradorCountOutputTypeCountCheckinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinEmocionalWhereInput;
};
export type PerfilColaboradorCountOutputTypeCountConsultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type PerfilColaboradorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    departamento?: boolean;
    cargo?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    checkins?: boolean | Prisma.PerfilColaborador$checkinsArgs<ExtArgs>;
    consultas?: boolean | Prisma.PerfilColaborador$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilColaboradorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilColaborador"]>;
export type PerfilColaboradorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    departamento?: boolean;
    cargo?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilColaborador"]>;
export type PerfilColaboradorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    departamento?: boolean;
    cargo?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilColaborador"]>;
export type PerfilColaboradorSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    departamento?: boolean;
    cargo?: boolean;
};
export type PerfilColaboradorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "departamento" | "cargo", ExtArgs["result"]["perfilColaborador"]>;
export type PerfilColaboradorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    checkins?: boolean | Prisma.PerfilColaborador$checkinsArgs<ExtArgs>;
    consultas?: boolean | Prisma.PerfilColaborador$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilColaboradorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PerfilColaboradorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type PerfilColaboradorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $PerfilColaboradorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerfilColaborador";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        checkins: Prisma.$CheckinEmocionalPayload<ExtArgs>[];
        consultas: Prisma.$ConsultaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuarioId: string;
        departamento: string | null;
        cargo: string | null;
    }, ExtArgs["result"]["perfilColaborador"]>;
    composites: {};
};
export type PerfilColaboradorGetPayload<S extends boolean | null | undefined | PerfilColaboradorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload, S>;
export type PerfilColaboradorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerfilColaboradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerfilColaboradorCountAggregateInputType | true;
};
export interface PerfilColaboradorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerfilColaborador'];
        meta: {
            name: 'PerfilColaborador';
        };
    };
    findUnique<T extends PerfilColaboradorFindUniqueArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerfilColaboradorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerfilColaboradorFindFirstArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerfilColaboradorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerfilColaboradorFindManyArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerfilColaboradorCreateArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorCreateArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerfilColaboradorCreateManyArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerfilColaboradorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerfilColaboradorDeleteArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorDeleteArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerfilColaboradorUpdateArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorUpdateArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerfilColaboradorDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerfilColaboradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerfilColaboradorUpdateManyArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerfilColaboradorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerfilColaboradorUpsertArgs>(args: Prisma.SelectSubset<T, PerfilColaboradorUpsertArgs<ExtArgs>>): Prisma.Prisma__PerfilColaboradorClient<runtime.Types.Result.GetResult<Prisma.$PerfilColaboradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerfilColaboradorCountArgs>(args?: Prisma.Subset<T, PerfilColaboradorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerfilColaboradorCountAggregateOutputType> : number>;
    aggregate<T extends PerfilColaboradorAggregateArgs>(args: Prisma.Subset<T, PerfilColaboradorAggregateArgs>): Prisma.PrismaPromise<GetPerfilColaboradorAggregateType<T>>;
    groupBy<T extends PerfilColaboradorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerfilColaboradorGroupByArgs['orderBy'];
    } : {
        orderBy?: PerfilColaboradorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerfilColaboradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilColaboradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerfilColaboradorFieldRefs;
}
export interface Prisma__PerfilColaboradorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    checkins<T extends Prisma.PerfilColaborador$checkinsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilColaborador$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consultas<T extends Prisma.PerfilColaborador$consultasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilColaborador$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerfilColaboradorFieldRefs {
    readonly id: Prisma.FieldRef<"PerfilColaborador", 'String'>;
    readonly usuarioId: Prisma.FieldRef<"PerfilColaborador", 'String'>;
    readonly departamento: Prisma.FieldRef<"PerfilColaborador", 'String'>;
    readonly cargo: Prisma.FieldRef<"PerfilColaborador", 'String'>;
}
export type PerfilColaboradorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where?: Prisma.PerfilColaboradorWhereInput;
    orderBy?: Prisma.PerfilColaboradorOrderByWithRelationInput | Prisma.PerfilColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.PerfilColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilColaboradorScalarFieldEnum | Prisma.PerfilColaboradorScalarFieldEnum[];
};
export type PerfilColaboradorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where?: Prisma.PerfilColaboradorWhereInput;
    orderBy?: Prisma.PerfilColaboradorOrderByWithRelationInput | Prisma.PerfilColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.PerfilColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilColaboradorScalarFieldEnum | Prisma.PerfilColaboradorScalarFieldEnum[];
};
export type PerfilColaboradorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where?: Prisma.PerfilColaboradorWhereInput;
    orderBy?: Prisma.PerfilColaboradorOrderByWithRelationInput | Prisma.PerfilColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.PerfilColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilColaboradorScalarFieldEnum | Prisma.PerfilColaboradorScalarFieldEnum[];
};
export type PerfilColaboradorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilColaboradorCreateInput, Prisma.PerfilColaboradorUncheckedCreateInput>;
};
export type PerfilColaboradorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerfilColaboradorCreateManyInput | Prisma.PerfilColaboradorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerfilColaboradorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    data: Prisma.PerfilColaboradorCreateManyInput | Prisma.PerfilColaboradorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerfilColaboradorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerfilColaboradorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateInput, Prisma.PerfilColaboradorUncheckedUpdateInput>;
    where: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateManyMutationInput, Prisma.PerfilColaboradorUncheckedUpdateManyInput>;
    where?: Prisma.PerfilColaboradorWhereInput;
    limit?: number;
};
export type PerfilColaboradorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilColaboradorUpdateManyMutationInput, Prisma.PerfilColaboradorUncheckedUpdateManyInput>;
    where?: Prisma.PerfilColaboradorWhereInput;
    limit?: number;
    include?: Prisma.PerfilColaboradorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerfilColaboradorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where: Prisma.PerfilColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilColaboradorCreateInput, Prisma.PerfilColaboradorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerfilColaboradorUpdateInput, Prisma.PerfilColaboradorUncheckedUpdateInput>;
};
export type PerfilColaboradorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
    where: Prisma.PerfilColaboradorWhereUniqueInput;
};
export type PerfilColaboradorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilColaboradorWhereInput;
    limit?: number;
};
export type PerfilColaborador$checkinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerfilColaborador$consultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerfilColaboradorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.PerfilColaboradorOmit<ExtArgs> | null;
    include?: Prisma.PerfilColaboradorInclude<ExtArgs> | null;
};
