import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="type"
          placeholder="Enter your new username"
          className="registerInput"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerInput"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
