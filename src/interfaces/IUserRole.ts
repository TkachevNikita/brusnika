export interface IUserRole {
    id: string;
    name: string;
    normalizedName: string;
    concurrencyStamp: string | null;
}