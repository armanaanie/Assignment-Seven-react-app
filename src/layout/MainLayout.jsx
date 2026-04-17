import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from "../components/Footer"
const MainLayout = () => {
    return (
        <div>
           <Navbar className='mx-auto'></Navbar> 
           <div className='w-[80%] mx-auto'><Outlet></Outlet></div>
           <Footer className='mx-auto'></Footer>
        </div>
    );
};

export default MainLayout;