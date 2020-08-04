import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              required="required"
            />
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              required="required"
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="password"
              placeholder="New Password"
              value={password}
              required="required"
            />
            <br />

            <button className="submit">
              <Link to="./netflixPage">Submit</Link>
            </button>
          </form>
          <div className="help">
            <div className="rem">
              <input type="checkbox" name="remember" value="remember" />
              <label htmlFor="remember"> Remember me</label>
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
