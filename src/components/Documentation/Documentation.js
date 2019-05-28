import React, { Component } from "react";
import "./Documentation.scss";
import { Route, NavLink } from "react-router-dom";
import Components from "../Components/Components";
import Style from "../Style/Style";
import { Accordion, AccordionFold } from "terra-component-lib";
import { componentsLinks, styleLinks } from "../../utilities/links";

class Documentation extends Component {
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
        <NavLink key={style.text} to={`/documentation/components${style.url}`}>
          {style.text}
        </NavLink>
      );
    });
  };
  render() {
    return (
      <section className="documentation">
        <NavLink to="/documentation/getting-started">Getting Started</NavLink>
        <Accordion>
          <AccordionFold header="Components">
            {this.generateComponentLinks()}
          </AccordionFold>
          <AccordionFold header="Style">
            {this.generateStyleLinks()}
          </AccordionFold>
        </Accordion>
        <Route
          path={`/documentation/:documentationId`}
          render={() => <p>i'm a route</p>}
        />
      </section>
    );
  }
}
export default Documentation;

const hello = () => {
  return <h1>hello fren</h1>;
};
