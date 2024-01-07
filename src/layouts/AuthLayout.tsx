import React from 'react'
import { Outlet } from 'react-router-dom'
import './styles/AuthLayout.css'
import {observer} from "mobx-react-lite";

const AuthLayout = () => {
  return (
    <div className="auth">
        <Outlet/>
    </div>
  )
}

export default observer(AuthLayout)
