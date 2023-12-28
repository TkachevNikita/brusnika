import React, { ReactNode } from 'react'
import './../styles/MyButton.css'

interface MyButtonProps {
    children?: ReactNode;
    className?: string;
}

export const MyButton = ({children, className}: MyButtonProps) => {
  return (
    <button id='button' className={className}>{children}</button>
  )
}
