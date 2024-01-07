import React from 'react'
import classes from '../styles/Snackbar.module.css'

const Snackbar = () => {
  return (
    <div className={classes.snackbar}>
        <h3 className={classes.snackbar__title}>
            Добавление актива
        </h3>
        <div className={classes.snackbar__body}>
            Актив был успешно добавлен!
        </div>
        <button className={classes.snackbar__btn}>
            Закрыть
        </button>
    </div>
  )
}

export default Snackbar
