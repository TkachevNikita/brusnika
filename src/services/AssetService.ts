import axios, { AxiosResponse } from "axios";
import { IAsset } from "../interfaces/IAsset";
import AssetItemModel from "../models/AssetItemModel";

export default class AssetService {
    public async fetchAllAssets(): Promise<AxiosResponse<IAsset[]>> {
        return axios.get('http://localhost/landassets');
    }

    public postAsset(asset: AssetItemModel): void {
        delete asset['id']
        axios.post('http://localhost/landassets', asset);
    }
}
