import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const CardCuidEdit = () => {
    return(
        <main>
            <div className="bodys-navs">
            <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link eventKey="link-2" style={{color:"black", fontWeight: "bold"}}>Informação Pessoal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" style={{color:"black", fontWeight: "bold"}}>Informação de Endereço</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3"  style={{color:"black", fontWeight: "bold"}}>Informação do Cuidador</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>

            <Container>
                <Form className="fm-body">
                <Row>
                    <Col>
                    <Form.Label>Graduação*</Form.Label>
                    <Form.Control placeholder="Digite sua graduação" />
                    </Col>
                   
                    <Col>
                    <Form.Label>Valor da sua Hora</Form.Label>
                    <Form.Control type="number" placeholder="Digite o valor de sua hora" />
                    </Col>
                </Row>
                <br/>
                <ButtonGroup className="mr-4" >
                <Button className="button-reject-a" variant="light" style={{borderRadius:'5px', color:'gray'}}>Rejeitar</Button>
                <Button className="button-acept-b" variant="secondary" style={{borderRadius:'5px'}}>Aceitar</Button>
                </ButtonGroup>
                </Form>
            </Container>
        </main>
    )
}
export default CardCuidEdit;