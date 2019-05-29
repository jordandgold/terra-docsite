import React, { Component } from "react";
import "./ColorPage.scss";
import ColorSwatch from "../../ColorSwatch/ColorSwatch";
import {
  brandSwatches,
  uiSwatches,
  mainDescription,
  brandDescription,
  uiDescription,
  emotiveDescription,
  emotiveSwatches
} from "../../../utilities/content/colorPageContent";

class ColorPage extends Component {
  renderSwatches = swatches => {
    return swatches.map(swatch => {
      return <ColorSwatch swatch={swatch} key={swatch.swatch} />;
    });
  };
  render() {
    return (
      <article className="doc-page color-page">
        <h1 className="doc-page__header">Color</h1>
        <p className="doc-page__main-description">{mainDescription}</p>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">Brand Colors</h2>
          <p className="doc-page__section-text">{brandDescription}</p>
          <div className="color-page__swatch-container">
            {this.renderSwatches(brandSwatches)}
          </div>
        </section>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">UI Colors</h2>
          <p className="doc-page__section-text">{uiDescription}</p>
          <div className="color-page__swatch-container">
            {this.renderSwatches(uiSwatches)}
          </div>
        </section>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">Emotive Colors</h2>
          <p className="doc-page__section-text">{emotiveDescription}</p>
          <div className="color-page__swatch-container">
            {this.renderSwatches(emotiveSwatches)}
          </div>
        </section>
      </article>
    );
  }
}

export default ColorPage;
