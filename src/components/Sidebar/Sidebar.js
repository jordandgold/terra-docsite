import React, { Component } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionFold } from "terra-component-lib";
import { componentsLinks, styleLinks } from "../../utilities/links";

class Sidebar extends Component {
  generateComponentLinks = () => {
    return componentsLinks.map(component => {
      return (
        <NavLink
          key={component.text}
          to={`/documentation/components${component.url}`}
        >
          {component.text}
        </NavLink>
      );
    });
  };

  generateStyleLinks = () => {
    return styleLinks.map(style => {
      return (
        <NavLink key={style.text} to={`/documentation/style${style.url}`}>
          {style.text}
        </NavLink>
      );
    });
  };

  render() {
    return (
      <nav className="sidebar">
        <NavLink to="/documentation/getting-started">Getting Started</NavLink>
        <Accordion>
          <AccordionFold header="Components">
            {this.generateComponentLinks()}
          </AccordionFold>
          <AccordionFold header="Style">
            {this.generateStyleLinks()}
          </AccordionFold>
        </Accordion>
      </nav>
    );
  }
}

export default Sidebar;
