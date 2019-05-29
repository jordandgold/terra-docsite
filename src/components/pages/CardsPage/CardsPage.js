import React, { Component } from "react";
import "./CardsPage.scss";
import Prism from "prismjs";
import "../../../utilities/prism.css";
import { Card } from "terra-component-lib";
import {
  mainDescription,
  guidelines,
  basicExampleCard,
  textCard
} from "../../../utilities/content/cardPageContent";

class CardsPage extends Component {
  constructor() {
    super();

    this.state = {
      basicExample: "html",
      cardWithButtons: "html",
      cardWithText: "html"
    };
  }

  changeTab = (section, string) => {
    this.setState(
      {
        [section]: string
      },
      Prism.highlightAll
    );
  };

  render() {
    return (
      <article className="doc-page cards-page">
        <h1 className="doc-page__header">Cards</h1>
        <p className="doc-page__main-description">{mainDescription}</p>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">{guidelines.header}</h2>
          <ul>
            {guidelines.guidelines.map((guideline, index) => {
              return <li key={`guideline-${index}`}>{guideline}</li>;
            })}
          </ul>
        </section>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">Basic Example</h2>
          <p className="doc-page__section-text">
            Cards are created with the{" "}
            <span className="doc-page__code-snippet-span">.ter-card</span>{" "}
            class.
          </p>
          <Card
            image={basicExampleCard.image}
            header={basicExampleCard.header}
            text={basicExampleCard.text}
            link={basicExampleCard.link}
          />
          <div className="doc-page__code-tab">
            <p
              className={this.state.basicExample === "react" ? "is-active" : ""}
              onClick={() => this.changeTab("basicExample", "react")}
            >
              REACT
            </p>
            <p
              className={this.state.basicExample === "html" ? "is-active" : ""}
              onClick={() => this.changeTab("basicExample", "html")}
            >
              HTML
            </p>
          </div>
          {this.state.basicExample === "html" ? (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <div class="row">
2  <div class="col-xs-12 col-sm-6">
3    <div class="ter-card">
4      <div class="ter-card__image card__image-top">
5        <img src="/images/placeholder.jpg"
6        width="" height="" alt="">
7      </div>`}
              </code>
            </pre>
          ) : (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <Card 
2   image={{url:'/img.jpg', altText='placeholder'}}
3   header='Layout'
4   text='Ea quis quis ullamco aliqua.'
5   link={{url: '/#', text='See how it works'}}
6 />
 `}
              </code>
            </pre>
          )}

          <hr />
        </section>
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">Cards with buttons</h2>
          <p className="doc-page__section-text">
            Cards are created with the{" "}
            <span className="doc-page__code-snippet-span">.ter-card</span>{" "}
            class.
          </p>
          <Card
            image={basicExampleCard.image}
            header={basicExampleCard.header}
            text={basicExampleCard.text}
            buttonLink={basicExampleCard.link}
          />
          <div className="doc-page__code-tab">
            <p
              className={
                this.state.cardWithButtons === "react" ? "is-active" : ""
              }
              onClick={() => this.changeTab("cardWithButtons", "react")}
            >
              REACT
            </p>
            <p
              className={
                this.state.cardWithButtons === "html" ? "is-active" : ""
              }
              onClick={() => this.changeTab("cardWithButtons", "html")}
            >
              HTML
            </p>
          </div>
          {this.state.cardWithButtons === "html" ? (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <div class="row">
2  <div class="col-xs-12 col-sm-6">
3    <div class="ter-card">
4      <div class="ter-card__image card__image-top">
5        <img src="/images/placeholder.jpg"
6        width="" height="" alt="">
7      </div>`}
              </code>
            </pre>
          ) : (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <Card 
2   image={{url:'/img.jpg', altText='placeholder'}}
3   header='Layout'
4   text='Ea quis quis ullamco aliqua.'
5   buttonLink={{url: '/#', text='See how it works'}}
6 />
 `}
              </code>
            </pre>
          )}
        </section>
        <hr />
        <section className="doc-page__section">
          <h2 className="doc-page__section-header">Text Cards</h2>
          <p className="doc-page__section-text">
            Cards are created with the{" "}
            <span className="doc-page__code-snippet-span">.ter-card</span>{" "}
            class.
          </p>
          <Card
            header={textCard.header}
            subHeader={textCard.subHeader}
            text={textCard.text}
            link={textCard.link}
          />
          <div className="doc-page__code-tab">
            <p
              className={this.state.cardWithText === "react" ? "is-active" : ""}
              onClick={() => this.changeTab("cardWithText", "react")}
            >
              REACT
            </p>
            <p
              className={this.state.cardWithText === "html" ? "is-active" : ""}
              onClick={() => this.changeTab("cardWithText", "html")}
            >
              HTML
            </p>
          </div>
          {this.state.cardWithText === "html" ? (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <div class="row">
2  <div class="col-xs-12 col-sm-6">
3    <div class="ter-card">
4      <div class="ter-card__image card__image-top">
5        <img src="/images/placeholder.jpg"
6        width="" height="" alt="">
7      </div>`}
              </code>
            </pre>
          ) : (
            <pre style={{ marginTop: "0", marginBottom: "48px" }}>
              <code className="language-javascript">
                {`1 <Card 
3   header='AEC BuildTech'
4   subHeader='Date Field - Date Field'
5   text='Ea quis quis ullamco aliqua.'
6   link={{url: '/#', text='See how it works'}}
7 />
 `}
              </code>
            </pre>
          )}
        </section>
      </article>
    );
  }
}

export default CardsPage;
