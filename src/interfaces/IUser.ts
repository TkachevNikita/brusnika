import { IUserRole } from "./IUserRole";

export interface IUser {
    email: string;
    password: string;
    fullname: string;
    token: string;
    roles: IUserRole[]
}