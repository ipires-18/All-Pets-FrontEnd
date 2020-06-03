import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './style.css';
import { Link } from 'react-router-dom';

const CardHearderEdicao = () =>{
    return(
        <>
        <Container className="container-header-edicao">
            <Row>
                <div className="header-edicao">
                    <Link className="font-type-infos">Informação Pessoal</Link>
                    <Link className="font-type-infos-2">Informação de Endereço</Link>
                    <Link className="font-type-infos-2">Informação do Pet</Link>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default CardHearderEdicao;