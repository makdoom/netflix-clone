import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header">
        <p>
          Questions? Call : <a href="#"> 000-800-040-1843 </a>
        </p>
      </div>
      <div className="footer__middle">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Term of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Coolie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Leagal Notices</a>
        <a href="#">Netflix Originals</a>
      </div>
      <div className="footer__bottom">
        <p>
          {" "}
          Recreated by <span>@Makdoom Shaikh </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
