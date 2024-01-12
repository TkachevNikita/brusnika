import axios, { AxiosResponse } from "axios";
import { IAsset } from "../interfaces/IAsset";
import AssetItemModel from "../models/AssetItemModel";
import $api from "../http";

export default class AssetService {
    public async fetchAllAssets(filter?: string): Promise<AxiosResponse<IAsset[]>> {
        let baseUrl = '/landassets'

        if (filter) {
            baseUrl += `?owner=${filter}`
        }
        return $api.get<IAsset[]>(`${baseUrl}`);
    }

    public postAsset(asset: IAsset): Promise<AxiosResponse<IAsset>> {
        delete asset['id']
        console.log(asset);
        return $api.post('/landassets', asset);
    }

    public putAsset(asset: AssetItemModel, current_id: number): void {
        $api.put(`/landassets?id=${current_id}`, {owner: asset.owner, fullName: asset.fullname, type: 0, dealStage: 2, objectName: asset.objectName});
    }

    public endAsset(asset: AssetItemModel, current_id: number): void {
        $api.put(`/landassets?id=${current_id}`, {owner: asset.owner, fullName: asset.fullname, type: 0, dealStage: 3, objectName: asset.objectName});
    }
}
