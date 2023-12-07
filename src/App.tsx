import React from 'react';
import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AssetsPage } from './pages/AssetsPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AppLayout/>}>
          <Route path="/assets" element={<AssetsPage/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
