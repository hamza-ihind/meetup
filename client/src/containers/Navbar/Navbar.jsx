import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="navbar__logo">
        <h1>ENSA CHAT</h1>
      </div>
      <div className="navbar__list">
        <Link className="navbar__list-item" to="/login">
          Login
        </Link>
        <Link className="navbar__list-item" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
