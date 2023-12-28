import { assets } from "../mocks/AssetsMockData"

export const getPageCount = (limit: number): number => {
    return Math.ceil(assets.length / limit);    
}

export const getPagesNumbers = (): number[] => {
    const pagesNumbers = []
    
    for (let i = 1; i <= getPageCount(5); i++) {
        pagesNumbers.push(i);
    }

    return pagesNumbers;
}