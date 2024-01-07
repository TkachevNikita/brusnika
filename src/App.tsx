import React from 'react';
import './App.css';
import AppLayout from './layouts/AppLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AssetsPage from './pages/AssetsPage';
import { NewAssetPage } from './pages/NewAssetPage';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import {observer} from "mobx-react-lite";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AppLayout/>}>
          <Route path="/assets" element={<AssetsPage/>}/>
          <Route path="/add" element={<NewAssetPage/>}/>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<NewAssetPage/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}

export default observer(App);
