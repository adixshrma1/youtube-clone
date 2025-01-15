import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="py-2.5 px-[2%] flex justify-between sticky top-0 z-10  bg-white">
      <div className="flex gap-3 items-center">
        <img className="hidden md:block sm:w-5 lg:w-6" onClick={()=> setSidebar(prev => !prev)} src={assets.menuIcon} />
        <Link to='/'><img className="w-24 lg:w-32" src={assets.logo} /></Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-[#ccc] py-1 px-2 sm:py-2 sm:px-3 rounded-full">
          <input type="text" placeholder="Search" className="w-40 md:w-80 lg:w-[550px] border-0 outline-0 px-2"/>
          <img src={assets.searchIcon} className="w-4"/>
        </div>
      </div>
      <div className="flex sm:gap-2 lg:gap-3 items-center">
        <img src={assets.uploadIcon} className="hidden sm:block w-6" />
        <img src={assets.moreIcon} className="hidden sm:block w-6"/>
        <img src={assets.notificationIcon} className="hidden sm:block w-6"/>
        <img src={assets.jackIcon} className="w-8 rounded-full"/>
      </div>
    </nav>
  );
};

export default Navbar;
