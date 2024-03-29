import { makeAutoObservable } from "mobx";
import { IUser } from "../interfaces/IUser";
import AuthService from "../services/AuthService";

export default class Store {
    public user = {} as IUser
    public isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data);
        } catch (e) {
            throw e;
        }
    }

    public logout(): void {
        localStorage.removeItem('token');
    }
}