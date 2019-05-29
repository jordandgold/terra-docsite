import React, { Component } from "react";
import {
  main,
  sectionOne,
  sectionTwo
} from "../../../utilities/content/gettingStartedContent";

class GettingStarted extends Component {
  render() {
    return (
      <article className="getting-started doc-page">
        <h1 className="doc-page__header">What is Terra?</h1>
        <p className="doc-page__main-description">{main}</p>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">{sectionOne.header}</h2>
          <p className="doc-page__section-text">{sectionOne.text}</p>
        </section>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">{sectionTwo.header}</h2>
          <p className="doc-page__section-text">{sectionTwo.text}</p>
        </section>
        <hr />
      </article>
    );
  }
}

export default GettingStarted;
