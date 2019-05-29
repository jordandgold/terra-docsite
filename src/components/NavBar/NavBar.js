import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <h4 className="nav-bar__header">
          Terra<span className="nav-bar__version"> v1.0</span>
        </h4>
      </NavLink>
      <div className="nav-bar__link-container">
        <NavLink className="nav-bar__link" to="/documentation/getting-started">
          <p>Documentation</p>
        </NavLink>
        <NavLink className="nav-bar__link" to="/resources">
          <p>Resources</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
