import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./CardsList.scss";

const CardsList = ({ posts }) => (
  <Container className='my-lg-5'>
    <Row>
      {posts &&
        posts.map(({ id, image, title, excerpt, action}) => (
        <Col xs={12} lg={4} key={id}>
          <Card className='mx-auto my-3'>
            <Card.Img variant='top' src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{excerpt}</Card.Text>
              <Button variant='danger'>{action}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardsList;
