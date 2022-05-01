import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards";
import CardsList from "./components/CardsList";
import CenterButton from "./components/CenterButton";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import "./App.scss";

import posts from './data/post';
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation handleCreateAcc={() => setShowModal(true)} />
      <Hero handleCreateAcc={() => setShowModal(true)} />

      <InfoCards />
      <CardsList posts={posts} />
      <CenterButton
        children="Abra sua conta"
        onClick={() => setShowModal(true)}
      />

      <Institutional handleCreateAcc={() => setShowModal(true)} />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
