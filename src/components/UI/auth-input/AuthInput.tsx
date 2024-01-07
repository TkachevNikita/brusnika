import React from 'react'
import classes from '../styles/AuthInput.module.css'
import { UseFormRegister } from 'react-hook-form';
import { LoginRequest } from '../../../interfaces/request/LoginRequest';

interface AuthInputProps {
    placeholder?: string;
    register: UseFormRegister<LoginRequest>;
    controlName: "password" | "email"
}

const AuthInput: React.FC<AuthInputProps> = ({placeholder, register, controlName}: AuthInputProps) => {
  return (
    <input
      className={classes.input}
      placeholder={placeholder}
      {...register(controlName)}
      type={controlName === 'email' ? 'email' : 'password'}
    />
  )
}

export default AuthInput
