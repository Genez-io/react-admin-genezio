import { Identifier, DataProvider } from "react-admin";

let cache:any={};

const simpleHashCode = (s: string):number => {
    let hash:number = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) + i%10007;
        hash = (hash+c)%1000000007;
    }
    return hash;
}

const request = async(gsdk: any, fName: string, resource: string, params: any) => {
    const paramsHash:number = simpleHashCode(JSON.stringify(params));

    if (fName.startsWith("get")) {
        if (cache[resource] === undefined) {
            cache[resource] = {};
        }
        if (cache[resource][fName] === undefined) {
            cache[resource][fName] = {};
        }
        if (cache[resource][fName][paramsHash] !== undefined) {
            return cache[resource][fName][paramsHash];
        }
    } else {
        delete cache[resource];
    }

    const gclass = gsdk[resource as keyof typeof gsdk] ?? undefined;
    if (gclass) {
        const gfunction = gclass[fName as keyof typeof gclass] ?? undefined;

        if (gfunction) {
            const ret = await gfunction(params);
            if (fName.startsWith("get")) {
                cache[resource][fName][paramsHash] = ret;
            }
            return ret;
        } else {
            throw new Error(`Class "${resource}" does not expose a function called "${fName}" in your server implememtaion on Genezio`);
        }
    } else {
        throw new Error(`Class "${resource}" is not exposed in your server implememtaion on Genezio`);
    }
};

interface GetListParams {
    pagination: { page: number, perPage: number };
    sort: { field: string, order: 'ASC' | 'DESC' };
    filter: any;
    meta?: any;
}

interface GetListResult {
    data: Record<string, any>[];
    total?: number;
    // if using partial pagination
    pageInfo?: {
        hasNextPage?: boolean;
        hasPreviousPage?: boolean;
    };
}

interface GetOneParams {
    id: Identifier;
    meta?: any;
}
interface GetOneResult {
    data: Record<string, any>;
}

interface CreateParams {
    data: Partial<Record<string, any>>;
    meta?: any;
}

interface CreateResult {
    data: Record<string, any>;
}

interface UpdateParams {
    id: Identifier;
    data: Partial<Record<string, any>>;
    previousData: Record<string, any>;
    meta?: any;
}
interface UpdateResult {
    data: Record<string, any>;
}

interface DeleteParams {
    id: Identifier;
    previousData?: Record<string, any>;
    meta?: any;
}
interface DeleteResult {
    data: Record<string, any>;
}

interface DeleteManyParams {
    ids: Identifier[];
    meta?: any;
}
interface DeleteManyResult {
    data: Identifier[];
}

interface GetManyParams {
    ids: Identifier[];
    meta?: any;
}
interface GetManyResult {
    data: Record<string, any>[];
}

interface GetManyReferenceParams {
    target: string;
    id: Identifier;
    pagination: { page: number, perPage: number };
    sort: { field: string, order: 'ASC' | 'DESC' };
    filter: any;
    meta?: any;
}
interface GetManyReferenceResult {
    data: Record<string, any>[];
    total?: number;
    // if using partial pagination
    pageInfo?: {
        hasNextPage?: boolean;
        hasPreviousPage?: boolean;
    };
}

interface UpdateManyParams {
    ids: Identifier[];
    data: Partial<Record<string, any>>;
    meta?: any;
}
interface UpdateManyResult {
    data: Identifier[];
}


export default (gsdk: any) => {
    const dataProvider: DataProvider = {
        getList: async(resource: string, params: GetListParams)/*: Promise<GetListResult>*/ => {
            return request(gsdk, "getList", resource, params);
        },
        getOne: (resource: string, params: GetOneParams)/*: Promise<GetOneResult | any>*/ => {
            return request(gsdk, "getOne", resource, params.id);
        },
        create: (resource: string, params: CreateParams)/*: Promise<CreateResult>*/ => {
            return request(gsdk, "create", resource, params.data);
        },
        update: (resource: string, params: UpdateParams)/*: Promise<UpdateResult*/ => {
            return request(gsdk, "update", resource, params.data);
        },
        delete: (resource: string, params: DeleteParams)/*: Promise<DeleteResult>*/ => {
            return request(gsdk, "deleteOne", resource, params.id);
        },
        deleteMany: (resource: string, params: DeleteManyParams)/*: Promise<DeleteManyResult>*/ => {
            return request(gsdk, "deleteMany", resource, params.ids);
        },
        getMany: async (resource: string, params: GetManyParams)/*: Promise<GetManyResult>*/ => {
            return request(gsdk, "getMany", resource, params.ids);
        },
        getManyReference: async(resource: string, params: GetManyReferenceParams)/*: Promise<GetManyReferenceResult>*/ => {
            return request(gsdk, "getManyReference", resource, params);
        },
        updateMany: (resource: string, params: UpdateManyParams): Promise<UpdateManyResult> => {
            return request(gsdk, "updateMany", resource, params.data);
        }
    };
    
    return dataProvider;
}
