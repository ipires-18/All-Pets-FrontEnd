import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCol,MDBRow, MDBIcon, MDBProgress,MDBContainer,MDBInputGroup  } from 'mdbreact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoRoxo from '../../assets/logobranco.svg';
import './styles.css'
import Form from 'react-bootstrap/Form';
import ButtonRoxo from '../ButtonRoxo/index';

const CardEndereco = () => {
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
                      <MDBProgress value={30} className="my-2" className="rgba-purple-strong" > 30%</MDBProgress>
                    </h5>
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Informações Endereço</strong>
                    </MDBCardTitle>
                    <MDBContainer>
                    <Form style={{padding:"30px"}}>
                        <MDBRow>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Cep</Form.Label>
                              <Form.Control size="lg" type="number" placeholder="Digite seu cep" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Pais</Form.Label>
                              <Form.Control size="lg" type="text" placeholder="Digite seu pais" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Estado</Form.Label>
                              <Form.Control size="lg" type="text" placeholder="Digite seu estado" required/>
                            </Form.Group>
                          </MDBCol>
                          <MDBCol md="12">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label className="titulo-label" style={{color:"#FFF", display:'flex', alignItems:'flex-start'}}>Cidade</Form.Label>
                              <Form.Control size="lg" type="text" placeholder="Digite sua cidade" required/>
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                        <MDBCardTitle tag='h3' className='pt-2'>  
                            <Link to="/enderecocomple"><ButtonRoxo nome="Continuar" color="#c850c0"/></Link>  
                            <Link to="/pessoal"><ButtonRoxo nome="Voltar" color="#BAA8A8"/></Link>  
                           
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

export default CardEndereco;