export interface LoginSchema {
    login: string;
    password: string;
    firstname: string;
    lastname: string;
    sex: string;
    isLoading: boolean;
    error?: string;
}
