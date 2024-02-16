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
    region?: string;
    district?: string;
    address?: string;
    phone?: string;
    email?: string;
    contactPerson?: string;
    contactPersonPhone?: string;
    contactPersonEmail?: string;
    staffCount: number;
    childrenCount: number;
    youngAdultCount: number;
    childrenHomeCount: number;
    patronatCount: number;
}

export interface DatabaseInterface {
    checkUser: (username: string, password: string) => Promise<Array<User>>;
}
