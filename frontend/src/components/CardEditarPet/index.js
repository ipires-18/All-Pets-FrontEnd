import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardEditarPet = () =>{
    return(
        <>
            <Container className="container-pet">
                <Row>
                    <div className="div-dados-pet-1">
                        <p className="font-dados-pet" style={{marginTop:"4vh"}}>Nome do PET*</p>
                        <input className="input-pet" placeholder="Nome do Pet"/>
                        <p className="font-dados-pet">Sexo</p>
                        <input className="input-pet" placeholder="Macho ou Femêa"/>
                        <p className="font-dados-pet">Raça*</p>
                        <input className="input-pet" placeholder="ex: Golden"/>
                        <p className="font-dados-pet">Toma medicamento*</p>
                        <input className="input-pet" placeholder="Sim ou Não"/>
                        <p className="font-dados-pet">Qual Horario?</p>
                        <input className="input-pet" placeholder="ex: 19:00"/>
                    </div>
                    <div className="div-dados-pet-2">
                        <p className="font-dados-pet" style={{marginTop:"4vh"}}>Registro Geral do Animal</p>
                        <input className="input-pet" placeholder="ex: 123123"/>
                        <p className="font-dados-pet">Idade*</p>
                        <input className="input-pet" placeholder="ex: 2 anos"/>
                        <p className="font-dados-pet">Qual o Porte do seu Pet?*</p>
                        <input className="input-pet" placeholder="ex: Grande, Médio e Pequeno"/>
                        <p className="font-dados-pet">Nome do Remédio</p>
                        <input className="input-pet" placeholder="ex: Dramin"/>
                        <button className="button-salvar"><p className="salvar">Salvar</p></button>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default CardEditarPet;