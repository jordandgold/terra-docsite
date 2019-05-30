import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="ter-navbar">
      <NavLink to="/" className="ter-navbar__logo">
        <h4 className="ter-logo">
          Terra<span className="ter-logo__version"> v1.0</span>
        </h4>
      </NavLink>
      <div className="ter-navbar__nav">
        <NavLink
          className="ter-navbar__nav-link"
          to="/documentation/getting-started"
        >
          Documentation
        </NavLink>
        <NavLink className="ter-navbar__nav-link" to="/resources">
          Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
