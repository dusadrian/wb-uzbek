export interface User {
    id: number;
    uuid: string;
    userType: string;
    username: string;
    password: string;
    institutionId: number;
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
