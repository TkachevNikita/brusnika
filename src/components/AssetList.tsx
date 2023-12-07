import React from 'react'
import { AssetItem } from './AssetItem'
import './styles/AssetList.css'

export const AssetList = () => {
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
            <AssetItem/>
            <AssetItem/>
            <AssetItem/>
            <AssetItem/>
            <AssetItem/>
            <AssetItem/>
        </tbody>
    </table>
  )
}
