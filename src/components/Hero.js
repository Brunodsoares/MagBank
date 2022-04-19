import React from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import logomobo from '../assets/pay-mobile.png';
import logo from '../assets/pay-desktop.png';
import './Hero.scss'

const Hero = () => (
  <Card className="text-center py-lg-5 text-light hero">
    <Row className="py-4 py-lg-5 px-lg-5 gap-3">
      <Col lg classname="text-lg-end">
        <Image className="d-md-none" src={logomobo} />
        <Image className="d-none d-lg-inline-block" src={logo} />
      </Col>
      <Col lg className="text-lg-start py-lg-4">
        <p className="mt-5 mb-5">Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light">Abra sua conta</Button>
      </Col>
    </Row>
  </Card>
);

export default Hero;
