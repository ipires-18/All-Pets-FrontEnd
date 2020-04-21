import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import LoginPets from '../../assets/dog.svg'
import LogoRoxo from '../../assets/logo_roxo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


//import {FiLogIn} from 'react-icons/fi' //Usaremos para icone feathericons ---> Link do site com os nomes https://feathericons.com/

export default function Login(){
    return(
      <>
        <Container className="container-login ">
            <Row>
                <Col className="bg-dark" xs={12} xl={6} md={12} lg={12} sm={12}><img src={LoginPets}   className="responsive"/></Col>
                <Col className="bg-dark" xs={12} xl={6} md={12} lg={12} sm={12} style={{display:'flex', flexDirection:'column'}} >
                    <div style={{textAlign:'center', padding:"50px 0"}}><img src={LogoRoxo}/></div>
                    <div style={{color:'#c850c0', textAlign:'center', fontSize:'50px', fontWeight:"bold"}}>Login</div>
                    <div style={{color:'#FFF'}}>
                    <Form style={{padding:"30px"}}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="titulo-label">Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Digite seu email"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label className="titulo-label">Senha</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Digite sua senha"/>
                      </Form.Group>
                      <div className="container-button">
                        <Button style={{backgroundColor:'#c850c0', border:'none',marginRight:"30px", width:"150px", height:"50px"}} type="submit">
                          Entrar
                        </Button>

                        <Button style={{backgroundColor:'#c850c0', border:'none',  width:"150px", height:"50px"}} type="submit">
                          Cadastrar-se
                        </Button>
                      </div>
                    </Form>
                    </div>
                    <div className="container-link">
                      <Link  className="titulo-link" to={"/esqueceu"}>Esqueceu a senha?</Link>
                      <Link  className="titulo-link2" to={"/home"}>Voltar a home</Link>
                    </div>
                </Col>
            </Row>
        </Container>
      </>
    );
}