import React, { ReactNode } from 'react'
import classes from '../styles/MyButton.module.css'

interface MyButtonProps {
    children?: ReactNode;
    className?: string;
}

export const MyButton = ({children, className}: MyButtonProps) => {
  return (
    <button id='button' className={classes.className}>{children}</button>
  )
}
