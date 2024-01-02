import React from 'react'
import './../styles/MyInput.css'
import { ChangeHandler, RefCallBack, UseFormRegister } from 'react-hook-form';
import { IAsset } from '../../../interfaces/IAsset';

interface MyInputProps {
    placeholder?: string;
    register?: UseFormRegister<IAsset>;
    controlName: "id" | "owner" | "fullname" | "type" | "dealStage" | "objectName"
}

export const Input = ({placeholder, register, controlName}: MyInputProps) => {

  return (
    <input 
      className='MyInput' 
      placeholder={placeholder}
      {...register? register(controlName) : null}
    />
  )
}
