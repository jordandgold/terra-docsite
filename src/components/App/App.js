import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
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
        <Route path={`/`} component={HomePage} exact />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
