import React from 'react';
import {Link } from 'react-router-dom';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Header(){
  return(
    <>
      <Container fluid>
        <Row>
          <Col>
          <Card className="text-center">
           
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}