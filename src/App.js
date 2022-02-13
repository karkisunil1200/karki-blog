import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <Topbar />
      <Login />
    </div>
  );
};

export default App;
