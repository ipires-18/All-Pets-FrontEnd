import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCol,MDBRow, MDBIcon, MDBProgress,MDBContainer,MDBInputGroup  } from 'mdbreact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoRoxo from '../../assets/logobranco.svg';
import './styles.css'
import Form from 'react-bootstrap/Form';
import ButtonRoxo from '../ButtonRoxo/index';


const CardLogin = () => {
  return (
    <main>
      <Container className="container-login">
            <Row>
            <MDBCol md='12'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-purple-strong py-5 px-4' style={{width:"100%"}}>
                  <div>
                    <h5 className='orange-text'>
                      <img src={LogoRoxo} alt="" style={{marginBottom:'20px'}}/>
                    </h5>
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Login</strong>
                    </MDBCardTitle>
                    <MDBContainer>
                    <Form style={{padding:"30px"}}>
                        <MDBRow>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Email</Form.Label>
                              <Form.Control size="lg" type="email" placeholder="Digite seu email" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Senha</Form.Label>
                              <Form.Control size="lg" type="password" placeholder="Digite sua senha" required/>
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                        <MDBCardTitle tag='h3' className='pt-2'>  
                            <Link to="/propostas"><ButtonRoxo nome="Entrar" color="#c850c0"/></Link>  
                            <Link to="/"><ButtonRoxo nome="Voltar" color="#BAA8A8"/></Link>  
                        </MDBCardTitle>
                      </Form>
                    </MDBContainer>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            </Row>
        </Container>
  </main>
    
  )
}

export default CardLogin;