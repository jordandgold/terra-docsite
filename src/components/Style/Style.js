import React, { Component } from "react";
import { Route } from "react-router-dom";

class Style extends Component {
  render() {
    return (
      <div>
        <Route path={`/style/:styleId`} component={<h1>Style</h1>} />
      </div>
    );
  }
}
