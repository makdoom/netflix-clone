import React from "react";
import "./Signin.css";

const Signup = () => {
  return (
    <div className="signin__page">
      <div className="header">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="signin__box">
        <div className="heading">
          <h2>Sign In</h2>
        </div>
        <div className="input__box">
          <form>
            <input className="input" type="text" placeholder="Username" />
            <br />
            <input className="input" type="email" placeholder="Email" />
            <br />
            <input
              className="input"
              type="password"
              placeholder="New Password"
            />
            <br />
            <button className="submit">Submit</button>
          </form>
          <div className="help">
            <div className="rem">
              <input type="checkbox" name="remember" value="remember" />
              <label for="remember">Remember me</label>
            </div>
            <div className="need">
              <a href="#">Need help ?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
