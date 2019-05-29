import React from "react";
import "./CardsPage.scss";
import { Card } from "terra-component-lib";
import {
  mainDescription,
  guidelines,
  basicExampleCard,
  textCard
} from "../../../utilities/content/cardPageContent";

const CardsPage = () => {
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
          Cards are created with the
          <span className="doc-page__code-snippet-span">.ter-card</span> class.
        </p>
        <Card
          image={basicExampleCard.image}
          header={basicExampleCard.header}
          text={basicExampleCard.text}
          link={basicExampleCard.link}
        />
      </section>
      <section className="doc-page__section">
        <h2 className="doc-page__section-header">Cards with buttons</h2>
        <p className="doc-page__section-text">
          Cards are created with the
          <span className="doc-page__code-snippet-span">.ter-card</span> class.
        </p>
        <Card
          image={basicExampleCard.image}
          header={basicExampleCard.header}
          text={basicExampleCard.text}
          buttonLink={basicExampleCard.link}
        />
      </section>
      <hr />
      <section className="doc-page__section">
        <h2 className="doc-page__section-header">Text Cards</h2>
        <p className="doc-page__section-text">
          Cards are created with the
          <span className="doc-page__code-snippet-span">.ter-card</span> class.
        </p>
        <Card
          header={textCard.header}
          subHeader={textCard.subHeader}
          text={textCard.text}
          link={textCard.link}
        />
      </section>
    </article>
  );
};

export default CardsPage;
