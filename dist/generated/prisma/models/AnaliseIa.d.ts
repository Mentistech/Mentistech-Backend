import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnaliseIaModel = runtime.Types.Result.DefaultSelection<Prisma.$AnaliseIaPayload>;
export type AggregateAnaliseIa = {
    _count: AnaliseIaCountAggregateOutputType | null;
    _min: AnaliseIaMinAggregateOutputType | null;
    _max: AnaliseIaMaxAggregateOutputType | null;
};
export type AnaliseIaMinAggregateOutputType = {
    id: string | null;
    checkinId: string | null;
    respostaIa: string | null;
    conteudoPsicologico: string | null;
    geradoEm: Date | null;
};
export type AnaliseIaMaxAggregateOutputType = {
    id: string | null;
    checkinId: string | null;
    respostaIa: string | null;
    conteudoPsicologico: string | null;
    geradoEm: Date | null;
};
export type AnaliseIaCountAggregateOutputType = {
    id: number;
    checkinId: number;
    respostaIa: number;
    conteudoPsicologico: number;
    geradoEm: number;
    _all: number;
};
export type AnaliseIaMinAggregateInputType = {
    id?: true;
    checkinId?: true;
    respostaIa?: true;
    conteudoPsicologico?: true;
    geradoEm?: true;
};
export type AnaliseIaMaxAggregateInputType = {
    id?: true;
    checkinId?: true;
    respostaIa?: true;
    conteudoPsicologico?: true;
    geradoEm?: true;
};
export type AnaliseIaCountAggregateInputType = {
    id?: true;
    checkinId?: true;
    respostaIa?: true;
    conteudoPsicologico?: true;
    geradoEm?: true;
    _all?: true;
};
export type AnaliseIaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnaliseIaWhereInput;
    orderBy?: Prisma.AnaliseIaOrderByWithRelationInput | Prisma.AnaliseIaOrderByWithRelationInput[];
    cursor?: Prisma.AnaliseIaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnaliseIaCountAggregateInputType;
    _min?: AnaliseIaMinAggregateInputType;
    _max?: AnaliseIaMaxAggregateInputType;
};
export type GetAnaliseIaAggregateType<T extends AnaliseIaAggregateArgs> = {
    [P in keyof T & keyof AggregateAnaliseIa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnaliseIa[P]> : Prisma.GetScalarType<T[P], AggregateAnaliseIa[P]>;
};
export type AnaliseIaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnaliseIaWhereInput;
    orderBy?: Prisma.AnaliseIaOrderByWithAggregationInput | Prisma.AnaliseIaOrderByWithAggregationInput[];
    by: Prisma.AnaliseIaScalarFieldEnum[] | Prisma.AnaliseIaScalarFieldEnum;
    having?: Prisma.AnaliseIaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnaliseIaCountAggregateInputType | true;
    _min?: AnaliseIaMinAggregateInputType;
    _max?: AnaliseIaMaxAggregateInputType;
};
export type AnaliseIaGroupByOutputType = {
    id: string;
    checkinId: string;
    respostaIa: string | null;
    conteudoPsicologico: string | null;
    geradoEm: Date;
    _count: AnaliseIaCountAggregateOutputType | null;
    _min: AnaliseIaMinAggregateOutputType | null;
    _max: AnaliseIaMaxAggregateOutputType | null;
};
export type GetAnaliseIaGroupByPayload<T extends AnaliseIaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnaliseIaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnaliseIaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnaliseIaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnaliseIaGroupByOutputType[P]>;
}>>;
export type AnaliseIaWhereInput = {
    AND?: Prisma.AnaliseIaWhereInput | Prisma.AnaliseIaWhereInput[];
    OR?: Prisma.AnaliseIaWhereInput[];
    NOT?: Prisma.AnaliseIaWhereInput | Prisma.AnaliseIaWhereInput[];
    id?: Prisma.StringFilter<"AnaliseIa"> | string;
    checkinId?: Prisma.StringFilter<"AnaliseIa"> | string;
    respostaIa?: Prisma.StringNullableFilter<"AnaliseIa"> | string | null;
    conteudoPsicologico?: Prisma.StringNullableFilter<"AnaliseIa"> | string | null;
    geradoEm?: Prisma.DateTimeFilter<"AnaliseIa"> | Date | string;
    checkin?: Prisma.XOR<Prisma.CheckinEmocionalScalarRelationFilter, Prisma.CheckinEmocionalWhereInput>;
    consultas?: Prisma.ConsultaListRelationFilter;
};
export type AnaliseIaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    checkinId?: Prisma.SortOrder;
    respostaIa?: Prisma.SortOrderInput | Prisma.SortOrder;
    conteudoPsicologico?: Prisma.SortOrderInput | Prisma.SortOrder;
    geradoEm?: Prisma.SortOrder;
    checkin?: Prisma.CheckinEmocionalOrderByWithRelationInput;
    consultas?: Prisma.ConsultaOrderByRelationAggregateInput;
};
export type AnaliseIaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    checkinId?: string;
    AND?: Prisma.AnaliseIaWhereInput | Prisma.AnaliseIaWhereInput[];
    OR?: Prisma.AnaliseIaWhereInput[];
    NOT?: Prisma.AnaliseIaWhereInput | Prisma.AnaliseIaWhereInput[];
    respostaIa?: Prisma.StringNullableFilter<"AnaliseIa"> | string | null;
    conteudoPsicologico?: Prisma.StringNullableFilter<"AnaliseIa"> | string | null;
    geradoEm?: Prisma.DateTimeFilter<"AnaliseIa"> | Date | string;
    checkin?: Prisma.XOR<Prisma.CheckinEmocionalScalarRelationFilter, Prisma.CheckinEmocionalWhereInput>;
    consultas?: Prisma.ConsultaListRelationFilter;
}, "id" | "checkinId">;
export type AnaliseIaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    checkinId?: Prisma.SortOrder;
    respostaIa?: Prisma.SortOrderInput | Prisma.SortOrder;
    conteudoPsicologico?: Prisma.SortOrderInput | Prisma.SortOrder;
    geradoEm?: Prisma.SortOrder;
    _count?: Prisma.AnaliseIaCountOrderByAggregateInput;
    _max?: Prisma.AnaliseIaMaxOrderByAggregateInput;
    _min?: Prisma.AnaliseIaMinOrderByAggregateInput;
};
export type AnaliseIaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnaliseIaScalarWhereWithAggregatesInput | Prisma.AnaliseIaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnaliseIaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnaliseIaScalarWhereWithAggregatesInput | Prisma.AnaliseIaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnaliseIa"> | string;
    checkinId?: Prisma.StringWithAggregatesFilter<"AnaliseIa"> | string;
    respostaIa?: Prisma.StringNullableWithAggregatesFilter<"AnaliseIa"> | string | null;
    conteudoPsicologico?: Prisma.StringNullableWithAggregatesFilter<"AnaliseIa"> | string | null;
    geradoEm?: Prisma.DateTimeWithAggregatesFilter<"AnaliseIa"> | Date | string;
};
export type AnaliseIaCreateInput = {
    id?: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
    checkin: Prisma.CheckinEmocionalCreateNestedOneWithoutAnaliseInput;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutAnaliseInput;
};
export type AnaliseIaUncheckedCreateInput = {
    id?: string;
    checkinId: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutAnaliseInput;
};
export type AnaliseIaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkin?: Prisma.CheckinEmocionalUpdateOneRequiredWithoutAnaliseNestedInput;
    consultas?: Prisma.ConsultaUpdateManyWithoutAnaliseNestedInput;
};
export type AnaliseIaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkinId?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutAnaliseNestedInput;
};
export type AnaliseIaCreateManyInput = {
    id?: string;
    checkinId: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
};
export type AnaliseIaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnaliseIaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkinId?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnaliseIaNullableScalarRelationFilter = {
    is?: Prisma.AnaliseIaWhereInput | null;
    isNot?: Prisma.AnaliseIaWhereInput | null;
};
export type AnaliseIaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkinId?: Prisma.SortOrder;
    respostaIa?: Prisma.SortOrder;
    conteudoPsicologico?: Prisma.SortOrder;
    geradoEm?: Prisma.SortOrder;
};
export type AnaliseIaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkinId?: Prisma.SortOrder;
    respostaIa?: Prisma.SortOrder;
    conteudoPsicologico?: Prisma.SortOrder;
    geradoEm?: Prisma.SortOrder;
};
export type AnaliseIaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkinId?: Prisma.SortOrder;
    respostaIa?: Prisma.SortOrder;
    conteudoPsicologico?: Prisma.SortOrder;
    geradoEm?: Prisma.SortOrder;
};
export type AnaliseIaCreateNestedOneWithoutCheckinInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutCheckinInput;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaUncheckedCreateNestedOneWithoutCheckinInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutCheckinInput;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaUpdateOneWithoutCheckinNestedInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutCheckinInput;
    upsert?: Prisma.AnaliseIaUpsertWithoutCheckinInput;
    disconnect?: Prisma.AnaliseIaWhereInput | boolean;
    delete?: Prisma.AnaliseIaWhereInput | boolean;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnaliseIaUpdateToOneWithWhereWithoutCheckinInput, Prisma.AnaliseIaUpdateWithoutCheckinInput>, Prisma.AnaliseIaUncheckedUpdateWithoutCheckinInput>;
};
export type AnaliseIaUncheckedUpdateOneWithoutCheckinNestedInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutCheckinInput;
    upsert?: Prisma.AnaliseIaUpsertWithoutCheckinInput;
    disconnect?: Prisma.AnaliseIaWhereInput | boolean;
    delete?: Prisma.AnaliseIaWhereInput | boolean;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnaliseIaUpdateToOneWithWhereWithoutCheckinInput, Prisma.AnaliseIaUpdateWithoutCheckinInput>, Prisma.AnaliseIaUncheckedUpdateWithoutCheckinInput>;
};
export type AnaliseIaCreateNestedOneWithoutConsultasInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutConsultasInput, Prisma.AnaliseIaUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutConsultasInput;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaUpdateOneWithoutConsultasNestedInput = {
    create?: Prisma.XOR<Prisma.AnaliseIaCreateWithoutConsultasInput, Prisma.AnaliseIaUncheckedCreateWithoutConsultasInput>;
    connectOrCreate?: Prisma.AnaliseIaCreateOrConnectWithoutConsultasInput;
    upsert?: Prisma.AnaliseIaUpsertWithoutConsultasInput;
    disconnect?: Prisma.AnaliseIaWhereInput | boolean;
    delete?: Prisma.AnaliseIaWhereInput | boolean;
    connect?: Prisma.AnaliseIaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnaliseIaUpdateToOneWithWhereWithoutConsultasInput, Prisma.AnaliseIaUpdateWithoutConsultasInput>, Prisma.AnaliseIaUncheckedUpdateWithoutConsultasInput>;
};
export type AnaliseIaCreateWithoutCheckinInput = {
    id?: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
    consultas?: Prisma.ConsultaCreateNestedManyWithoutAnaliseInput;
};
export type AnaliseIaUncheckedCreateWithoutCheckinInput = {
    id?: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
    consultas?: Prisma.ConsultaUncheckedCreateNestedManyWithoutAnaliseInput;
};
export type AnaliseIaCreateOrConnectWithoutCheckinInput = {
    where: Prisma.AnaliseIaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
};
export type AnaliseIaUpsertWithoutCheckinInput = {
    update: Prisma.XOR<Prisma.AnaliseIaUpdateWithoutCheckinInput, Prisma.AnaliseIaUncheckedUpdateWithoutCheckinInput>;
    create: Prisma.XOR<Prisma.AnaliseIaCreateWithoutCheckinInput, Prisma.AnaliseIaUncheckedCreateWithoutCheckinInput>;
    where?: Prisma.AnaliseIaWhereInput;
};
export type AnaliseIaUpdateToOneWithWhereWithoutCheckinInput = {
    where?: Prisma.AnaliseIaWhereInput;
    data: Prisma.XOR<Prisma.AnaliseIaUpdateWithoutCheckinInput, Prisma.AnaliseIaUncheckedUpdateWithoutCheckinInput>;
};
export type AnaliseIaUpdateWithoutCheckinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consultas?: Prisma.ConsultaUpdateManyWithoutAnaliseNestedInput;
};
export type AnaliseIaUncheckedUpdateWithoutCheckinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consultas?: Prisma.ConsultaUncheckedUpdateManyWithoutAnaliseNestedInput;
};
export type AnaliseIaCreateWithoutConsultasInput = {
    id?: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
    checkin: Prisma.CheckinEmocionalCreateNestedOneWithoutAnaliseInput;
};
export type AnaliseIaUncheckedCreateWithoutConsultasInput = {
    id?: string;
    checkinId: string;
    respostaIa?: string | null;
    conteudoPsicologico?: string | null;
    geradoEm?: Date | string;
};
export type AnaliseIaCreateOrConnectWithoutConsultasInput = {
    where: Prisma.AnaliseIaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnaliseIaCreateWithoutConsultasInput, Prisma.AnaliseIaUncheckedCreateWithoutConsultasInput>;
};
export type AnaliseIaUpsertWithoutConsultasInput = {
    update: Prisma.XOR<Prisma.AnaliseIaUpdateWithoutConsultasInput, Prisma.AnaliseIaUncheckedUpdateWithoutConsultasInput>;
    create: Prisma.XOR<Prisma.AnaliseIaCreateWithoutConsultasInput, Prisma.AnaliseIaUncheckedCreateWithoutConsultasInput>;
    where?: Prisma.AnaliseIaWhereInput;
};
export type AnaliseIaUpdateToOneWithWhereWithoutConsultasInput = {
    where?: Prisma.AnaliseIaWhereInput;
    data: Prisma.XOR<Prisma.AnaliseIaUpdateWithoutConsultasInput, Prisma.AnaliseIaUncheckedUpdateWithoutConsultasInput>;
};
export type AnaliseIaUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkin?: Prisma.CheckinEmocionalUpdateOneRequiredWithoutAnaliseNestedInput;
};
export type AnaliseIaUncheckedUpdateWithoutConsultasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkinId?: Prisma.StringFieldUpdateOperationsInput | string;
    respostaIa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudoPsicologico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    geradoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnaliseIaCountOutputType = {
    consultas: number;
};
export type AnaliseIaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultas?: boolean | AnaliseIaCountOutputTypeCountConsultasArgs;
};
export type AnaliseIaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaCountOutputTypeSelect<ExtArgs> | null;
};
export type AnaliseIaCountOutputTypeCountConsultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type AnaliseIaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkinId?: boolean;
    respostaIa?: boolean;
    conteudoPsicologico?: boolean;
    geradoEm?: boolean;
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
    consultas?: boolean | Prisma.AnaliseIa$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.AnaliseIaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analiseIa"]>;
