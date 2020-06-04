import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardEditarEndereco = () =>{
    return(
        <>
            <Container className="container-editar-endereco">
                <Row>
                    <div className="div-dados-endereco-1">
                        <p className="font-dados-endereco" style={{marginTop:"5vh"}}>Cep*</p>
                        <input className="input-endereco" placeholder="ex: 12312-123"/>
                        <p className="font-dados-endereco">Cidade*</p>
                        <input className="input-endereco" placeholder="ex: São Paulo"/>
                        <p className="font-dados-endereco">Logradouro*</p>
                        <input className="input-endereco" placeholder="ex: Avenida, Rua, Chacará..."/>
                        <p className="font-dados-endereco">Complemento</p>
                        <input className="input-endereco" placeholder="ex: casa, bloco, apartamento..."/>
                    </div>
                    <div className="div-dados-endereco-2">
                        <p className="font-dados-endereco" style={{marginTop:"5vh"}}>Estado*</p>
                        <input className="input-endereco" placeholder="ex: SP"/>
                        <p className="font-dados-endereco">Bairro*</p>
                        <input className="input-endereco" placeholder="ex: Mooca"/>
                        <p className="font-dados-endereco">Numero*</p>
                        <input className="input-endereco" placeholder="ex: 123"/>
                        <button className="button-salvar"><p className="salvar">Salvar</p></button>
                    </div>
                </Row>
            </Container>
        </>
    );
} 

export default CardEditarEndereco;