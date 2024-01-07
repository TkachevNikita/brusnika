import React, {useEffect, useMemo, useState} from 'react'
import { AssetList } from '../components/AssetList'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetService from '../services/AssetService';
import './styles/AssetsPage.css';
import AssetItemModel from '../models/AssetItemModel';
import usePagination from '../hooks/usePagination';
import SortInput from '../components/UI/sort-input/SortInput';
import Select from '../components/UI/select/Select';
import AssetModal from '../components/modals/AssetModal';
import { observer } from "mobx-react-lite";
import AssetForm from "../components/forms/asset-form/AssetForm";
import Loader from "../components/UI/loader/Loader";

const AssetsPage = () => {
  const assetService = useMemo(() => new AssetService(), []);
  const assetListViewModel = useMemo(() => new AssetListViewModel(assetService), [assetService]);
  const [currentAssetList, setCurrentAssetList] = useState<AssetItemModel[]>([]);
  const { currentPage, totalPages, goToPage, paginatedItems } = usePagination(currentAssetList, 10);
  const [filterOwner, setFilterOwner] = useState();
  const [modal, setModal] = useState(false);
  const [currentAsset, setCurrentAsset] = useState<AssetItemModel>();


  useEffect(() => {
    assetListViewModel.loadAssetDisplayedItems(filterOwner).then(() => {
      setCurrentAssetList(assetListViewModel.assetDisplayedItems);
    });
  }, [assetListViewModel]);

  return (
    <div className='assets page'>
        <AssetModal
          visible={modal}
          setVisible={setModal}
        >

            {
                currentAsset ? <AssetForm currentAsset={currentAsset} assetService={assetService}/> : <></>
            }
        </AssetModal>
        <div className="assets__header">
            <h2 className="assets__title">
                Активы
            </h2>
            <div className="assets__sort">
                <SortInput/>
                <Select/>
            </div>
        </div>
        <AssetList setAsset={setCurrentAsset} setModal={setModal} assets={paginatedItems}/>
        <div className="assets__pagination">
          {[1].map(number => 
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

export default observer(AssetsPage)