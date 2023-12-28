import React from 'react'
import './../styles/MyInput.css'

interface MyInputProps {
    placeholder?: string;
}

export const MyInput = ({placeholder}: MyInputProps) => {
  return (
    <input placeholder={placeholder}></input>
  )
}
