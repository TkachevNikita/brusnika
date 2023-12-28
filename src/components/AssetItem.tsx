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
        <td>{viewModel.name}</td>
        <td>{viewModel.type}</td>
        <td>{viewModel.stage}</td>
    </tr>
  )
}
