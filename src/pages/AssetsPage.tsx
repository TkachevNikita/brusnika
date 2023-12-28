import React, { useEffect, useMemo, useState } from 'react'
import { AssetList } from '../components/AssetList'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetService from '../services/AssetService';
import { getPagesNumbers } from '../utils/utils';
import './styles/AssetsPage.css';
import AssetItemModel from '../models/AssetItemModel';
import usePagination from '../hooks/usePagination';

export const AssetsPage = () => {
  const assetService = useMemo(() => new AssetService(), []);
  const assetListViewModel = useMemo(() => new AssetListViewModel(assetService), [assetService]);
  const [currentAssetList, setCurrentAssetList] = useState<AssetItemModel[]>([]);
  const { currentPage, totalPages, goToPage, paginatedItems } = usePagination(currentAssetList, 1);

  useEffect(() => {
    assetListViewModel.loadAssetDisplayedItems().then(() => {
      setCurrentAssetList(assetListViewModel.assetDisplayedItems);
    });
  }, [assetListViewModel]);

  return (
    <div className='assets'>
        <h2 className="assets__title">
            Активы
        </h2>
        {currentAssetList ? <AssetList assets={paginatedItems}/> : <div>Загрузка...</div>}
        
        <div className="assets__pagination">
          {getPagesNumbers().map(number => 
            <button 
              key={number} 
              onClick={() => goToPage(number)} 
              className={currentPage === number ? "assets__pagination-btn-active assets__pagination-btn" : "assets__pagination-btn"}
            >
              {number}
            </button>
          )}
        </div>
    </div>
  )
}
