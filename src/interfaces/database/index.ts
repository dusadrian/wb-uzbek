export interface User {
    id: number;
    uuid: string;
    userType: string;
    username: string;
    password: string;
}

export interface DatabaseInterface {
    checkUser: (username: string, password: string) => Promise<Array<User>>;
}
