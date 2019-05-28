import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Documentation from "../Documentation/Documentation";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">hello</div>
      <Route path={`/documentation`} component={Documentation} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
