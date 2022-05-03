import React from "react";
import Hero from "../components/Hero";
import InfoCards from "../components/InfoCards";
import CardsList from "../components/CardsList";
import CenterButton from "../components/CenterButton";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

import posts from "../data/post";

const Home = ({ handleClick }) => (
  <>
    <Hero handleCreateAcc={handleClick} />

    <InfoCards />
    <CardsList posts={posts} />
    <CenterButton
      children="Abra sua conta"
      onClick={ handleClick } 
    />
    <Institutional handleCreateAcc={handleClick} />
    <Faq />
  </>
);
export default Home;
