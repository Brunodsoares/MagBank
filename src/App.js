import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards";
import CardsList from "./components/CardsList";
import CenterButton from "./components/CenterButton";
import Institutional from "./components/Institutional";

import "./App.scss";

import posts from './data/post';


const App = () => (
  <div className="App">
    <Navigation />
    <Hero />

    <InfoCards />
    <CardsList posts={posts} />
    <CenterButton children='Abra sua conta' />
    <Institutional />

  </div>
);

export default App;
