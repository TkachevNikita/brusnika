import React from 'react'
import './styles/AssetItem.css'
import AssetItemModel from '../models/AssetItemModel'

interface AssetItemProps {
    viewModel: AssetItemModel
}

export const AssetItem = ({viewModel}: AssetItemProps) => {
  return (
    <tr>
        <td>{viewModel.id}</td>
        <td>{viewModel.owner}</td>
        <td>{viewModel.fullname}</td>
        <td>{viewModel.type}</td>
        <td>{viewModel.dealStage}</td>
    </tr>
  )
}
