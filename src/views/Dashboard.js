import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);


   const links = [
     { text: "Minha Conta", path: "/dashboard" },
     { text: "Pagamentos", path: "payments" },
     { text: "Extrato", path: "history" },
   ];

  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE 24h 12345", value: "300,00" },
      { date: "25/07", description: "SUPERMERCADO 6151321", value: "275,00" },
      { date: "25/07", description: "NETFLIX 12656", value: "30,00" },
      { date: "26/07", description: "FARMACIA (1/2) 12345", value: "350,00" },
    ],
    futureBalance: [
      { date: "22/08", description: "CONVENIO  137822345", value: "500,00" },
      { date: "25/08", description: "TELEFONE 6151321", value: "150,00" },
      { date: "25/08", description: "NETFLIX 12656", value: "30,00" },
      { date: "26/08", description: "FARMACIA (2/2) 12345", value: "350,00" },
      { date: "30/08", description: "IMAGINESCHOOL 983264", value: "180,00" },
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
            {links.map(({ text, path }, key) => (
              <Link to={path}>
                <Button
                  className={`dashboard__button ${
                  key === activeLink ? 'dashboard__button--active' : ''
                }`}
                  variant="link"
                  size="lg"
                  block
                  onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link>
            ))}
            {/* <Link to="/dashboard">
              <Button
                className="dashboard__button"
                variant="link"
                size="lg"
                block
              >
                Minha conta
              </Button>
            </Link>
            <Link to="/dashboard/payments">
              <Button
                className="dashboard__button"
                variant="link"
                size="lg"
                block
              >
                Pagamento
              </Button>
            </Link>
            <Link to="/dashboard/history">
              <Button
                className="dashboard__button"
                variant="link"
                size="lg"
                block
              >
                Extrato
              </Button>
            </Link> */}
          </div>
        </Col>
        <Routes>
          <Route path="history" element={<AccountBalance />} />
          <Route path="payments" element={<AccountBalance />} />
          <Route path="/" element={<AccountBalance data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default Dashboard;
