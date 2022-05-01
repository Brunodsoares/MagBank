import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sus conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="forBasicName">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="seu nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Sua cidade</Form.Label>
          <Form.Control as="select">
            <option value="1">Florianopoles - SC</option>
            <option value="2">Curitiba - PR</option>
            <option value="3">São paulo - SP</option>
            <option value="4">Rio de Janeiro - RJ</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form.Check type="checkbox" id="custom-checkbox" label="Eu li e concorso com os termos de uso." />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Criar Conta
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;
