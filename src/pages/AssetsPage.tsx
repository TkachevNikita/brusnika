import React, { useEffect, useMemo, useState } from 'react'
import { AssetList } from '../components/AssetList'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetService from '../services/AssetService';
import './styles/AssetsPage.css';
import AssetItemModel from '../models/AssetItemModel';
import usePagination from '../hooks/usePagination';
import SortInput from '../components/UI/sort-input/SortInput';
import Select from '../components/UI/select/Select';
import { UserService } from '../services/UserService';
import AssetModal from '../components/modals/AssetModal';
import { Input } from '../components/UI/input/Input';
import { useForm } from 'react-hook-form';
import { IAsset } from '../interfaces/IAsset';
import { AssetDealStage } from '../enums/assetDealStage.enum';

export const AssetsPage = () => {
  const assetService = useMemo(() => new AssetService(), []);
  const assetListViewModel = useMemo(() => new AssetListViewModel(assetService), [assetService]);
  const [currentAssetList, setCurrentAssetList] = useState<AssetItemModel[]>([]);
  const [ownerFilter, setOwnerFilter] = useState('');
  const { currentPage, totalPages, goToPage, paginatedItems } = usePagination(currentAssetList, 10);
  const [modal, setModal] = useState(false);
  const [currentAsset, setCurrentAsset] = useState<AssetItemModel>();

  useEffect(() => {
    assetListViewModel.loadAssetDisplayedItems().then(() => {
      setCurrentAssetList(assetListViewModel.assetDisplayedItems);
    });
  }, [assetListViewModel]);

  return (
    <div className='assets'>
      {
        currentAsset ? 
        <AssetModal
          visible={modal}
          setVisible={setModal}
        >
            <form style={{width: '100%'}}>
                  <div className="form__group">
                      <label>Собственник</label>
                      <Input
                          placeholder={currentAsset!.owner}
                          controlName="owner" 
                      />
                  </div>
                  <div className="form__group">
                      <label>Фамилия Имя Отчество</label>
                      <Input
                          placeholder={currentAsset!.fullname}
                          controlName="fullname" 
                      />
                  </div>
                  <div className="form__group">
                      <label>Тип</label>
                      <Input
                          placeholder={String(currentAsset!.type)}
                          controlName="type" 
                      />
                  </div>
                  <div className="form__group">
                      <label>Этап сделки</label>
                      <Input
                          placeholder={String(currentAsset!.dealStage)}
                          controlName="dealStage" 
                      />
                  </div>
                  <div className="form__group">
                      <label>Строение</label>
                      <Input
                          placeholder={currentAsset!.objectName}
                          controlName="objectName" 
                      />
                  </div>
                  <div className="form__buttons">
                    {
                      currentAsset.dealStage !== AssetDealStage.analysis && localStorage.getItem('role') !== 'Administrator' ?
                      <></>
                        :
                      <div className="buttons" style={{display: 'flex', gap: '20px'}}>
                        <input type='button' value={"Начать"} onClick={() => {assetService.putAsset(currentAsset, currentAsset.id!); window.location.replace('http://localhost:3000/assets');}} className='form__button start'/>
                        <input type='button' value={'Завершить'} className="form__button" onClick={() => {assetService.endAsset(currentAsset, currentAsset.id!);}}/>
                      </div>
                    }
                  </div>
              </form>
        </AssetModal>
        :
        <></>
      }
        <div className="assets__header">
            <h2 className="assets__title">
                Активы
            </h2>
            <div className="assets__sort">
                <SortInput/>
                <Select/>
            </div>
        </div>
        {currentAssetList ? <AssetList setAsset={setCurrentAsset} setModal={setModal} assets={paginatedItems}/> : <div>Загрузка...</div>}
        
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
