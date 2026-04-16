import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from "../components/Footer"
const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <div className='w-[80%] mx-auto'><Outlet></Outlet></div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;