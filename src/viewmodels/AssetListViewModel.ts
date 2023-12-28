import AssetItemModel from "../models/AssetItemModel";
import AssetService from "../services/AssetService";

export default class AssetListViewModel {
    public assetDisplayedItems: Array<AssetItemModel> = [];

    constructor(private _assetService: AssetService) {}

    public async loadAssetDisplayedItems(): Promise<void> {
        const assets = await this._assetService.fetchAssets();
        this.assetDisplayedItems = assets.data.map(asset => new AssetItemModel(asset));
    }
}
