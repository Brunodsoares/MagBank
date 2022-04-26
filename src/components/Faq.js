import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Listicon from "./Listicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldHalved,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Faq = () => (
  <Container>
    <Row>
      <Col className="d-lg-none" xs={12}>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faCreditCard} size='2x'/>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faWallet} size='2x'/>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faShieldHalved} size='2x'/>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faUserTie} size='2x' />
          </Col>
        </Row>
      </Col> 

      <Col className="d-none d-lg-block">
        <Listicon icon={faCreditCard} size={3} color={""} className={""}>
          Cartão de crédito e débito
        </Listicon>
        <Listicon icon={faWallet} size={3} color={""} className={""}>
          Carta e abertura
        </Listicon>
        <Listicon icon={faShieldHalved} size={3} color={""} className={""}>
          Token digital
        </Listicon>
        <Listicon icon={faUserTie} size={3} color={""} className={""}>
          Produtos e serviços
        </Listicon>
      </Col>

      <Col></Col>

    </Row>
  </Container>
);

export default Faq;
