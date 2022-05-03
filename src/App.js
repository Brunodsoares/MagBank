import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from'./views/Home'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navigation handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default App;
