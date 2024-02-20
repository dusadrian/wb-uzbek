export interface User {
    id: number;
    uuid: string;
    user_type: string;
    username: string;
    password: string;
    institution_id: number;
    first_name: string;
    patronymics: string;
    last_name: string;
    position: string;
    profession: string;
    phone: string;
    email: string;
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
