import React from 'react'
import '../styles/Snackbar.css'

const Snackbar = () => {
  return (
    <div className='snackbar'>
        <h3 className="snackbar__title">
            Добавление актива
        </h3>
        <div className="snackbar__body">
            Актив был успешно добавлен!
        </div>
        <button className='snackbar__btn'>
            Закрыть
        </button>
    </div>
  )
}

export default Snackbar
