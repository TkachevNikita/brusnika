import React from 'react'
import Header  from '../components/Header'
import { SideBar } from '../components/SideBar'
import './styles/AppLayout.css'
import { Outlet } from 'react-router-dom'
import {observer} from "mobx-react-lite";

const AppLayout = () => {
  return (
    <div className='app'>
        <Header/>
        <div className="app__features">
            <SideBar/>
            <div className="app__content">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default observer(AppLayout)