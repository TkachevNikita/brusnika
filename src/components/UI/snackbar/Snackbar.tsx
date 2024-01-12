import React, {ReactNode} from 'react'
import '../styles/Snackbar.css'

interface SnackbarProps {
    type: string;
    show: boolean;
    children: ReactNode;
    showState: React.Dispatch<React.SetStateAction<boolean>>
}

const Snackbar = ({ type, show, children, showState }: SnackbarProps) => {
    const snackbarClass = show ? 'snackbar-show' : '';

    const handleClose = () => {
        showState(false);
    }

    return (
        <div className={type === 'error' ? `snackbar error ${snackbarClass}` : `snackbar success ${snackbarClass}`}>
            <h3 className='snackbar__title'>
                Добавление актива
            </h3>
            <div className='snackbar__body'>
                {children}
            </div>
            <button onClick={handleClose} className='snackbar__btn'>
                Закрыть
            </button>
        </div>
    )
}

export default Snackbar;
