import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
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
