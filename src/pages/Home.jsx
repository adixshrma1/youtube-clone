import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`bg-[#f9f9f9] py-8 pl-[16%] pr-[1%] ${sidebar? '':'pl-[6%]'}`}>
        <Feed sidebar={sidebar} category={category}/>
      </div>
    </>
  );
};

export default Home;
