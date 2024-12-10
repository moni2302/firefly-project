import React from "react";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to FireFly</h1>
        <p>Elevate every dish with bold flavors</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" placeholder="your-email@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your Password" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn-login">Log In</button>
        </form>
      </div>
      {/* <div className="login-image">
        <img
          src="https://via.placeholder.com/600x600" // Replace with your image URL
          alt="Kitchen decor"
        />
      </div> */}
    </div>
  );
};

export default LoginPage;