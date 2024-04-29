import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import Editar from './components/Editar.jsx'
import NewPost from './components/NewPost.jsx'
import Lermais from './components/Lermais.jsx'


const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/new',
        element:<NewPost/>
      },
    
      {
        path:'/posts/:id',
        element:<Editar/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
