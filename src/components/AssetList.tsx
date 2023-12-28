import React, { useState, useEffect } from 'react'
import { AssetItem } from './AssetItem'
import './styles/AssetList.css'
import AssetListViewModel from '../viewmodels/AssetListViewModel'
import AssetItemModel from '../models/AssetItemModel'

interface AssetListProps {
    assets: AssetItemModel[]
}

export const AssetList = ({assets}: AssetListProps) => {

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
            {assets.length > 0 ? assets.map(asset => <AssetItem key={asset.id} viewModel={asset}/>) : 'as'}
        </tbody>
    </table>
  )
}
