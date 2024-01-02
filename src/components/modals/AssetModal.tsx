import React, { ReactNode } from 'react'
import './styles/AssetModal.css'

interface AssetModalProps {
    children?: ReactNode
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const AssetModal = ({children, visible, setVisible}: AssetModalProps) => {


  return (
    <div className={visible ? 'modal modal-active' : 'modal'}>
        <div className="modal__content">
            <button onClick={() => setVisible(false)} className="close">
                &#215;
            </button>
            {children}
        </div>
    </div>
  )
}

export default AssetModal
