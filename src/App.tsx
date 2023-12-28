import React from 'react';
import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AssetsPage } from './pages/AssetsPage';
import { NewAssetPage } from './pages/NewAssetPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AppLayout/>}>
          <Route path="/assets" element={<AssetsPage/>}/>
          <Route path="/add" element={<NewAssetPage/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
