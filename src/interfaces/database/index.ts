export interface User {
    id: number;
    uuid: string;
    username: string;
    password: string;
    institution_code: string;
    institution_name: string;
    name: string;
    patronymics: string;
    surname: string;
    job_title: string;
    profession: string;
    phone: string;
    email: string;
    role_name: string;
    region_code: string;
    role_code: string;
    service_type_code: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q6: string;
    q5a: string;
    q5: string;
    q7: string;
    q8: string;
}

export interface Institution {
    id: number;
    uuid: string;
    code: string;
    type: string;
    name: string;
    address: string;
    region: string;
    district: string;
    settlement: string;
    settlement_type: number;
    capacity: number;
    children: number;
    leavers: number;
    employees: number;
    inson: number;
}

export interface INSON {
    id: number;
    uuid: string;
    code: string;
    name: string;
    type: string;
    address: string;
    region: string;
    district: string;
    pf: number; // number of patronat families
    fth: number; // number of family-type homes
    children_fth: number;
    leavers_fth: number;
    services: string;
}

export interface UpdateInsonObjInterface {
    institution_id: string;
    institutionUUID: string;
    auth_code: string;
    services: {
        id: number;
        uuid: string;
        children: string;
        leavers: string;
    }[]
    pf: string;
    children_fth: string;
    leavers_fth: string;
}

export interface UpdateServiceObjInterface {
    institution_id: string;
    institutionUUID: string;
    auth_code: string;
    children: string;
    employees: string;
    leavers: string;
}

export interface DatabaseInterface {
    checkUser: (username: string, password: string) => Promise<Array<User>>;
}

export interface StatusInterface {
    status: string;
    total: number
}

export interface DataExportInterface {
    id: string;
    uuid: string;
    user_uuid: string;
    region_code: string;
    institution_type: string;
    status: string;
    created_at: string;
    updated_at: string;
    instrument_id: number;
    variable: string;
    value: string;
}

export interface AuthCode {
    institution_code: string;
    code: string;
    used: boolean;
}