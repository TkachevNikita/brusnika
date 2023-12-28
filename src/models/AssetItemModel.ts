import { IAsset } from "../interfaces/IAsset";

export default class AssetItemModel {
    public readonly name: string;
    public readonly id: number;
    public readonly owner: string;
    public readonly type: string;
    public readonly stage: string;

    constructor(asset: IAsset) {
        this.name = asset.name;
        this.id = asset.id;
        this.owner = asset.owner;
        this.type = asset.type;
        this.stage = asset.stage;
    }
}