import React from 'react';
import './styles.css';
import BoxBody from '../../components/BoxBody';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function CadInfo() {
    return(
        <>
        <BoxBody />
        

        
            <Col className="bg-dark" xs={12} xl={6} md={12} lg={12} sm={12} style={{display:'flex', flexDirection:'column'}}>
            <Row>
            <div className="titulo" style={{color:'#c850c0', textAlign:'center', fontSize:'30px', fontWeight:"bold"}}>Informação Pessoal</div>



            <Form>
                <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                <Form.File.Label style={{color:"white"}}>Insira sua Foto</Form.File.Label>
                <Form.File.Input />
                </Form.File>
                </div>
            </Form>

            <Form>
            <Form.Group>
                <form className="circu">
                    <article className="circus-fi"/> 
                    <div style={{color:'rgb(211, 108, 211)', fontSize:'17px', fontWeight:"bold"}} className="t-a">Informações Pessoais</div>
                    
                    <article className="circus-se"/>
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-b">Selecione seu Perfil</div>

                    <article className="circus-te"/>
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-c">Informações de Serviços</div>

                    <article className="circus-qua"/>
                    <div style={{color:'white', fontSize:'17px', fontWeight:"bold"}} className="t-d">Confirmação</div>
            
                </form>
            </Form.Group>
            </Form>

        </Row>
        </Col>
        </>
    );
}