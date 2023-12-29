import React, { useEffect, useMemo, useState } from 'react'
import { AssetList } from '../components/AssetList'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetService from '../services/AssetService';
import './styles/AssetsPage.css';
import AssetItemModel from '../models/AssetItemModel';
import usePagination from '../hooks/usePagination';
import SortInput from '../components/UI/sort-input/SortInput';
import Select from '../components/UI/select/Select';

export const AssetsPage = () => {
  const assetService = useMemo(() => new AssetService(), []);
  const assetListViewModel = useMemo(() => new AssetListViewModel(assetService), [assetService]);
  const [currentAssetList, setCurrentAssetList] = useState<AssetItemModel[]>([]);
  const { currentPage, totalPages, goToPage, paginatedItems } = usePagination(currentAssetList, 10);

  useEffect(() => {
    assetListViewModel.loadAssetDisplayedItems().then(() => {
      setCurrentAssetList(assetListViewModel.assetDisplayedItems);
      console.log(totalPages);
    });
  }, [assetListViewModel]);

  return (
    <div className='assets'>
        <div className="assets__header">
            <h2 className="assets__title">
                Активы
            </h2>
            <div className="assets__sort">
                <SortInput/>
                <Select/>
            </div>
        </div>
        {currentAssetList ? <AssetList assets={paginatedItems}/> : <div>Загрузка...</div>}
        
        <div className="assets__pagination">
          {[1, 2, 3].map(number => 
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
