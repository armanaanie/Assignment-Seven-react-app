import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from "react-router/dom";
import router from './pages/routes/Routes';
import { ToastContainer } from 'react-toastify';
import FriendProvider from './friendContext/FriendContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider><RouterProvider router={router} /></FriendProvider>
    <ToastContainer />
  </StrictMode>
  
  
)
