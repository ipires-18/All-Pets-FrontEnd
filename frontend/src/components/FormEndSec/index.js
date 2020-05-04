import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormEndSec() {
    return(
        <>

  <Form.Group as={Col} controlId="formGridCity" style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '550px'}}>
      <Form.Label>Bairro</Form.Label>
      <Form.Control placeholder="Casa Verde"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity" style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '550px'}}>
      <Form.Label>Endereço</Form.Label>
      <Form.Control placeholder="Rua Atílio Piffer"/>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridZip" style={{width:'300px',color:'white', position: 'relative', left:'505px', bottom: '550px'}}>
      <Form.Label>Complemento</Form.Label>
      <Form.Control placeholder="Apto 14"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity" style={{width:'120px', color:'white', position: 'relative', left:'505px', bottom: '550px'}}>
      <Form.Label>Numero</Form.Label>
      <Form.Control placeholder="123"/>
    </Form.Group>

        </>
    );
}