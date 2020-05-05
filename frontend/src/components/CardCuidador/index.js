import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCol,MDBRow, MDBIcon, MDBProgress,MDBContainer,MDBInputGroup  } from 'mdbreact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoRoxo from '../../assets/logobranco.svg';
import './styles.css'
import Form from 'react-bootstrap/Form';
import ButtonRoxo from '../ButtonRoxo/index';

const CardCuidador = () => {
  return (
    <main>
      <Container className="container-login">
            <Row>
            <MDBCol md='12'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')"
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-purple-strong py-5 px-4' style={{width:"100%"}}>
                  <div>
                    <h5 className='orange-text'>
                      <img src={LogoRoxo} alt="" style={{marginBottom:'20px'}}/>
                      <MDBProgress value={70} className="my-2" className="rgba-purple-strong" > 70%</MDBProgress>
                    </h5>
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Informações Cuidador</strong>
                    </MDBCardTitle>
                    <MDBContainer>
                    <Form style={{padding:"30px"}}>
                        <MDBRow>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Graduação</Form.Label>
                              <Form.Control size="lg" type="text" placeholder="Digite sua graduação" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Especialidade</Form.Label>
                              <Form.Control size="lg" type="text" placeholder="Digite seu especialidade" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Valor em Horas</Form.Label>
                              <Form.Control size="lg" type="number" placeholder="Digite o valor a se pago em horas" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Horario inicial</Form.Label>
                              <Form.Control size="lg" type="number" placeholder="Digite sua hora de inicio" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Horario Final</Form.Label>
                              <Form.Control size="lg" type="number" placeholder="Digite sua hora de final" required/>
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                        <MDBCardTitle tag='h3' className='pt-2'>
                            <Link to="/termos"><ButtonRoxo nome="Continuar" color="#c850c0"/></Link>  
                            <Link to="/perfil"><ButtonRoxo nome="Voltar" color="#BAA8A8"/></Link>  
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

export default CardCuidador;