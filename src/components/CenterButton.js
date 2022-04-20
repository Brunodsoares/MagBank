import React from "react";
import { Container, Row, Button } from 'react-bootstrap';

const CenterButton = ({ children }) => (
  <Container className="d-flex justify-content-center">
    <Row>
      <Button className="my-5" variant="success" size="lg">
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenterButton;