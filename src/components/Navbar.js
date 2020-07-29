import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? handleShow(true) : handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <div className="login-button">
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
