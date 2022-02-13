import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/post/:postId"
          element={user ? <Single /> : <Register />}
        />

        <Route
          exact
          path="/setting"
          element={user ? <Setting /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
