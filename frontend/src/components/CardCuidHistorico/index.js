import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'


const CardCuidHistorico = () => {
        return(
            <main>
                <Container className="box-full">
                    <Row>
                        <div className="boxs-a" >       
                            <div className="text-box-a">Serviços Prestados</div>
                            <div className="num-box-a">21</div>  
                            <div className="p-box-a">Total de serviços prestados até hoje</div>                              
                        </div>

                        <div className="boxs-b">       
                            <div className="text-box-b">Horas de Serviço</div>
                            <div className="num-box-b">31 Hrs</div>     
                            <div className="p-box-b">Total de horas de serviços prestados nos últimos 7 dias</div>                           
                        </div>
                       
                    </Row> 
                    <div className="box-tlist" style={{width:"1100px"}}> 
                    <div className="t-box-x">Lista de Serviços</div>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                            <th>Nome do Cliente</th>
                            <th>Descrição</th>
                            <th>Quantidade de Horas</th>
                            <th>Nome do Animal</th>
                            <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Alfred Rocha</td>
                            <td>Banho em Pet</td>
                            <td>2 Horas</td>
                            <td>Penelope</td>
                            <td>R$100,00</td>
                            </tr>
                            <tr>
                            <td>Marilia Mendonça</td>
                            <td>Banho em Pet</td>
                            <td>3 Horas</td>
                            <td>Sofrido</td>
                            <td>R$150,00</td>
                            </tr>
                            <tr>
                            <td>Cristana Oliveira</td>
                            <td>Passeio</td>
                            <td>5 Horas</td>
                            <td>Fifi</td>
                            <td>R$100,00</td>
                            </tr>
                        </tbody>
                        </Table>
                                        
                    </div> 
                             
                </Container>
            </main>
        )

}   

export default CardCuidHistorico;
