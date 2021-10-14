export interface UserAttributes {
    website: string;
    email_verified: boolean;
    phone_number_verified: boolean;
    name: string;
    phone_number: string;
    email: string;
}

export interface User {
    username: string;
    attributes: UserAttributes;
}