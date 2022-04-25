import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  faCreditCard,
  faWallet,
  faMobile,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import magcard from "../assets/magnetic-card.png";
import "./InfoCards.scss";
import Listicon from "./Listicon.js";


const InfoCards = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Row>
          <h2 className=" my-5 text-credit">Cartão de Crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <Listicon icon={faCreditCard} size={2} color={'#f05656'} textclassName='h5 text-muted'>
              Crédito Pessoal
            </Listicon>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
          <Listicon icon={faShoppingCart} size={2} color={'#f05656'} textclassName='h5 text-muted'>
              Pagamento Online
            </Listicon>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
          <Listicon icon={faMobile} size={2} color={'#f05656'} textclassName='h5 text-muted'>
              APP
            </Listicon>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
          <Listicon icon={faWallet} size={2} color={'#f05656'} textclassName='h5 text-muted'>
              Carteira Digital
            </Listicon>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={magcard} alt="exemplo de cartão de credito" fluid></Image>
      </Col>
    </Row>
  </Container>
);

export default InfoCards;
