import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images3.alphacoders.com/739/739912.jpg"
              alt=""
              className="settingImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sunil" />
          <label>Email</label>
          <input type="email" placeholder="Sunil@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="********" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
