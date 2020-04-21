import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ModalForm() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Link style={{textAlign:'start',color:'#c850c0', fontWeight:'700', paddingRight:"20px"}} 
      onClick={() => setShow(true)}>Esqueceu a senha?</Link>
 

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Recuperação de senha
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Informe seu email" />
              <Form.Text className="text-muted">
                Informe seu email para nós enviarmos as informações para recuperação
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}