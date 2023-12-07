import React from 'react'
import './styles/SideBar.css'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__item">
            <Link to="assets" className="sidebar__linq">
                Активы
            </Link>
        </div>
        <div className="sidebar__item">
            <Link to="#" className="sidebar__linq">
                Добавление актива
            </Link>
        </div>
        <div className="sidebar__item">
            <Link to="archive" className="sidebar__linq">
                Архив активов
            </Link>
        </div>
        <div className="sidebar__item">
            <Link to="history" className="sidebar__linq">
                История
            </Link>
        </div>
        <div className="sidebar__item">
            <Link to="support" className="sidebar__linq">
                Поддержка
            </Link>
        </div>
    </div>
  )
}
