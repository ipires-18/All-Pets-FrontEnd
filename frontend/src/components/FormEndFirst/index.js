import React from 'react';
import './styles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function FormEndFirst(){
    return(
        <>
        
    <Form>
    <Form.Group as={Col} style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '600px'}}>
      <Form.Label>Rg</Form.Label>
      <Form.Control placeholder="000.000.000-0" />
    </Form.Group> 


  <Form.Group as={Col} style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '600px'}}>
      <Form.Label>CPF</Form.Label>
      <Form.Control placeholder="000.000.000-00" />
    </Form.Group> 
    
    <div className="tit" style={{color:'#c850c0', textAlign:'center', fontSize:'25px', fontWeight:"bold", position: 'relative', left:'120px', bottom: '610px' }}>
        Endereço
    </div>

   <Form.Group as={Col} controlId="formGridCity" style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '600px'}}>
      <Form.Label>Cidade</Form.Label>
      <Form.Control placeholder="São Paulo"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity" style={{width:'300px', color:'white', position: 'relative', left:'505px', bottom: '600px'}}>
      <Form.Label>Estado</Form.Label>
      <Form.Control placeholder="São Paulo"/>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridZip" style={{width:'300px',color:'white', position: 'relative', left:'505px', bottom: '600px'}}>
      <Form.Label>CEP</Form.Label>
      <Form.Control placeholder="12345-678"/>
    </Form.Group>
    
</Form>

        </>
    );

}