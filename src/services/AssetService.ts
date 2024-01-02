import axios, { AxiosResponse } from "axios";
import { IAsset } from "../interfaces/IAsset";
import AssetItemModel from "../models/AssetItemModel";
import $api from "../http";

export default class AssetService {
    public async fetchAllAssets(): Promise<AxiosResponse<IAsset[]>> {
        return $api.get<IAsset[]>('http://localhost/landassets', {});
    }

    public postAsset(asset: IAsset): void {
        delete asset['id']
        console.log(asset);
        $api.post('http://localhost/landassets', asset);
    }

    public putAsset(asset: AssetItemModel, current_id: number): void {
        $api.put(`http://localhost/landassets?id=${current_id}`, {owner: asset.owner, fullName: asset.fullname, type: 0, dealStage: 2, objectName: asset.objectName});
    }

    public endAsset(asset: AssetItemModel, current_id: number): void {
        $api.put(`http://localhost/landassets?id=${current_id}`, {owner: asset.owner, fullName: asset.fullname, type: 0, dealStage: 3, objectName: asset.objectName});
    }
}
