import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'

export default function App() {
  
  let routers = createBrowserRouter([
    {
      path: '' , element: <Layout/> , children: [
        {index: true , element: <Home/>},
      ]
    }
  ])
  
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
