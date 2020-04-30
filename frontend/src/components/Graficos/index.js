import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Chart from "react-google-charts";

export default function Graficos(){
    return(
      <>
        <Container fluid >
          <Row>
            <Col>
              <Card style={{ width: '18rem',textAlign:'center',border:'3px solid'}}>
                <Card.Header>Serviços Prestados</Card.Header>
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}><h1 style={{textAlign:'center'}}>21</h1> </Card.Title>
                  <Card.Text>
                  Total de serviços prestados até hoje  
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card border="success" style={{ width: '18rem',textAlign:'center',border:'3px solid'}}>
                  <Card.Header>Media de lucro</Card.Header>
                  <Card.Body>
                    <Card.Title> <span>Media de lucro por dia</span>  </Card.Title>
                    <Card.Text>
                    <h3 style={{textAlign:'center'}}>R$ 800,00</h3> 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
            </Col>
            <Col>
              <Card style={{ width: '18rem',textAlign:'center',border:'3px solid'}}>
                  <Card.Header>Horas de Serviço</Card.Header>
                  <Card.Body>
                    <Card.Title><h3 style={{textAlign:'center'}}>31 horas </h3> </Card.Title>
                    <Card.Text>
                      <span>Total de horas de serviços prestados nos ultimos 7 dias</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
            </Col>
          </Row>
          <Row>
            <Col>
           
            <Card className="bg-dark text-white">
            <Card.Header> <h3 style={{color:'#000'}}>Lucro por Mês</h3></Card.Header>
                  <Card.Text>   
                  <Chart
                          width={'500px'}
                          height={'300px'}
                          chartType="BarChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            [
                              'Element',
                              'Lucro',
                              { role: 'style' },
                              {
                                sourceColumn: 0,
                                role: 'annotation',
                                type: 'string',
                                calc: 'stringify',
                              },
                            ],
                            ['17/03', 850.00, '#c850c0', null],
                            ['16/03', 500.00, '#c850c0', null],
                            ['15/03', 200.0, '#c850c0', null],
                        
                          ]}
                          options={{
                            title: '',
                            width: 1300,
                            height: 300,
                            bar: { groupWidth: '95%' },
                            legend: { position: 'none' },
                          }}
                          // For tests
                          rootProps={{ 'data-testid': '6' }}
                        />
                  </Card.Text>
            </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}