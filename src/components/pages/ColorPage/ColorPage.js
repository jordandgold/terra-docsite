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
      <article className="doc-page doc-page__color">
        <h1 className="doc-page__color__header">Color</h1>
        <p className="doc-page__color__main-description">{mainDescription}</p>
        <hr />
        <section className="doc-page__color__section">
          <h2 className="doc-page__color__sub-header">Brand Colors</h2>
          <p className="doc-page__color__text-description">
            {brandDescription}
          </p>
          <div className="doc-page__color__swatch-container">
            {this.renderSwatches(brandSwatches)}
          </div>
        </section>
        <hr />
        <section className="doc-page__color__section">
          <h2 className="doc-page__color__sub-header">UI Colors</h2>
          <p className="doc-page__color__text-description">{uiDescription}</p>
          <div className="doc-page__color__swatch-container">
            {this.renderSwatches(uiSwatches)}
          </div>
        </section>
        <hr />
        <section className="doc-page__color__section">
          <h2 className="doc-page__color__sub-header">Emotive Colors</h2>
          <p className="doc-page__color__text-description">
            {emotiveDescription}
          </p>
          <div className="doc-page__color__swatch-container">
            {this.renderSwatches(emotiveSwatches)}
          </div>
        </section>
      </article>
    );
  }
}

export default ColorPage;