export type AnaliseIaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkinId?: boolean;
    respostaIa?: boolean;
    conteudoPsicologico?: boolean;
    geradoEm?: boolean;
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analiseIa"]>;
export type AnaliseIaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkinId?: boolean;
    respostaIa?: boolean;
    conteudoPsicologico?: boolean;
    geradoEm?: boolean;
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analiseIa"]>;
export type AnaliseIaSelectScalar = {
    id?: boolean;
    checkinId?: boolean;
    respostaIa?: boolean;
    conteudoPsicologico?: boolean;
    geradoEm?: boolean;
};
export type AnaliseIaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "checkinId" | "respostaIa" | "conteudoPsicologico" | "geradoEm", ExtArgs["result"]["analiseIa"]>;
export type AnaliseIaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
    consultas?: boolean | Prisma.AnaliseIa$consultasArgs<ExtArgs>;
    _count?: boolean | Prisma.AnaliseIaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnaliseIaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
};
export type AnaliseIaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkin?: boolean | Prisma.CheckinEmocionalDefaultArgs<ExtArgs>;
};
export type $AnaliseIaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnaliseIa";
    objects: {
        checkin: Prisma.$CheckinEmocionalPayload<ExtArgs>;
        consultas: Prisma.$ConsultaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        checkinId: string;
        respostaIa: string | null;
        conteudoPsicologico: string | null;
        geradoEm: Date;
    }, ExtArgs["result"]["analiseIa"]>;
    composites: {};
};
export type AnaliseIaGetPayload<S extends boolean | null | undefined | AnaliseIaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload, S>;
export type AnaliseIaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnaliseIaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnaliseIaCountAggregateInputType | true;
};
export interface AnaliseIaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnaliseIa'];
        meta: {
            name: 'AnaliseIa';
        };
    };
    findUnique<T extends AnaliseIaFindUniqueArgs>(args: Prisma.SelectSubset<T, AnaliseIaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnaliseIaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnaliseIaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnaliseIaFindFirstArgs>(args?: Prisma.SelectSubset<T, AnaliseIaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnaliseIaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnaliseIaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnaliseIaFindManyArgs>(args?: Prisma.SelectSubset<T, AnaliseIaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnaliseIaCreateArgs>(args: Prisma.SelectSubset<T, AnaliseIaCreateArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnaliseIaCreateManyArgs>(args?: Prisma.SelectSubset<T, AnaliseIaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnaliseIaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnaliseIaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnaliseIaDeleteArgs>(args: Prisma.SelectSubset<T, AnaliseIaDeleteArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnaliseIaUpdateArgs>(args: Prisma.SelectSubset<T, AnaliseIaUpdateArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnaliseIaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnaliseIaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnaliseIaUpdateManyArgs>(args: Prisma.SelectSubset<T, AnaliseIaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnaliseIaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnaliseIaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnaliseIaUpsertArgs>(args: Prisma.SelectSubset<T, AnaliseIaUpsertArgs<ExtArgs>>): Prisma.Prisma__AnaliseIaClient<runtime.Types.Result.GetResult<Prisma.$AnaliseIaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnaliseIaCountArgs>(args?: Prisma.Subset<T, AnaliseIaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnaliseIaCountAggregateOutputType> : number>;
    aggregate<T extends AnaliseIaAggregateArgs>(args: Prisma.Subset<T, AnaliseIaAggregateArgs>): Prisma.PrismaPromise<GetAnaliseIaAggregateType<T>>;
    groupBy<T extends AnaliseIaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnaliseIaGroupByArgs['orderBy'];
    } : {
        orderBy?: AnaliseIaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnaliseIaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnaliseIaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnaliseIaFieldRefs;
}
export interface Prisma__AnaliseIaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    checkin<T extends Prisma.CheckinEmocionalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinEmocionalDefaultArgs<ExtArgs>>): Prisma.Prisma__CheckinEmocionalClient<runtime.Types.Result.GetResult<Prisma.$CheckinEmocionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    consultas<T extends Prisma.AnaliseIa$consultasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnaliseIa$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnaliseIaFieldRefs {
    readonly id: Prisma.FieldRef<"AnaliseIa", 'String'>;
    readonly checkinId: Prisma.FieldRef<"AnaliseIa", 'String'>;
    readonly respostaIa: Prisma.FieldRef<"AnaliseIa", 'String'>;
    readonly conteudoPsicologico: Prisma.FieldRef<"AnaliseIa", 'String'>;
    readonly geradoEm: Prisma.FieldRef<"AnaliseIa", 'DateTime'>;
}
export type AnaliseIaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where?: Prisma.AnaliseIaWhereInput;
    orderBy?: Prisma.AnaliseIaOrderByWithRelationInput | Prisma.AnaliseIaOrderByWithRelationInput[];
    cursor?: Prisma.AnaliseIaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnaliseIaScalarFieldEnum | Prisma.AnaliseIaScalarFieldEnum[];
};
export type AnaliseIaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where?: Prisma.AnaliseIaWhereInput;
    orderBy?: Prisma.AnaliseIaOrderByWithRelationInput | Prisma.AnaliseIaOrderByWithRelationInput[];
    cursor?: Prisma.AnaliseIaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnaliseIaScalarFieldEnum | Prisma.AnaliseIaScalarFieldEnum[];
};
export type AnaliseIaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where?: Prisma.AnaliseIaWhereInput;
    orderBy?: Prisma.AnaliseIaOrderByWithRelationInput | Prisma.AnaliseIaOrderByWithRelationInput[];
    cursor?: Prisma.AnaliseIaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnaliseIaScalarFieldEnum | Prisma.AnaliseIaScalarFieldEnum[];
};
export type AnaliseIaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnaliseIaCreateInput, Prisma.AnaliseIaUncheckedCreateInput>;
};
export type AnaliseIaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnaliseIaCreateManyInput | Prisma.AnaliseIaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnaliseIaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    data: Prisma.AnaliseIaCreateManyInput | Prisma.AnaliseIaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnaliseIaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnaliseIaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnaliseIaUpdateInput, Prisma.AnaliseIaUncheckedUpdateInput>;
    where: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnaliseIaUpdateManyMutationInput, Prisma.AnaliseIaUncheckedUpdateManyInput>;
    where?: Prisma.AnaliseIaWhereInput;
    limit?: number;
};
export type AnaliseIaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnaliseIaUpdateManyMutationInput, Prisma.AnaliseIaUncheckedUpdateManyInput>;
    where?: Prisma.AnaliseIaWhereInput;
    limit?: number;
    include?: Prisma.AnaliseIaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnaliseIaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where: Prisma.AnaliseIaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnaliseIaCreateInput, Prisma.AnaliseIaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnaliseIaUpdateInput, Prisma.AnaliseIaUncheckedUpdateInput>;
};
export type AnaliseIaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
    where: Prisma.AnaliseIaWhereUniqueInput;
};
export type AnaliseIaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnaliseIaWhereInput;
    limit?: number;
};
export type AnaliseIa$consultasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnaliseIaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnaliseIaSelect<ExtArgs> | null;
    omit?: Prisma.AnaliseIaOmit<ExtArgs> | null;
    include?: Prisma.AnaliseIaInclude<ExtArgs> | null;
};
