import React from 'react';
import'./styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardEditarDono = () =>{
    return(
        <>
            <Container className="container-editar-dono">
                <Row>
                    <div className="div-dados-dono-1">
                        <p className="font-dados-dono" style={{marginTop:"5vh"}}>Nome Completo</p>
                        <input className="input-dono" placeholder="Nome Completo"/>
                        <p className="font-dados-dono">Senha Atual</p>
                        <input className="input-dono" placeholder="Senha Atual"/>
                        <p className="font-dados-dono">Confirmar Nova Senha</p>
                        <input className="input-dono" placeholder="Confirmar Nova Senha"/>
                    </div>
                    <div className="div-dados-dono-2">
                        <p className="font-dados-dono" style={{marginTop:"5vh"}}>E-mail</p>
                        <input className="input-dono" placeholder="ex: example@example.com"/>
                        <p className="font-dados-dono">Nova Senha</p>
                        <input className="input-dono" placeholder="Nova Senha"/><br/>
                        <button className="button-salvar">Salvar</button>
                    </div>
                    
                </Row>
            </Container>
        </>
    );
}

export default CardEditarDono;