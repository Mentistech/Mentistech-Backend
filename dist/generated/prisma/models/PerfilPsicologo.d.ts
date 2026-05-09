import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerfilPsicologoModel = runtime.Types.Result.DefaultSelection<Prisma.$PerfilPsicologoPayload>;
export type AggregatePerfilPsicologo = {
    _count: PerfilPsicologoCountAggregateOutputType | null;
    _min: PerfilPsicologoMinAggregateOutputType | null;
    _max: PerfilPsicologoMaxAggregateOutputType | null;
};
export type PerfilPsicologoMinAggregateOutputType = {
    id: string | null;
    usuarioId: string | null;
    crp: string | null;
    especialidade: string | null;
};
export type PerfilPsicologoMaxAggregateOutputType = {
    id: string | null;
    usuarioId: string | null;
    crp: string | null;
    especialidade: string | null;
};
export type PerfilPsicologoCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    crp: number;
    especialidade: number;
    _all: number;
};
export type PerfilPsicologoMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    crp?: true;
    especialidade?: true;
};
export type PerfilPsicologoMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    crp?: true;
    especialidade?: true;
};
export type PerfilPsicologoCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    crp?: true;
    especialidade?: true;
    _all?: true;
};
export type PerfilPsicologoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilPsicologoWhereInput;
    orderBy?: Prisma.PerfilPsicologoOrderByWithRelationInput | Prisma.PerfilPsicologoOrderByWithRelationInput[];
    cursor?: Prisma.PerfilPsicologoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerfilPsicologoCountAggregateInputType;
    _min?: PerfilPsicologoMinAggregateInputType;
    _max?: PerfilPsicologoMaxAggregateInputType;
};
export type GetPerfilPsicologoAggregateType<T extends PerfilPsicologoAggregateArgs> = {
    [P in keyof T & keyof AggregatePerfilPsicologo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerfilPsicologo[P]> : Prisma.GetScalarType<T[P], AggregatePerfilPsicologo[P]>;
};
export type PerfilPsicologoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilPsicologoWhereInput;
    orderBy?: Prisma.PerfilPsicologoOrderByWithAggregationInput | Prisma.PerfilPsicologoOrderByWithAggregationInput[];
    by: Prisma.PerfilPsicologoScalarFieldEnum[] | Prisma.PerfilPsicologoScalarFieldEnum;
    having?: Prisma.PerfilPsicologoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerfilPsicologoCountAggregateInputType | true;
    _min?: PerfilPsicologoMinAggregateInputType;
    _max?: PerfilPsicologoMaxAggregateInputType;
};
export type PerfilPsicologoGroupByOutputType = {
    id: string;
    usuarioId: string;
    crp: string | null;
    especialidade: string | null;
    _count: PerfilPsicologoCountAggregateOutputType | null;
    _min: PerfilPsicologoMinAggregateOutputType | null;
    _max: PerfilPsicologoMaxAggregateOutputType | null;
};
export type GetPerfilPsicologoGroupByPayload<T extends PerfilPsicologoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerfilPsicologoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerfilPsicologoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerfilPsicologoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerfilPsicologoGroupByOutputType[P]>;
}>>;
export type PerfilPsicologoWhereInput = {
    AND?: Prisma.PerfilPsicologoWhereInput | Prisma.PerfilPsicologoWhereInput[];
    OR?: Prisma.PerfilPsicologoWhereInput[];
    NOT?: Prisma.PerfilPsicologoWhereInput | Prisma.PerfilPsicologoWhereInput[];
    id?: Prisma.StringFilter<"PerfilPsicologo"> | string;
    usuarioId?: Prisma.StringFilter<"PerfilPsicologo"> | string;
    crp?: Prisma.StringNullableFilter<"PerfilPsicologo"> | string | null;
    especialidade?: Prisma.StringNullableFilter<"PerfilPsicologo"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disponibilidades?: Prisma.DisponibilidadeListRelationFilter;
    consultas?: Prisma.ConsultaListRelationFilter;
};
export type PerfilPsicologoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    crp?: Prisma.SortOrderInput | Prisma.SortOrder;
    especialidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    disponibilidades?: Prisma.DisponibilidadeOrderByRelationAggregateInput;
    consultas?: Prisma.ConsultaOrderByRelationAggregateInput;
};
export type PerfilPsicologoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    usuarioId?: string;
    AND?: Prisma.PerfilPsicologoWhereInput | Prisma.PerfilPsicologoWhereInput[];
    OR?: Prisma.PerfilPsicologoWhereInput[];
    NOT?: Prisma.PerfilPsicologoWhereInput | Prisma.PerfilPsicologoWhereInput[];
    crp?: Prisma.StringNullableFilter<"PerfilPsicologo"> | string | null;
    especialidade?: Prisma.StringNullableFilter<"PerfilPsicologo"> | string | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disponibilidades?: Prisma.DisponibilidadeListRelationFilter;
    consultas?: Prisma.ConsultaListRelationFilter;
}, "id" | "usuarioId">;
export type PerfilPsicologoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    crp?: Prisma.SortOrderInput | Prisma.SortOrder;
    especialidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PerfilPsicologoCountOrderByAggregateInput;
    _max?: Prisma.PerfilPsicologoMaxOrderByAggregateInput;
    _min?: Prisma.PerfilPsicologoMinOrderByAggregateInput;
};
export type PerfilPsicologoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerfilPsicologoScalarWhereWithAggregatesInput | Prisma.PerfilPsicologoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerfilPsicologoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerfilPsicologoScalarWhereWithAggregatesInput | Prisma.PerfilPsicologoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PerfilPsicologo"> | string;
    usuarioId?: Prisma.StringWithAggregatesFilter<"PerfilPsicologo"> | string;
    crp?: Prisma.StringNullableWithAggregatesFilter<"PerfilPsicologo"> | string | null;
    especialidade?: Prisma.StringNullableWithAggregatesFilter<"PerfilPsicologo"> | string | null;
};
export type PerfilPsicologoCreateInput = {
    id?: string;
    crp?: string | null;
    especialidade?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilPsicologoInput;
    disponibilidades?: Prisma.DisponibilidadeCreateNestedManyWithoutPsicologoInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoUncheckedCreateInput = {
    id?: string;
    usuarioId: string;
    crp?: string | null;
    especialidade?: string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedCreateNestedManyWithoutPsicologoInput;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilPsicologoNestedInput;
    disponibilidades?: Prisma.DisponibilidadeUpdateManyWithoutPsicologoNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedUpdateManyWithoutPsicologoNestedInput;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoCreateManyInput = {
    id?: string;
    usuarioId: string;
    crp?: string | null;
    especialidade?: string | null;
};
export type PerfilPsicologoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PerfilPsicologoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PerfilPsicologoNullableScalarRelationFilter = {
    is?: Prisma.PerfilPsicologoWhereInput | null;
    isNot?: Prisma.PerfilPsicologoWhereInput | null;
};
export type PerfilPsicologoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    crp?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
};
export type PerfilPsicologoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    crp?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
};
export type PerfilPsicologoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    crp?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
};
export type PerfilPsicologoScalarRelationFilter = {
    is?: Prisma.PerfilPsicologoWhereInput;
    isNot?: Prisma.PerfilPsicologoWhereInput;
};
export type PerfilPsicologoCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.PerfilPsicologoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.PerfilPsicologoWhereInput | boolean;
    delete?: Prisma.PerfilPsicologoWhereInput | boolean;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilPsicologoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.PerfilPsicologoUpdateWithoutUsuarioInput>, Prisma.PerfilPsicologoUncheckedUpdateWithoutUsuarioInput>;
};
export type PerfilPsicologoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.PerfilPsicologoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.PerfilPsicologoWhereInput | boolean;
    delete?: Prisma.PerfilPsicologoWhereInput | boolean;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilPsicologoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.PerfilPsicologoUpdateWithoutUsuarioInput>, Prisma.PerfilPsicologoUncheckedUpdateWithoutUsuarioInput>;
};
export type PerfilPsicologoCreateNestedOneWithoutDisponibilidadesInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedCreateWithoutDisponibilidadesInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutDisponibilidadesInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoUpdateOneRequiredWithoutDisponibilidadesNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedCreateWithoutDisponibilidadesInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutDisponibilidadesInput;
    upsert?: Prisma.PerfilPsicologoUpsertWithoutDisponibilidadesInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilPsicologoUpdateToOneWithWhereWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUpdateWithoutDisponibilidadesInput>, Prisma.PerfilPsicologoUncheckedUpdateWithoutDisponibilidadesInput>;
};
export type PerfilPsicologoCreateNestedOneWithoutConsultasInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutConsultasInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.PerfilPsicologoCreateOrConnectWithoutConsultasInput;
    upsert?: Prisma.PerfilPsicologoUpsertWithoutConsultasInput;
    connect?: Prisma.PerfilPsicologoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerfilPsicologoUpdateToOneWithWhereWithoutConsultasInput, Prisma.PerfilPsicologoUpdateWithoutConsultasInput>, Prisma.PerfilPsicologoUncheckedUpdateWithoutConsultasInput>;
};
export type PerfilPsicologoCreateWithoutUsuarioInput = {
    id?: string;
    crp?: string | null;
    especialidade?: string | null;
    disponibilidades?: Prisma.DisponibilidadeCreateNestedManyWithoutPsicologoInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoUncheckedCreateWithoutUsuarioInput = {
    id?: string;
    crp?: string | null;
    especialidade?: string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedCreateNestedManyWithoutPsicologoInput;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.PerfilPsicologoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
};
export type PerfilPsicologoUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.PerfilPsicologoWhereInput;
};
export type PerfilPsicologoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.PerfilPsicologoWhereInput;
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutUsuarioInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutUsuarioInput>;
};
export type PerfilPsicologoUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibilidades?: Prisma.DisponibilidadeUpdateManyWithoutPsicologoNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedUpdateManyWithoutPsicologoNestedInput;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoCreateWithoutDisponibilidadesInput = {
    id?: string;
    crp?: string | null;
    especialidade?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilPsicologoInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoUncheckedCreateWithoutDisponibilidadesInput = {
    id?: string;
    usuarioId: string;
    crp?: string | null;
    especialidade?: string | null;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoCreateOrConnectWithoutDisponibilidadesInput = {
    where: Prisma.PerfilPsicologoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedCreateWithoutDisponibilidadesInput>;
};
export type PerfilPsicologoUpsertWithoutDisponibilidadesInput = {
    update: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutDisponibilidadesInput>;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedCreateWithoutDisponibilidadesInput>;
    where?: Prisma.PerfilPsicologoWhereInput;
};
export type PerfilPsicologoUpdateToOneWithWhereWithoutDisponibilidadesInput = {
    where?: Prisma.PerfilPsicologoWhereInput;
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutDisponibilidadesInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutDisponibilidadesInput>;
};
export type PerfilPsicologoUpdateWithoutDisponibilidadesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilPsicologoNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoUncheckedUpdateWithoutDisponibilidadesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoCreateWithoutConsultasInput = {
    id?: string;
    crp?: string | null;
    especialidade?: string | null;
    usuario: Prisma.UsuarioCreateNestedOneWithoutPerfilPsicologoInput;
    disponibilidades?: Prisma.DisponibilidadeCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoUncheckedCreateWithoutConsultasInput = {
    id?: string;
    usuarioId: string;
    crp?: string | null;
    especialidade?: string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedCreateNestedManyWithoutPsicologoInput;
};
export type PerfilPsicologoCreateOrConnectWithoutConsultasInput = {
    where: Prisma.PerfilPsicologoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedCreateWithoutConsultasInput>;
};
export type PerfilPsicologoUpsertWithoutConsultasInput = {
    update: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutConsultasInput>;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedCreateWithoutConsultasInput>;
    where?: Prisma.PerfilPsicologoWhereInput;
};
export type PerfilPsicologoUpdateToOneWithWhereWithoutConsultasInput = {
    where?: Prisma.PerfilPsicologoWhereInput;
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateWithoutConsultasInput, Prisma.PerfilPsicologoUncheckedUpdateWithoutConsultasInput>;
};
export type PerfilPsicologoUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutPerfilPsicologoNestedInput;
    disponibilidades?: Prisma.DisponibilidadeUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoUncheckedUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    crp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    especialidade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibilidades?: Prisma.DisponibilidadeUncheckedUpdateManyWithoutPsicologoNestedInput;
};
export type PerfilPsicologoCountOutputType = {
    disponibilidades: number;
    consultas: number;
};
export type PerfilPsicologoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disponibilidades?: boolean | PerfilPsicologoCountOutputTypeCountDisponibilidadesArgs;
    consultas?: boolean | PerfilPsicologoCountOutputTypeCountConsultasArgs;
};
export type PerfilPsicologoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoCountOutputTypeSelect<ExtArgs> | null;
};
export type PerfilPsicologoCountOutputTypeCountDisponibilidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisponibilidadeWhereInput;
};
export type PerfilPsicologoCountOutputTypeCountConsultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type PerfilPsicologoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    crp?: boolean;
    especialidade?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disponibilidades?: boolean | Prisma.PerfilPsicologo$disponibilidadesArgs<ExtArgs>;
    consultas?: boolean | Prisma.PerfilPsicologo$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilPsicologoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilPsicologo"]>;
