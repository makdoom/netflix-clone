import React from "react";
import { Link } from "react-router-dom";

const EmailComp = () => {
  return (
    <div className="email">
      <form className="input__field">
        <input type="email" placeholder="Email address" required />
        <button className="started">
          <Link to="/netflixpage">
            Get Started &nbsp;<i className="fa fa-chevron-right"></i>{" "}
          </Link>
        </button>
      </form>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  );
};

export default EmailComp;
