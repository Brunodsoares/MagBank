import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import magcard from "../assets/magnetic-card.png";
import "./InfoCards.scss";

const InfoCards = () => (
  <Container className="text-" id="container__info">
    <Row>
      <Col>
        <h2>Cartão de Crédito</h2>
        <Row>
          <Col>
            <p>Crédito pessoal</p>
            <p>APP</p>
          </Col>
          <Col>
            <p>Pagamento Online</p>
            <p>Carteira Digital</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Image src={magcard}></Image>
      </Col>
    </Row>
  </Container>
);



export default InfoCards;
