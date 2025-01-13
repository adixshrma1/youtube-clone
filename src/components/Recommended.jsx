import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Recommended = () => {
  return (
    <div className="basis-[31%] px-2">
      <div className="flex items-center gap-2 mb-5">
        <div className="basis-[40%]">
          <img className="rounded-xl" src={assets.thumbnail1} />
        </div>
        <div className="basis-[55%] ">
          <h1>learn what you wantdfdfsdf dfsdfs sfsd</h1>
          <p className="text-sm text-gray-700 font-light">GreatStack</p>
          <p className="text-sm text-gray-700 font-light" >134k views &bull; 19 hours ago</p>
        </div>
        <div className="basis-[5%] cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-5">
        <div className="basis-[40%]">
          <img className="rounded-xl" src={assets.thumbnail1} />
        </div>
        <div className="basis-[55%] ">
          <h1>learn what you wantdfdfsdf dfsdfs sfsd</h1>
          <p className="text-sm text-gray-700 font-light">GreatStack</p>
          <p className="text-sm text-gray-700 font-light" >134k views &bull; 19 hours ago</p>
        </div>
        <div className="basis-[5%] cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-5">
        <div className="basis-[40%]">
          <img className="rounded-xl" src={assets.thumbnail1} />
        </div>
        <div className="basis-[55%] ">
          <h1>learn what you wantdfdfsdf dfsdfs sfsd</h1>
          <p className="text-sm text-gray-700 font-light">GreatStack</p>
          <p className="text-sm text-gray-700 font-light" >134k views &bull; 19 hours ago</p>
        </div>
        <div className="basis-[5%] cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-5">
        <div className="basis-[40%]">
          <img className="rounded-xl" src={assets.thumbnail1} />
        </div>
        <div className="basis-[55%] ">
          <h1>learn what you wantdfdfsdf dfsdfs sfsd</h1>
          <p className="text-sm text-gray-700 font-light">GreatStack</p>
          <p className="text-sm text-gray-700 font-light" >134k views &bull; 19 hours ago</p>
        </div>
        <div className="basis-[5%] cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
