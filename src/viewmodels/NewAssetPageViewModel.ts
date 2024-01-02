import AssetService from "../services/AssetService";
import { IAsset } from "../interfaces/IAsset";

export class NewAssetPageViewModel {
    constructor(private _assetService: AssetService) {}

    public createAsset(asset: IAsset) {
        this._assetService.postAsset(asset);
    }
}