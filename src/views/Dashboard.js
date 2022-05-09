import React from "react";
import {Button, Col, Container, Row, Tab, Tabs, Table} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss"

const Dashboard = () => {
    const latestData = [
        { date: '22/07', description: 'SAQUE 24h 12345', value: '300,00' },
        { date: '25/07', description: 'SUPERMERCADO 6151321', value: '275,00' },
        { date: '25/07', description: 'NETFLIX 12656', value: '30,00' },
        { date: '26/07', description: 'FARMACIA (1/2) 12345', value: '350,00' },
    ];

    const futureData = [
        { date: '22/08', description: 'CONVENIO  137822345', value: '500,00' },
        { date: '25/08', description: 'TELEFONE 6151321', value: '150,00' },
        { date: '25/08', description: 'NETFLIX 12656', value: '30,00' },
        { date: '26/08', description: 'FARMACIA (2/2) 12345', value: '350,00' },
        { date: '30/08', description: 'IMAGINESCHOOL () 983264', value: '180,00' },
    ];

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
      <Col xs={12} lg={5} className="my-5 mt-lg-5 pt-lg-5">
        <Tabs
          className="mt-5 pt-lg-5 mb-3"
          defaultActiveKey="latest"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="latest" title="Últimos lançamentos">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor(R$)</th>
                </tr>
              </thead>
              <tbody>
                {latestData.map(({ date, description, value }) => (
                  <tr>
                    <th>{date}</th>
                    <th>{description}</th>
                    <th>{value}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="future" title="Lançamentos futuros">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor(R$)</th>
                </tr>
              </thead>
              <tbody>
              {futureData.map(({ date, description, value }) => (
                <tr>
                  <th>{date}</th>
                  <th>{description}</th>
                  <th>{value}</th>
                </tr>
              ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
)};

export default Dashboard;

