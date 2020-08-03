import React from "react";
import "./Home.css";
import HomeRows from "./HomeRows";
import HomeAccordion from "./HomeAccordion";
import EmailComp from "./EmailComp";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="nav">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
          />
          <button className="sign__in">Sign In</button>
        </div>
        <div className="home__content">
          <h1>
            Unlimited <br /> <span className="gradient">Hollywood,</span>
            <br /> <span className="orange">Bollywood &</span>{" "}
            <span className="gradient">more.</span>{" "}
          </h1>
          <EmailComp />
        </div>
        <div className="fade"></div>
      </div>

      <HomeRows />
      <HomeAccordion />
      <EmailComp />
      <Footer />
    </>
  );
};

export default Home;
