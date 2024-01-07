import React from 'react'
import classes from '../styles/Select.module.css'

const Select = () => {
  return (
    <select className={classes.select}>
        <option value="0">Тип актива</option>
        <option value="1">Жилищный</option>
        <option value="2">Офисный</option>
    </select>
  )
}

export default Select
