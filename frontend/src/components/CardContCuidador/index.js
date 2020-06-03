import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

const CardContCuidador = () => {
    return(
        <main>
        <Container fluid = "md">
        <Row>

        <Col className="body-cont"> 
            <div className="text-body-cont">Descrição do Serviço</div>

            <div className="text-body-congrat">Parabéns, agora só falta ir até o cliente e confirmar o serviço!!</div>

        <Form className="form-body-cont">

        <Form.Group controlId="formGridAddress1" className="cont-body-form">
            <Form.Label>Endereço</Form.Label>
            <Form.Control placeholder="Digite o seu endereço" />
        </Form.Group>

        <Form.Row className="cont-font-coluna">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
        <Form.Control type="email" placeholder="Digite sua Cidade" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control  placeholder="CEP" />
        </Form.Group>
        </Form.Row>

        <div className="text-cont">Contato</div>
            
        <Form.Row className="cont-font-coluna">
        <Form.Group as={Col}>
            <Form.Label>Telefone</Form.Label>
            <Form.Control placeholder="Whatsapp" />
        </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>        
        </Form.Row>

        <div className="text-cont">Informações do Cliente</div>

        <Form.Row className="cont-font-coluna">
            <Form.Group as={Col}>
            <Form.Label>Nome do Cliente</Form.Label>
        <Form.Control placeholder="Seu nome" />
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Label>Quantidade de Horas</Form.Label>
            <Form.Control  placeholder="Horas" />
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1" className="cont-body-client">
            <Form.Label>Descrição do Serviço</Form.Label>
            <Form.Control placeholder="Dê uma descrição do serviço" />
        </Form.Group>

        <Form.Row className="cont-font-coluna">
            <Form.Group as={Col}>
            <Form.Label>Nome do Animal</Form.Label>
        <Form.Control placeholder="Nome do animal" />
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Label>Idade</Form.Label>
            <Form.Control  placeholder="Idade" />
        </Form.Group>
        </Form.Row>

        <Form.Row className="cont-font-col">
            <Form.Group as={Col} className="body-contet-rac">
            <Form.Label>Raça</Form.Label>
            <Form.Control placeholder="Digite a raça" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1" className="selec-body">
        <Form.Label>Porte</Form.Label>
        <Form.Control as="select">
            <option>---</option>
            <option>Pequeno</option>
            <option>Médio</option>
            <option>Grande</option>
        </Form.Control>
        </Form.Group>
        </Form.Row>

    
    <ButtonGroup className="mr-4" >
      <Button className="button-reject" variant="light" style={{borderRadius:'5px', color:'gray'}}>Rejeitar</Button>
      <Button className="button-acept" variant="secondary" style={{borderRadius:'5px'}}>Aceitar</Button>
    </ButtonGroup>
    
        
        

        </Form>
                  
        </Col>
        </Row>
        </Container>
        </main>
    )
}

export default CardContCuidador;