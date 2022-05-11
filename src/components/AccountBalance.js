import React from "react";
import { Button, Col, Tabs, Tab, Table  } from "react-bootstrap";

const Accountbalance = ({ data }) => {

    const { latestBalance, futureBalance } = data;
    return (
  <>
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
              {latestBalance.map(({ date, description, value }) => (
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
              {futureBalance.map(({ date, description, value }) => (
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
  </>
)
    };

export default Accountbalance