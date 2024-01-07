import React from 'react'
import classes from '../styles/SortInput.module.css'

const SortInput = () => {


    return (
        <label className={classes.label}>
            <input
                className={classes.input}
                placeholder="Поиск"
            />
        </label>
    )
}

export default SortInput
