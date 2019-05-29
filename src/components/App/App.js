import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Documentation from "../Documentation/Documentation";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <section
          className="app__nav-spacer"
          aria-label="top navigation wrapper"
        >
          <NavBar />
        </section>
        <Route path={`/documentation`} component={Documentation} />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
