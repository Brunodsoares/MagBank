import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import lyc1 from "../assets/Layer-card1.png";
import lyc2 from "../assets/Layer-card2.png";
import lyc3 from "../assets/Layer-card3.png";
import "./Cards.scss";

const Cards = () => (
  <Container id="container__card">
    <Row className="justify-content-md-center">
      <Col xs lg="4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lyc1} />
          <Card.Body>
            <Card.Title>Lorem, ipsum dolor sit</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              repellendus laudantium error odit? Eius itaque a, quo repellendus
              unde tempora quos minima mollitia vero, quia ab, magnam architecto
              veniam sit.
            </Card.Text>
            <Button variant="danger">Peça já</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs lg="4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lyc2} />
          <Card.Body>
            <Card.Title>Lorem, ipsum dolor sit</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              repellendus laudantium error odit? Eius itaque a, quo repellendus
              unde tempora quos minima mollitia vero, quia ab, magnam architecto
              veniam sit.
            </Card.Text>
            <Button variant="danger">Peça já</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs lg="4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lyc3} />
          <Card.Body>
            <Card.Title>Lorem, ipsum dolor sit</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              repellendus laudantium error odit? Eius itaque a, quo repellendus
              unde tempora quos minima mollitia vero, quia ab, magnam architecto
              veniam sit.
            </Card.Text>
            <Button variant="danger">Peça já</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 6, offset: 5 }}>
        <Button id='Btn__conta' variant="success" size="lg">
          Abra sua conta{" "}
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Cards;
