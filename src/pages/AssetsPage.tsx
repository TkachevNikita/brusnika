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
import Pagination from "../components/Pagination";

const AssetsPage = () => {
  const assetService = useMemo(() => new AssetService(), []);
  const assetListViewModel = useMemo(() => new AssetListViewModel(assetService), [assetService]);
  const [currentAssetList, setCurrentAssetList] = useState<AssetItemModel[]>([]);
  const {currentPage, prevPage, nextPage, goToPage, paginatedItems, getTotalPages } = usePagination(currentAssetList, 5);
  const [filterOwner, setFilterOwner] = useState('');
  const [modal, setModal] = useState(false);
  const [currentAsset, setCurrentAsset] = useState<AssetItemModel>();


  useEffect(() => {
    assetListViewModel.loadAssetDisplayedItems(filterOwner).then(() => {
      setCurrentAssetList(assetListViewModel.assetDisplayedItems);
    });
  }, [assetListViewModel, filterOwner]);

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
            <h2 className="assets__title page-title">
                Активы
            </h2>
            <div className="assets__sort">
                <SortInput filter={setFilterOwner}/>
                <Select/>
            </div>
        </div>
        <AssetList setAsset={setCurrentAsset} setModal={setModal} assets={paginatedItems}/>
        <Pagination
            getTotalPages={getTotalPages}
            totalItems={currentAssetList.length}
            goToPage={goToPage}
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}/>
    </div>
  )
}

export default observer(AssetsPage)