export type PerfilPsicologoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    crp?: boolean;
    especialidade?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilPsicologo"]>;
export type PerfilPsicologoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    crp?: boolean;
    especialidade?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfilPsicologo"]>;
export type PerfilPsicologoSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    crp?: boolean;
    especialidade?: boolean;
};
export type PerfilPsicologoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "crp" | "especialidade", ExtArgs["result"]["perfilPsicologo"]>;
export type PerfilPsicologoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disponibilidades?: boolean | Prisma.PerfilPsicologo$disponibilidadesArgs<ExtArgs>;
    consultas?: boolean | Prisma.PerfilPsicologo$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilPsicologoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PerfilPsicologoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type PerfilPsicologoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $PerfilPsicologoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerfilPsicologo";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        disponibilidades: Prisma.$DisponibilidadePayload<ExtArgs>[];
        consultas: Prisma.$ConsultaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuarioId: string;
        crp: string | null;
        especialidade: string | null;
    }, ExtArgs["result"]["perfilPsicologo"]>;
    composites: {};
};
export type PerfilPsicologoGetPayload<S extends boolean | null | undefined | PerfilPsicologoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload, S>;
export type PerfilPsicologoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerfilPsicologoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerfilPsicologoCountAggregateInputType | true;
};
export interface PerfilPsicologoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerfilPsicologo'];
        meta: {
            name: 'PerfilPsicologo';
        };
    };
    findUnique<T extends PerfilPsicologoFindUniqueArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerfilPsicologoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerfilPsicologoFindFirstArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerfilPsicologoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerfilPsicologoFindManyArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerfilPsicologoCreateArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoCreateArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerfilPsicologoCreateManyArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerfilPsicologoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerfilPsicologoDeleteArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoDeleteArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerfilPsicologoUpdateArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoUpdateArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerfilPsicologoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerfilPsicologoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerfilPsicologoUpdateManyArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerfilPsicologoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerfilPsicologoUpsertArgs>(args: Prisma.SelectSubset<T, PerfilPsicologoUpsertArgs<ExtArgs>>): Prisma.Prisma__PerfilPsicologoClient<runtime.Types.Result.GetResult<Prisma.$PerfilPsicologoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerfilPsicologoCountArgs>(args?: Prisma.Subset<T, PerfilPsicologoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerfilPsicologoCountAggregateOutputType> : number>;
    aggregate<T extends PerfilPsicologoAggregateArgs>(args: Prisma.Subset<T, PerfilPsicologoAggregateArgs>): Prisma.PrismaPromise<GetPerfilPsicologoAggregateType<T>>;
    groupBy<T extends PerfilPsicologoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerfilPsicologoGroupByArgs['orderBy'];
    } : {
        orderBy?: PerfilPsicologoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerfilPsicologoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilPsicologoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerfilPsicologoFieldRefs;
}
export interface Prisma__PerfilPsicologoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    disponibilidades<T extends Prisma.PerfilPsicologo$disponibilidadesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilPsicologo$disponibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consultas<T extends Prisma.PerfilPsicologo$consultasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerfilPsicologo$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerfilPsicologoFieldRefs {
    readonly id: Prisma.FieldRef<"PerfilPsicologo", 'String'>;
    readonly usuarioId: Prisma.FieldRef<"PerfilPsicologo", 'String'>;
    readonly crp: Prisma.FieldRef<"PerfilPsicologo", 'String'>;
    readonly especialidade: Prisma.FieldRef<"PerfilPsicologo", 'String'>;
}
export type PerfilPsicologoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where?: Prisma.PerfilPsicologoWhereInput;
    orderBy?: Prisma.PerfilPsicologoOrderByWithRelationInput | Prisma.PerfilPsicologoOrderByWithRelationInput[];
    cursor?: Prisma.PerfilPsicologoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilPsicologoScalarFieldEnum | Prisma.PerfilPsicologoScalarFieldEnum[];
};
export type PerfilPsicologoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where?: Prisma.PerfilPsicologoWhereInput;
    orderBy?: Prisma.PerfilPsicologoOrderByWithRelationInput | Prisma.PerfilPsicologoOrderByWithRelationInput[];
    cursor?: Prisma.PerfilPsicologoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilPsicologoScalarFieldEnum | Prisma.PerfilPsicologoScalarFieldEnum[];
};
export type PerfilPsicologoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where?: Prisma.PerfilPsicologoWhereInput;
    orderBy?: Prisma.PerfilPsicologoOrderByWithRelationInput | Prisma.PerfilPsicologoOrderByWithRelationInput[];
    cursor?: Prisma.PerfilPsicologoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilPsicologoScalarFieldEnum | Prisma.PerfilPsicologoScalarFieldEnum[];
};
export type PerfilPsicologoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilPsicologoCreateInput, Prisma.PerfilPsicologoUncheckedCreateInput>;
};
export type PerfilPsicologoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerfilPsicologoCreateManyInput | Prisma.PerfilPsicologoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerfilPsicologoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    data: Prisma.PerfilPsicologoCreateManyInput | Prisma.PerfilPsicologoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerfilPsicologoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerfilPsicologoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateInput, Prisma.PerfilPsicologoUncheckedUpdateInput>;
    where: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateManyMutationInput, Prisma.PerfilPsicologoUncheckedUpdateManyInput>;
    where?: Prisma.PerfilPsicologoWhereInput;
    limit?: number;
};
export type PerfilPsicologoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerfilPsicologoUpdateManyMutationInput, Prisma.PerfilPsicologoUncheckedUpdateManyInput>;
    where?: Prisma.PerfilPsicologoWhereInput;
    limit?: number;
    include?: Prisma.PerfilPsicologoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerfilPsicologoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where: Prisma.PerfilPsicologoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerfilPsicologoCreateInput, Prisma.PerfilPsicologoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerfilPsicologoUpdateInput, Prisma.PerfilPsicologoUncheckedUpdateInput>;
};
export type PerfilPsicologoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
    where: Prisma.PerfilPsicologoWhereUniqueInput;
};
export type PerfilPsicologoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerfilPsicologoWhereInput;
    limit?: number;
};
export type PerfilPsicologo$disponibilidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerfilPsicologo$consultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerfilPsicologoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilPsicologoSelect<ExtArgs> | null;
    omit?: Prisma.PerfilPsicologoOmit<ExtArgs> | null;
    include?: Prisma.PerfilPsicologoInclude<ExtArgs> | null;
};
