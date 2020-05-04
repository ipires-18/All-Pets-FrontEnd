import React from 'react';
import './styles.css'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import RegPet from '../../assets/dog.svg';
import PerfilLogo from '../../assets/logo_branco.svg';


export default function BoxBody(){
    return(
        <Container className="container-body">
        <Row>
        <Col className="bg-dark corpo" xs={12} xl={6} md={12} lg={12} sm={12}><img src={RegPet} alt="Dog" className="responsive"/></Col>
        <Col className="bg-dark" xs={12} xl={6} md={12} lg={12} sm={12} style={{display:'flex', flexDirection:'column'}} >
                
        <div className="registers-container">
            <div className="register">
                <article className="logo-body">
                <img src={PerfilLogo} alt="Logo"/>
                </article>         
         </div>
        </div>

        <Form>
            <Form.Group>
                <form className="circus">
                    <article className="circus-first"/> 
                    <div style={{fontSize:'17px', fontWeight:"bold"}} className="t-a">Informações Pessoais</div>
                    
                    <article className="circus-secs"/>
                    <div style={{fontSize:'17px', fontWeight:"bold"}} className="t-b">Selecione seu Perfil</div>

                    <article className="circus-terc"/>
                    <div style={{fontSize:'17px', fontWeight:"bold"}} className="t-c">Informações de Serviços</div>

                    <article className="circus-quart"/>
                    <div style={{fontSize:'17px', fontWeight:"bold"}} className="t-d">Confirmação</div>
            
                </form>
            </Form.Group>
            </Form>
           
          <div className="container-buttons">
                        <Button style={{backgroundColor:'#c850c0', border:'none',marginRight:"30px", width:"150px", height:"50px"}} type="submit">
                          Proximo
                        </Button>

                        <Button style={{backgroundColor:'#c850c0', border:'none',  width:"150px", height:"50px"}} type="submit">
                          Voltar
                        </Button>
            </div>

            </Col>

        </Row>
        </Container>
    );
}