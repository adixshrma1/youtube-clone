import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={``}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
