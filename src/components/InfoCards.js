import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMobileButton,
  faCartShopping,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import magcard from "../assets/magnetic-card.png";
import "./InfoCards.scss";



const InfoCards = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Row>
          <h2 className=" my-5 text-credit">Cartão de Crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  size="2x"
                  color="#F05656"
                  icon={faCreditCard}
                />
              </Col>
              <Col xs={10} className={"h5 text-muted"}>
                Credito Pessoal
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  size="2x"
                  color="#F05656"
                  icon={faMobileButton}
                />
              </Col>
              <Col xs={10} className={"h5 text-muted"}>
                App
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  size="2x"
                  color="#F05656"
                  icon={faCartShopping}
                />
              </Col>
              <Col xs={10} className={"h5 text-muted"}>
                Pagamento Online
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  size="2x"
                  color="#F05656"
                  icon={faWallet}
                />
              </Col>
              <Col xs={10} className={"h5 text-muted"}>
                Carteira Digital
              </Col>
            </Row>
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
