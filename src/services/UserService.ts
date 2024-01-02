import { IUser } from "../interfaces/IUser";

export class UserService {
    private _user!: IUser;

    public get user(): IUser {
        return this._user;
    }

    public set user(user: IUser) {
        this._user = user;
    }
}