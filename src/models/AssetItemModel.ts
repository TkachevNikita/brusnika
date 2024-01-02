import { AssetDealStage } from "../enums/assetDealStage.enum";
import { AssetType } from "../enums/assetType.enum";
import { IAsset } from "../interfaces/IAsset";

export default class AssetItemModel {
    public readonly fullname: string;
    public id?: number;
    public readonly owner: string;
    public readonly type: AssetType;
    public readonly dealStage: AssetDealStage;
    public readonly objectName: string;

    constructor(asset: IAsset) {
        this.fullname = asset.fullname;
        this.id = asset.id;
        this.owner = asset.owner;
        this.type = this.getAssetType(asset.type);
        this.dealStage = this.getDealStage(asset.dealStage);
        this.objectName = asset.objectName;
    }

    public getAssetType(type: number): AssetType {
        switch(type) {
            case 0:
                return AssetType.housing
            default:
                return AssetType.housing
        }
    }

    public getDealStage(dealStage: number): AssetDealStage {
        switch(dealStage) {
            case 0:
                return AssetDealStage.analysis
            case 1:
                return AssetDealStage.coordination
            case 2:
                return AssetDealStage.negotiation

            case 3:
                return AssetDealStage.end

            default:
                return AssetDealStage.analysis
        }
    }
}