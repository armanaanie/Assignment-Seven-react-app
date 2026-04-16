import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../../layout/MainLayout'
import Homepage from '../homepage/homepage'
import Timeline from '../timeline/Timeline'
import Stats from '../Stats/Stats'
import Error from "../errorpage/Error" 
import FriendDetailsPage from '../friendDetailsPage/FriendDetailsPage'
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
        path:'/friendDetails/:id',
        element:<FriendDetailsPage></FriendDetailsPage>,
        loader:()=> fetch("/allfrienddata.json")
        
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

export default router;