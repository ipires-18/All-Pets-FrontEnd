import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './style.css';
import Row from 'react-bootstrap/Row';


const CardPainelContrato = () =>{
    return(
        <>
            <Container className="container-contrato">
                <Row>
                    <div className="info-pessoais">
                        <p className="info-pessoais-p">Informações Pessoais</p>
                        <p className="font-info-title-p">Nome</p>
                        <p className="font-info-resp-p">Katia Silva</p>
                        <p className="font-info-title-p">Região</p>
                        <p className="font-info-resp-p">Vila Ede - Centro - SP</p>
                        <p className="font-info-title-p">Graduação</p>  
                        <p className="font-info-resp-p">Tecnico em Veterinária</p>                    
                    </div>
                    <div className="info-servico">
                        <p className="info-servico-s">Informações de Serviço</p>
                        <p className="font-info-title-s">Especialidade</p>
                        <p className="font-info-resp-s">Labrador</p>
                        <p className="font-info-title-s">Dias Disponiveis</p>
                        <p className="font-info-resp-s">Seg, Ter</p>
                        <p className="font-info-title-s">Horário</p>  
                        <p className="font-info-resp-s">8:00h ás 22:00h</p>                    
                    </div>
                    <div className="status">
                        <h3 className="status-title">Status</h3>
                        <h4 className="status-resp">Na espera da aprovação do Cuidador</h4>
                        <button className="button-status"><p className="cancel">Cancelar</p></button>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default CardPainelContrato;