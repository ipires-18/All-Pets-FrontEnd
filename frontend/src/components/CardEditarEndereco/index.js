import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardEditarEndereco = () =>{
    return(
        <>
            <Container className="container-editar-endereco">
                <Row>
                    <div className="div-dado-endereco-1">
                        <p className="font-dados-endereco" style={{marginTop:"5vh"}}>Cep</p>
                        <input className="input-endereco" placeholder=""/>
                        <p className="font-dados-endereco">Cidade</p>
                        <input className="input-endereco" placeholder=""/>
                        <p className="font-dados-endereco">Endereço</p>
                        <input className="input-endereco" placeholder=""/>
                        <p className="font-dados-endereco">Complemento</p>
                        <input className="input-endereco" placeholder=""/>
                    </div>
                    <div className="div-dado-endereco-2">
                        <p className="font-dados-endereco" style={{marginTop:"5vh"}}>Estado</p>
                        <input className="input-endereco" placeholder=""/>
                        <p className="font-dados-endereco">Bairro</p>
                        <input className="input-endereco" placeholder=""/>
                        <p className="font-dados-endereco">Numero</p>
                        <input className="input-endereco" placeholder=""/>
                        <button className="button-salvar"><p className="salvar">Salvar</p></button>
                    </div>
                </Row>
            </Container>
        </>
    );
} 

export default CardEditarEndereco;