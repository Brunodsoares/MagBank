import React from "react";
import {Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss"

const Dashboard = () => {
    const data = {
      latestBalance: [
        { date: '22/07', description: 'SAQUE 24h 12345', value: '300,00' },
        { date: '25/07', description: 'SUPERMERCADO 6151321', value: '275,00' },
        { date: '25/07', description: 'NETFLIX 12656', value: '30,00' },
        { date: '26/07', description: 'FARMACIA (1/2) 12345', value: '350,00' },
    ],
    futureBalance: [
        { date: '22/08', description: 'CONVENIO  137822345', value: '500,00' },
        { date: '25/08', description: 'TELEFONE 6151321', value: '150,00' },
        { date: '25/08', description: 'NETFLIX 12656', value: '30,00' },
        { date: '26/08', description: 'FARMACIA (2/2) 12345', value: '350,00' },
        { date: '30/08', description: 'IMAGINESCHOOL 983264', value: '180,00' },
    ],
  };

    return (
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
      <AccountBalance data={data} />
    </Row>
  </Container>
)
};

export default Dashboard;

