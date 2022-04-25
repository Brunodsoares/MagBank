import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { faMobileScreenButton, faMobileButton, faGlobe, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import "./Institutional.scss";
import Listicon from "./Listicon.js";


const Institutional = () => (
  <section className=" img__background text-light py-5">
    <Container >
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>  
          <h2 className="title__inst my-5">Já nascemos digital</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <Listicon icon={faMobileScreenButton} color="#fff" className="mb-3">
             Sem fila e sem burocracia
          </Listicon>
          <Listicon icon={faMobileButton} color="#fff" className="mb-3">
             Simples e prático
          </Listicon>
          <Listicon icon={faGlobe} color="#fff" className="mb-3">
             Abertura de conta 100% online
          </Listicon>
          <Listicon icon={faShieldHalved} color="#fff" className="mb-3">
             Transações mais seguras
          </Listicon>

          <Button variant="outline-light" className="mt- 5">
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;