import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="py-2.5 px-[2%] flex justify-between sticky top-0 z-10 shadow-md bg-white">
      <div className="flex gap-3 items-center">
        <img className="w-6" onClick={()=> setSidebar(prev => !prev)} src={assets.menuIcon} />
        <img className="w-32" src={assets.logo} />
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-[#ccc] py-2 px-3 rounded-full">
          <input type="text" placeholder="Search" className="w-[400px] border-0 outline-0 px-2"/>
          <img src={assets.searchIcon} className="w-4"/>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={assets.uploadIcon} className="w-6" />
        <img src={assets.moreIcon} className="w-6"/>
        <img src={assets.notificationIcon} className="w-6"/>
        <img src={assets.jackIcon} className="w-8 rounded-full"/>
      </div>
    </nav>
  );
};

export default Navbar;