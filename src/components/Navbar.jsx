import React from 'react';
import Logo from "../assets/logo.png"
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
const Navbar = () => {
    return (
        <div className="flex justify-between bg-base-100 shadow-sm p-4">
  <div className="">
   
    <img src={Logo} alt="" srcset="" />
  </div>
  
  <div className="flex gap-3">
    <NavLink to={"/"} className={({isActive})=>`btn  ${isActive?"bg-green-500 text-white ":" border-none bg-white"}`}> <IoHomeOutline /> Homepage</NavLink>
    <NavLink to={"/timeline"}  className={({isActive})=>`btn  ${isActive?"bg-green-500 text-white ":" border-none bg-white"}`}><CiClock2 /> Timeline</NavLink>
    <NavLink to={"/stats"}  className={({isActive})=>`btn  ${isActive?"bg-green-500 text-white ":" border-none bg-white" }`}><GoGraph /> Stats</NavLink>
  </div>
</div>
    );
};

export default Navbar;