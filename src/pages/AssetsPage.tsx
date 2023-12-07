import React from 'react'
import { AssetList } from '../components/AssetList'

export const AssetsPage = () => {
  return (
    <div className='assets'>
        <h2 className="assets__title">
            Активы
        </h2>
        <AssetList/>
    </div>
  )
}
