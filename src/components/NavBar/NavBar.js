import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <h4 className="nav-bar__header">Terra v1.0</h4>
      </NavLink>
      <div className="nav-bar__link-container">
        <NavLink className="nav-bar__link" to="/documentation">
          Documentation
        </NavLink>
        <NavLink className="nav-bar__link" to="/resources">
          Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
