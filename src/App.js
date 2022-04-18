import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards";
import Cards from "./components/Cards"
import "./App.scss";

const App = () => (
  <div className="App">
    <Navigation />
    <Hero />
    <InfoCards />
    <Cards />
  </div>
);

export default App;
