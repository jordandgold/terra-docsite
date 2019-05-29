import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";
import sketchIcon from "./assets/Sketch-Card-Icon.png";
import reactIcon from "./assets/React-Card-Icon.png";

const HomePage = () => {
  return (
    <div>
      <section className="homepage-hero">
        <div className="homepage-hero__container">
          <h1 className="homepage-hero__header">Terra Design System</h1>
          <p className="homepage-hero__text">
            Terra is Trimble's design system. It was developed to help create a
            cohesive web experience across Trimble's properties. At its core,
            Terra was built out to be easy to use, intuitive and serve as a
            great backbone for design.
          </p>
          <NavLink
            className="ter-button ter-button--secondary--5"
            to="/documentation"
          >
            Get Started
          </NavLink>
        </div>
      </section>
      <section className="homepage-main">
        <div className="homepage-main__grid">
          <div className="homepage-main__grid-item">
            <article className="ter-card">
              <div class="ter-card__image">
                <img src={sketchIcon} alt="Terra Sketch UI Kit" />
              </div>
              <div className="ter-card__body">
                <h3 className="ter-card__header">Terra Sketch UI Kit</h3>
                <span className="ter-card__sub-header">
                  Updated Monday April 17, 2019
                </span>
                <p className="ter-card__text">
                  Download the latest UI libraries package from GitHub.
                </p>
                <NavLink
                  className="ter-card__cta ter-button ter-button--secondary--1"
                  to="/documentation"
                >
                  Download Kit
                </NavLink>
              </div>
            </article>
          </div>
          <div className="homepage-main__grid-item">
            <article className="ter-card">
              <div class="ter-card__image">
                <img src={reactIcon} alt="Terra React Component Library" />
              </div>
              <div className="ter-card__body">
                <h3 className="ter-card__header">React Component Library</h3>
                <span className="ter-card__sub-header">
                  Updated Monday April 17, 2019
                </span>
                <p className="ter-card__text">
                  Developer language about the components—NPM CDN blockchain.
                </p>
                <NavLink
                  className="ter-card__cta ter-button ter-button--secondary--1"
                  to="/documentation"
                >
                  View Documentation
                </NavLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
