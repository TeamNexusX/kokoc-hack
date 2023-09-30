export interface User {
    id: string;
    login: string;
    name: string;
}

export interface UserSchema {
    authData?: User;
    _inited?: boolean;
}
