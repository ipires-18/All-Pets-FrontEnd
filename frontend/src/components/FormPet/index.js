import React from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function FormPet(){
    return(
        <>
        <div className="h1-pet" style={{color:'#c850c0', textAlign:'center', fontSize:'25px', fontWeight:"bold" }}>
        Informação do Pet
    </div>

    <Form.Group as={Col} style={{width:'300px', color:'white', position: 'relative', left:'465px', bottom: '580px'}}>
      <Form.Label>Nome do Pet*</Form.Label>
      <Form.Control placeholder="Bolinha"/>
    </Form.Group>

    <Form.Group as={Col} style={{width:'445px',color:'white', position: 'relative', left:'465px', bottom: '580px'}}>
      <Form.Label>Registro Geral do Animal</Form.Label>
      <Form.Control placeholder="12345"/>
    </Form.Group>

    <div className="sex-t">Sexo</div>
    <div className="bts-body">
    <Button style={{backgroundColor:'#c850c0', border:'none',marginRight:"10px", width:"88px", height:"35px"}} type="submit" className="bt-f">
                          Feminino
    </Button>
    <Button style={{backgroundColor:'#c850c0', border:'none',  width:"89px", height:"35px"}} type="submit" className="bt-m">
                          Masculino
    </Button>
    </div>

    <Form.Group as={Col} style={{width:'200px',color:'white', position: 'relative', left:'710px', bottom: '660px'}}>
      <Form.Label>Idade</Form.Label>
      <Form.Control placeholder="1 ano"/>
    </Form.Group>
        
    <div className="body-check-porte">
        <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2} style={{color:'white'}}>
        Porte
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Pequeno"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Médio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Grande"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  </div>

  <Form.Group as={Col} style={{width:'300px',color:'white', position: 'relative', left:'465px', bottom: '800px'}}>
      <Form.Label>Raça</Form.Label>
      <Form.Control placeholder="12345"/>
    </Form.Group>

    <div className="body-check-med">
        <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={5} style={{color:'white'}}>
        Toma Remédios?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Sim"
          name="formVerticalRadios"
          id="formVerticalRadios1"
        />
        <Form.Check
          type="radio"
          label="Não"
          name="formVerticalRadios"
          id="formVerticalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  </div>

  <Form.Group as={Col} style={{width:'250px', color:'white', position: 'relative', left:'465px', bottom: '920px'}}>
      <Form.Label>Nome do Remédio</Form.Label>
      <Form.Control placeholder="Cronidor 3g"/>
    </Form.Group>


    <div className="med-titulo">Qual o Horário?</div>
    <Form.Group controlId="exampleForm.ControlSelect1" className="body-med"> 
    <Form.Control as="select">
      <option>Hora</option>  
      <option>1:00</option>
      <option>2:00</option>
      <option>3:00</option>
      <option>4:00</option>
      <option>5:00</option>
      <option>6:00</option>
      <option>7:00</option>
      <option>8:00</option>
      <option>9:00</option>
      <option>11:00</option>
      <option>12:00</option>
      <option>13:00</option>
      <option>14:00</option>
      <option>15:00</option>
      <option>16:00</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
      <option>23:00</option>
      
    </Form.Control>
    </Form.Group>

        </>
    );
}