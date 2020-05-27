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
                        <input className="font-info-resp-p" placeholder="Katia Silva"></input>
                        <p className="font-info-title-p">Região</p>
                        <input className="font-info-resp-p" placeholder="Vila Ede - Centro - SP"></input>
                        <p className="font-info-title-p">Graduação</p>  
                        <input className="font-info-resp-p" placeholder="Tecnico em Veterinária"></input>                    
                    </div>
                    <div className="info-servico">
                        <p className="info-servico-s">Informações de Serviço</p>
                        <p className="font-info-title-s">Especialidade</p>
                        <input className="font-info-resp-s" placeholder="Labrador"></input>
                        <p className="font-info-title-s">Dias Disponiveis</p>
                        <input className="font-info-resp-s" placeholder="Seg, Ter"></input>
                        <p className="font-info-title-s">Horário</p>  
                        <input className="font-info-resp-s" placeholder="8:00h ás 22:00h"></input>                    
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