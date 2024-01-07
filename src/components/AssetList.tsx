import React, { useState, useEffect, SetStateAction } from 'react'
import { AssetItem } from './AssetItem'
import './styles/AssetList.css'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetItemModel from '../models/AssetItemModel'
import { IAsset } from '../interfaces/IAsset'
import Loader from "./UI/loader/Loader";

interface AssetListProps {
    assets: AssetItemModel[],
    setModal: React.Dispatch<SetStateAction<boolean>>,
    setAsset: React.Dispatch<SetStateAction<AssetItemModel | undefined>>
}

export const AssetList = ({assets, setModal, setAsset}: AssetListProps) => {

    const handleModal = (asset: AssetItemModel): void => {
        setAsset(asset);
        setModal(true);
    }

  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Собственник</th>
                <th>ФИО</th>
                <th>Тип</th>
                <th>Этап сделки</th>
            </tr>
        </thead>
        <tbody>
            {
                assets.length > 0 ?
                assets.map(asset => <AssetItem currentAsset={setAsset} onClick={() => handleModal(asset)} key={asset.id} viewModel={asset}/>)
                :
                <Loader/>
            }
        </tbody>
    </table>
  )
}
