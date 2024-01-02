import React from 'react'
import '../styles/Select.css'

const Select = () => {
  return (
    <select className="select">
        <option value="0">Тип актива</option>
        <option value="1">Жилищный</option>
        <option value="2">Офисный</option>
    </select>
  )
}

export default Select
