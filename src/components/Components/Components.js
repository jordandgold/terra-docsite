import React, { Component } from "react";
import { Route } from "react-router-dom";

class Components extends Component {
  render() {
    return (
      <div>
        Components
        <Route
          path={`/documentation/components/:componentId`}
          component={<h1>Components</h1>}
        />
      </div>
    );
  }
}

export default Components;
