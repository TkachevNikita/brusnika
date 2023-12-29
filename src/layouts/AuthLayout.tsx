import React from 'react'
import { Outlet } from 'react-router-dom'
import './styles/AuthLayout.css'

const AuthLayout = () => {
  return (
    <div className="auth">
        <Outlet/>
    </div>
  )
}

export default AuthLayout
