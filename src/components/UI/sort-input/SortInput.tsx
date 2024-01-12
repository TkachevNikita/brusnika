import React from 'react'
import classes from '../styles/SortInput.module.css'

interface SortInputProps {
    filter: React.Dispatch<React.SetStateAction<string>>
}

const SortInput = ({filter}: SortInputProps) => {
    return (
        <label className={classes.label}>
            <input
                onChange={(e) => filter(e.target.value)}
                className={classes.input}
                placeholder="Поиск"
            />
        </label>
    )
}

export default SortInput
