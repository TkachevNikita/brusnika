import AssetItemModel from "../models/AssetItemModel";
import AssetService from "../services/AssetService";

export default class AssetListViewModel {
    public assetDisplayedItems: Array<AssetItemModel> = [];

    constructor(private _assetService: AssetService) {}

    public async loadAssetDisplayedItems(filter?: string): Promise<void> {
        const assets = await this._assetService.fetchAllAssets(filter);
        this.assetDisplayedItems = assets.data.map(asset => new AssetItemModel(asset));
    }
}
