export interface Profile {
    username: string;
    firstName: string;
    lastName: string;
    resume?: string;
    bio?: string;
    documents?: Document[];
}

export interface Document {
    id: string;
    originalFileName: string;
    url: string;
    isMain: boolean;
}