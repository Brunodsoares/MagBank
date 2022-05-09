import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons"; 

import "./Dashboard.scss"

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="aling-items-center">
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
      </Col>
      <Col xs={12} lg={3}></Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;

