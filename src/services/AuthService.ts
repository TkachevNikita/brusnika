import axios, { AxiosResponse } from "axios";
import { IUser } from "../interfaces/IUser";
import $api from "../http";

export default class AuthService {

    static async login(email: string, password: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>('/login', {email, password});
    }
}