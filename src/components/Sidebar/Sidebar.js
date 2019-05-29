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
          className="ter-accordion__fold-link"
        >
          <p> {component.text}</p>
        </NavLink>
      );
    });
  };

  generateStyleLinks = () => {
    return styleLinks.map(style => {
      return (
        <NavLink
          key={style.text}
          to={`/documentation/style${style.url}`}
          className="ter-accordion__fold-link"
        >
          <p>{style.text}</p>
        </NavLink>
      );
    });
  };

  render() {
    return (
      <nav className="sidebar">
        <NavLink
          className="sidebar__getting-started-link"
          to="/documentation/getting-started"
        >
          <p>Getting Started</p>
        </NavLink>
        <Accordion>
          <AccordionFold header="Style">
            {this.generateStyleLinks()}
          </AccordionFold>
          <AccordionFold header="Components">
            {this.generateComponentLinks()}
          </AccordionFold>
        </Accordion>
      </nav>
    );
  }
}

export default Sidebar;
