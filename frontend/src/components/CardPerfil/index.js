import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBView, MDBCol,MDBRow, MDBIcon, MDBProgress,MDBContainer, MDBCardBody, MDBCardImage,  MDBCardText,  } from 'mdbreact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoRoxo from '../../assets/logobranco.svg';
import BannerDono from '../../assets/dono.svg';
import BannerCuidador from '../../assets/cuidador.svg';
import './styles.css'
import Form from 'react-bootstrap/Form';
import ButtonRoxo from '../ButtonRoxo/index';


const CardPerfil = () => {
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
                      <MDBProgress value={50} className="my-2" className="rgba-purple-strong" > 50%</MDBProgress>
                    </h5>
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Informações Perfil</strong>
                    </MDBCardTitle>
                    <MDBContainer>
                        <Form style={{padding:"30px"}}>
                          <MDBRow>
                            <MDBCol md="6">
                               <MDBCard wide cascade>
                                <Link to='/animal'>
                                  <MDBView cascade>
                                        <MDBCardImage
                                          hover
                                          overlay='white-slight'
                                          className='card-img-top'
                                          src={BannerDono}
                                          alt='Card cap'
                                        />
                                      </MDBView>
                                  </Link> 
                                  <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                      <strong style={{color:'#2196F3'}}>Donos</strong>
                                  </MDBCardTitle>

                                    <p className='font-weight-bold blue-text'>Missão</p>

                                    <MDBCardText>
                                     Para você que passa muito tempo fora de casa e fica preocupado com seu pet,
                                     para dar comida ou remédio, All Pets oferece a você um serviço de busca de 
                                     cuidadores especializados no cuidado de pets.{' '}
                                    </MDBCardText>
                                  </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBCard wide cascade>
                                <Link to='/cuidador'>
                                    <MDBView cascade>
                                      <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src={BannerCuidador}
                                        alt='Card cap'
                                      />
                                    </MDBView>
                                  </Link>
                                  <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                      <strong style={{color:'#2196F3'}}>Cuidadores</strong>
                                  </MDBCardTitle>

                                    <p className='font-weight-bold blue-text'>Missão</p>

                                    <MDBCardText>
                                      Você que ama os animais, tem experiência na área ou trabalha com isso, 
                                      esta é uma ótima oportunidade de cuidar bem desse bichinhos e ainda por 
                                      cima conseguir uma renda extra pelo seus cuidados.{' '}
                                    </MDBCardText>
                                  </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                          </MDBRow>
                        </Form>
                    </MDBContainer>
                    <MDBCardTitle tag='h3' className='pt-2'>  
                            <Link to="/enderecocomple"><ButtonRoxo nome="Voltar" color="#BAA8A8"/></Link>  
                        </MDBCardTitle>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            </Row>
        </Container>
  </main>
    
  )
}

export default CardPerfil;