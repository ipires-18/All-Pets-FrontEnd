import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardHeaderBusca = () =>{
    return (
        <>
        <Container className="container-busca">
            <Row>
                <h3 className="title-busca">Busca</h3>
                <div>
                    <p className="font-busca-1">Cidade</p>
                    <input className="input-busca" placeholder="ex: São Paulo"/>
                    <p className="font-busca-1">Descrição</p>
                    <input className="input-descricao" placeholder="ex: banho no pet, passeio com pet..."/>
                    
                </div>
                <div>
                    <p className="font-busca-2">Bairro*</p>
                    <input className="input-busca" placeholder=""/>
                </div>
                <div>
                    <p className="font-busca-2">Valor Maxímo p/hora </p>
                    <input className="input-busca" placeholder=""/>
                </div>
                <div>
                    <p className="font-busca-2">Quantidade de horas</p>
                    <input className="input-busca" placeholder=""/>
                </div>
                <div>
                    <p className="font-busca-2">Nome do Pet</p>
                    <input className="input-busca" placeholder=""/>
                    
                </div>
                <div>
                    <button className="button-buscar"><p className="buscar">Buscar Cuidador</p></button>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default CardHeaderBusca;