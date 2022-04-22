import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Institutional.scss"

const Institutional = () => (
  <section className=" img__background text-light py-5">
    <Container >
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={5}>
          <h2>Já nascemos digital</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;