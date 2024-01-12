import AssetService from "../services/AssetService";
import { IAsset } from "../interfaces/IAsset";
import {AxiosResponse} from "axios";

export class NewAssetPageViewModel {
    constructor(private _assetService: AssetService) {}

    public createAsset(asset: IAsset): Promise<AxiosResponse<IAsset>>  {
        return this._assetService.postAsset(asset);
    }
}