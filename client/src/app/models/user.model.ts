export interface User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    token: string;
}

export interface UserFormValues {
    firstName?: string;
    lastName?: string;
    email: string;
    username?: string;
    password: string;
}