import axios, { AxiosResponse } from "axios";
import { IAsset } from "../interfaces/IAsset";

export default class AssetService {

    // public async getDisplayedAssets(page = 1, limit = 5): Promise<AssetItemModel[]> {
    //     const allAssets = (await this.getData())!.map(asset => new AssetItemModel(asset)); 
    
    //     const startIndex = (page - 1) * limit;
    //     const endIndex = startIndex + limit;
    
    //     if (startIndex >= allAssets.length) {
    //         return [];
    //     }
        
    //     return allAssets.slice(startIndex, endIndex);
    // }

    public async fetchAssets(): Promise<AxiosResponse<IAsset[]>> {
        return axios.get('http://localhost/landassets');
    }
}
