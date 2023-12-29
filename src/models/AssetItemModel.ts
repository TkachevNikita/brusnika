import { IAsset } from "../interfaces/IAsset";

export default class AssetItemModel {
    public readonly fullname: string;
    public id?: number;
    public readonly owner: string;
    public readonly type: number;
    public readonly dealStage: number;
    public readonly objectName: string;

    constructor(asset: IAsset) {
        this.fullname = asset.fullname;
        this.id = asset.id;
        this.owner = asset.owner;
        this.type = asset.type;
        this.dealStage = asset.dealStage;
        this.objectName = asset.objectName;
    }
}