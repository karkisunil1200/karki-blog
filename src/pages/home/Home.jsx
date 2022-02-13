import React from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <d>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </d>
  );
};

export default Home;
