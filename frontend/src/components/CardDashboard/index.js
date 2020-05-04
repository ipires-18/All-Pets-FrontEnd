import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Cao from '../../assets/cao.png';

export default function CardDashboard(){
  return(
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="espaco">
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                    <Col><img src={Cao} alt=""/></Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Dono</h4>
                      <h5>Davi Teixeira</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Animal</h4>
                      <h5>Thor</h5>
                    </p>
                    </Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Raça</h4>
                      <h5>Labrador</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Valor da Proposta</h4>
                      <h5>R$ 100,00</h5>
                    </p>
                    </Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="espaco">
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                    <Col><img src={Cao} alt=""/></Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Dono</h4>
                      <h5>Davi Teixeira</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Animal</h4>
                      <h5>Thor</h5>
                    </p>
                    </Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Raça</h4>
                      <h5>Labrador</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Valor da Proposta</h4>
                      <h5>R$ 100,00</h5>
                    </p>
                    </Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col>
            <Card className="espaco">
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                    <Col><img src={Cao} alt=""/></Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Dono</h4>
                      <h5>Davi Teixeira</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Animal</h4>
                      <h5>Thor</h5>
                    </p>
                    </Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Raça</h4>
                      <h5>Labrador</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Valor da Proposta</h4>
                      <h5>R$ 100,00</h5>
                    </p>
                    </Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="espaco">
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                    <Col><img src={Cao} alt=""/></Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Dono</h4>
                      <h5>Davi Teixeira</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Nome do Animal</h4>
                      <h5>Thor</h5>
                    </p>
                    </Col>
                    <Col>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Raça</h4>
                      <h5>Labrador</h5>
                    </p>
                    <p>
                      <h4 style={{fontWeight:'bold'}}>Valor da Proposta</h4>
                      <h5>R$ 100,00</h5>
                    </p>
                    </Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> 
        </Row>
      </Container>
    </>
  );
}