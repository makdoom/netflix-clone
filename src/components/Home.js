import React from "react";
import "./Home.css";

const Home = () => {
  return (
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
        <form className="input__field">
          <input type="email" placeholder="Email address" required />
          <button className="started">Get Started</button>
        </form>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Home;
