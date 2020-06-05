import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardResultado = () =>{
    return(
        <>
            <Container>   
                <Row>
                    <section>
                        
                    </section>


                    <div >
                        <p className="font-resultado">Nome</p><br/>
                        <p className="font-resultado-r">Katia Silva</p>
                        <p className="font-resultado">Graduação</p><br/>
                        <p className="font-resultado-r">Tecnica</p>
                    </div>
                    <div>
                        <p className="font-resultado" >Região</p><br/>
                        <p className="font-resultado-r"> Zona Lest - SP</p>
                        <p className="font-resultado" >Valor por Hora</p><br/>
                        <p className="font-resultado-r">R$ 100,00</p>
                    </div>
                    <div>
                        <button>Contratar</button>
                    </div>
                </Row>
            </Container>        
        </>
    );
}

export default CardResultado;
