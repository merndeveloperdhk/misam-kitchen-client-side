import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routers'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <div className='mx-auto max-w-screen-xl'>
      <RouterProvider router={router} />
    </div>
   </HelmetProvider>
  </React.StrictMode>,
)
