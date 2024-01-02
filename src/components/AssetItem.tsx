import React, { MouseEventHandler, SetStateAction } from 'react'
import './styles/AssetItem.css'
import AssetItemModel from '../models/AssetItemModel'
import { IAsset } from '../interfaces/IAsset';

interface AssetItemProps {
    viewModel: AssetItemModel
    onClick: (asset: AssetItemModel) => void;
    currentAsset: React.Dispatch<SetStateAction<AssetItemModel | undefined>>
}

export const AssetItem = ({viewModel, onClick}: AssetItemProps) => {
  return (
    <tr onClick={() => onClick(viewModel)}>
        <td>{viewModel.id}</td>
        <td>{viewModel.owner}</td>
        <td>{viewModel.fullname}</td>
        <td>{viewModel.type}</td>
        <td>{viewModel.dealStage}</td>
    </tr>
  )
}
