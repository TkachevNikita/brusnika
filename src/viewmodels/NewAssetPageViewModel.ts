import { SubmitHandler } from "react-hook-form";
import AssetService from "../services/AssetService";
import { IAsset } from "../interfaces/IAsset";
import AssetItemModel from "../models/AssetItemModel";

export class NewAssetPageViewModel {
    constructor(private _assetService: AssetService) {}

    public createAsset(asset: IAsset) {
        this._assetService.postAsset(new AssetItemModel(asset));
    }
}