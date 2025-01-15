import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`py-8 px-[1%] ${sidebar? 'md:pl-[16%]':'md:pl-[6%]'}`}>
        <Feed sidebar={sidebar} category={category}/>
      </div>
    </>
  );
};

export default Home;
