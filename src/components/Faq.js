import React, {useState} from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Listicon from "./Listicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldHalved,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Faq.scss";

const Faq = () => {
  const options = [
    {icon: faCreditCard, text: 'Cartão de credito'},
    {icon: faWallet, text: 'Conta e abertura'}, 
    {icon: faShieldHalved, text: 'Token digital'}, 
    {icon: faUserTie, text: 'Produtos e serviços'},
  ];

  const [index, setIndex] = useState(0); 
  
  const handleClick = (key) => {
    console.log('click')
    setIndex(key);
  };

  return (
    <section className="faq">
      <Container className="py-5">
        <h2 className="title__faq mb-5 text-center">Dúvidas frequentes</h2>
        <Row className=" d-flex align-items-center justify-items-center">
          <Col className="d-lg-none" xs={12}>
            <Row className="mb-5">
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? "#fff" : "#BBB"}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <Listicon
                icon={icon}
                size={3}
                className={"faq-clickable mb-3"}
                textClassName="lead"
                color={key === index ? "#FFF" : "#BBB"}
                onclick={() => handleClick(key)}
                key={key}
              >
                {text}
              </Listicon>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey='0' activeKey={`${index}`}>
              <Accordion.Item eventKey="0" className="faq__accordion">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body className="accordion--bg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="faq__accordion">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body className="accordion--bg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="faq__accordion">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body className="accordion--bg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="faq__accordion">
                <Accordion.Header>Accordion Item #4</Accordion.Header>
                <Accordion.Body className="accordion--bg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
  };

export default Faq;
