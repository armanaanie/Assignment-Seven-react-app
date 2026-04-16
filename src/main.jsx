import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/homepage'
import Timeline from './pages/timeline/Timeline'
import Stats from './pages/Stats/Stats'
import Error from "./pages/errorpage/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
      index:true,
      element:<Homepage></Homepage>
      },
      {
        path:'/timeline',
        element:<Timeline></Timeline>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      }
    ],
    errorElement:<Error></Error>
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
)
