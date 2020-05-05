import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonRoxo from '../ButtonRoxo/index'

export default function Busca(){
  return(
    <>
      <Container fluid>
        <Row>
          <Col className="card-col">
            <Card>
              <Card.Header style={{color:'#9C27B0', fontWeight:'bold', fontSize:"18px"}} >Busca Cuidadores</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Form.Label>Preço minimo*</Form.Label>
                      <Form.Control placeholder="Digite o preço minino" />
                    </Col>
                    <Col>
                      <Form.Label>Bairro*</Form.Label>
                      <Form.Control placeholder="Digite o bairro" />
                    </Col>
                    <Col>
                      <Form.Label>Horário*</Form.Label>
                      <Form.Control placeholder="Digite seu horario" />
                    </Col>
                    <Col>
                      <Form.Label>Data inicial*</Form.Label>
                      <Form.Control placeholder="Digite a data inicial" />
                    </Col>
                    <Col>
                      <Form.Label>Data final*</Form.Label>
                      <Form.Control placeholder="Digite a data final" />
                    </Col>
                    <ButtonRoxo nome="Buscar" color="#ECB1F6"/>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}