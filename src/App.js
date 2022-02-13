import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <div>
      <Topbar />
      <Single />
    </div>
  );
};

export default App;
