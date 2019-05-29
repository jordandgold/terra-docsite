import React from "react";
import PropTypes from "prop-types";
import "./ColorSwatch.scss";

const ColorSwatch = ({ swatch }) => {
  return (
    <div className="color-swatch">
      <div style={{ background: swatch.swatch }} className="color-swatch__main">
        <p style={{ color: swatch.textColor || "white" }}>{swatch.swatch}</p>
      </div>
      <div
        style={{ background: swatch.swatch }}
        className="color-swatch__secondary color-swatch__secondary--one"
      />
      <div
        style={{ background: swatch.swatch }}
        className="color-swatch__secondary color-swatch__secondary--two"
      />
      <div
        style={{ background: swatch.swatch }}
        className="color-swatch__secondary color-swatch__secondary--three"
      />
    </div>
  );
};

export default ColorSwatch;

ColorSwatch.propTypes = {
  swatch: PropTypes.shape({
    swatch: PropTypes.string.isRequired,
    textColor: PropTypes.string
  }).isRequired
};
