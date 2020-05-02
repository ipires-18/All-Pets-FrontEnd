import React from 'react';
import './styles.css';
import BoxBody from '../../components/BoxBody';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CuidadorPet from '../../assets/cuidador.jpg';

import Card from 'react-bootstrap/Card';

export default function CadPerfil(){
    return(
      <>
       <BoxBody/>

    <Row>
    <>
    <div className="titulo" style={{color:'#c850c0', textAlign:'center', fontSize:'30px', fontWeight:"bold"}}>Selecione o seu Perfil</div>
    <div className="card-container-perfil">
    <Card  border="warning" style={{ width: '20rem'}}>
    <ButtonGroup aria-label="Basic example">
      <Button variant="bg-warning" style={{color:'#9C27B0'}}><b>Dono de Pet</b></Button>
    </ButtonGroup>
       <Card.Body>
      <Card.Text>
        Para você que passa muito tempo fora de casa e fica preocupado com seu pet, para dar comida ou remédio, All Pets oferece a você um serviço de busca de cuidadores especializados no cuidado de pets.
      </Card.Text>
    </Card.Body>

    
    </Card>
    <br />
    </div>
    </>

    <>
    <div className="card-container-cuidador">
    <Card border="dark" style={{ width: '20rem' }}>
    <ButtonGroup aria-label="Basic example">
      <Button variant="bg-dark" style={{color:'#9C27B0'}}><b>Cuidador</b></Button>
    </ButtonGroup>
    <Card.Body>
        <Card.Text>
          Você que ama os animais, tem experiência na área ou trabalha com isso, esta é uma ótima oportunidade de cuidar bem desse bichinhos e ainda por cima conseguir uma renda extra pelo seus cuidados.                     
        </Card.Text>
    </Card.Body>
    
    </Card>
    </div> 
</>
    </Row>


    <Form>
            <Form.Group>
                <form className="circus">
                    <article className="circus-first"/> 
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-a">Informações Pessoais</div>
                    
                    <article className="circus-sec"/>
                    <div style={{color:' rgb(211, 108, 211)', fontSize:'17px', fontWeight:"bold"}} className="t-b">Selecione seu Perfil</div>

                    <article className="circus-terc"/>
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-c">Informações de Serviços</div>

                    <article className="circus-quart"/>
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-d">Confirmação</div>
            
                </form>
            </Form.Group>
            </Form>
      </>
      


    );
}
