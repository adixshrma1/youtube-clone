import React from "react";
import { assets } from "../assets/assets";

const categoryDivClass = 'flex items-center gap-2 xl:gap-3 p-2 xl:p-3 rounded-xl cursor-pointer'

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`bg-white h-screen fixed top-0 pt-20 pl-2 xl:pl-3 overflow-auto no-scrollbar hidden md:block ${
        sidebar ? "w-[15%]" : "w-[5%]"
      }`}
    >
      <div>
        <div
          className={`${categoryDivClass} ${
            category === 0 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <img src={assets.homeIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>Home</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 20 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <img src={assets.game_icon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>Gaming</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 2 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <img src={assets.automobilesIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>Automobiles</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 17 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <img src={assets.sportsIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>Sports</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 24 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <img src={assets.entertainmentIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base `}>Entertainment</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 28 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <img src={assets.techIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>Technology</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 10 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <img src={assets.musicIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>Music</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 22 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <img src={assets.blogsIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>Blogs</p>
        </div>
        <div
          className={`${categoryDivClass} ${
            category === 25 ? "bg-[#f2f2f2]" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <img src={assets.newsIcon} className="w-5" />
          <p className={`${sidebar ? "" : "hidden"}  text-sm xl:text-base`}>News</p>
        </div>
        <hr className={`w-[85%] ${sidebar ? "" : "mb-5 w-1/2"}`} />
      </div>
      {/* check it */}
      <div className={`${sidebar? "":"pl-1"}`}>
        <h1 className={`${sidebar ? "" : "hidden"} font-semibold my-5`}>
          Subscriptions
        </h1>
        <div className="flex items-center gap-3 mb-3">
          <img src={assets.jackIcon} className="w-6 rounded-full" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>Carry</p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <img src={assets.simonIcon} className="w-6 rounded-full" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>MrBeast</p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <img src={assets.tomIcon} className="w-6 rounded-full" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>Flying Beast</p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <img src={assets.meganIcon} className="w-6 rounded-full" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>5-Minutes Crafts</p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <img src={assets.cameronIcon} className="w-6 rounded-full" />
          <p className={`${sidebar ? "" : "hidden"} text-sm xl:text-base`}>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
