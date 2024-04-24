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
    name: string;
    code?: string;
    address?: string;
    atuCode?: string;
    region?: string;
    district?: string;
    type?: string;
    staffCount: number;
    childrenCount: number;
    youngAdultCount: number;
    childrenHomeCount: number;
    patronatCount: number;
}

export interface DatabaseInterface {
    checkUser: (username: string, password: string) => Promise<Array<User>>;
}
