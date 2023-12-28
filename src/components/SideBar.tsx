import React from 'react';
import './styles/SideBar.css';
import { NavLink, useLocation } from 'react-router-dom';

export const SideBar = () => {
  const location = useLocation();

  return (
    <div className='sidebar'>
        <div className={`sidebar__item ${location.pathname === "/assets" ? 'sidebar__item-active' : ''}`}>
            <NavLink to="assets" className="sidebar__linq">
                Активы
            </NavLink>
        </div>
        <div className={`sidebar__item ${location.pathname === "/add" ? 'sidebar__item-active' : ''}`}>
            <NavLink to="add" className="sidebar__linq">
                Добавление актива
            </NavLink>
        </div>
        <div className={`sidebar__item ${location.pathname === "/archive" ? 'sidebar__item-active' : ''}`}>
            <NavLink to="archive" className="sidebar__linq">
                Архив активов
            </NavLink>
        </div>
        <div className={`sidebar__item ${location.pathname === "/history" ? 'sidebar__item-active' : ''}`}>
            <NavLink to="history" className="sidebar__linq">
                История
            </NavLink>
        </div>
        <div className={`sidebar__item ${location.pathname === "/support" ? 'sidebar__item-active' : ''}`}>
            <NavLink to="support" className="sidebar__linq">
                Поддержка
            </NavLink>
        </div>
    </div>
  );
}
