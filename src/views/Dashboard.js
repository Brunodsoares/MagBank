import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss"

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="aling-items-center mb-5">
          <Col xs={3}>
            <span className="dashboard__user-avatar">
              <FontAwesomeIcon
                icon={faCircle}
                className=" "
                size="5x"
                color="#f8f9fa"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="dashboard__user-icon"
                size="3x"
                color="#7c7d7d"
              />
            </span>
          </Col>
          <Col xs={9}>
            <h3>Bruno Soares</h3>
            <p className="text-muted">ag: 1234 | c/c: 12345-6</p>
          </Col>
        </Row>
        <div className="d-grid gap-2">
          <Button className="dashboard__button" variant="link" size="lg" block>
            Minha conta
          </Button>
          <Button className="dashboard__button" variant="link" size="lg" block>
            Pagamento
          </Button>
          <Button className="dashboard__button" variant="link" size="lg" block>
            Extrato
          </Button>
        </div>
      </Col>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
        <h3 className="my-5">
          <strong>Conta Corrente</strong>
        </h3>
        <h6>
          <strong>Saldo em conta corrente</strong>
        </h6>
        <h4 className="text-success mb-4">
          <small>R$</small> 3.500<small>,00</small>
        </h4>
        <h6>
          <strong>Cheque especial</strong>
        </h6>
        <p className="mb-0">Limite disponivel</p>
        <p className="mb-4">5.000,00</p>
        <Button variant="secondary">Ver extrato</Button>
      </Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;

