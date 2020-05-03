import React from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function FormCuidador(){
    return(
        <>
    <div className="t-cuidador" style={{color:'#c850c0', textAlign:'center', fontSize:'25px', fontWeight:"bold", position: 'relative', left:'230px', bottom: '625px' }}>
        Informação do Cuidador
    </div>

    <Form.Group as={Col} style={{width:'420px', color:'white', position: 'relative', left:'478px', bottom: '600px'}}>
      <Form.Label>Graduação*</Form.Label>
      <Form.Control placeholder="Técnico em veterinário"/>
    </Form.Group>

    <Form.Group as={Col} style={{width:'420px', color:'white', position: 'relative', left:'478px', bottom: '600px'}}>
      <Form.Label>Especialidade*</Form.Label>
      <Form.Control placeholder="Cachorros Grandes"/>
    </Form.Group>
    
    <Form.Group as={Col} style={{width:'420px',color:'white', position: 'relative', left:'478px', bottom: '600px'}}>
      <Form.Label>Valor da sua Hora</Form.Label>
      <Form.Control placeholder="R$200,00"/>
    </Form.Group>

    <div className="t-dias-disp" style={{color:'white', fontSize:'17px', position: 'relative', left:'495px', bottom: '600px' }}>
        Quais dias está disponivel?
    </div>

    <div className="body-dias-check">
    <Form.Check  className="c-s" aria-label="option 1"  label="Segunda"/>
    <Form.Check  className="c-t" aria-label="option 2"  label="Terça"/>
    <Form.Check  className="c-q" aria-label="option 3"  label="Quarta"/>
    <Form.Check  className="c-qq" aria-label="option 4"  label="Quinta"/>
    <Form.Check  className="c-ss" aria-label="option 5"  label="Sexta"/>
    <Form.Check  className="c-sab" aria-label="option 3"  label="Sabádo"/>
    <Form.Check  className="c-dom" aria-label="option 4"  label="Domingo"/>
    </div>

    <div className="ini-titulo">Qual seu Horário inicial?</div>
    <Form.Group controlId="exampleForm.ControlSelect1" className="body-ini"> 
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

    <div className="fim-titulo">Qual seu Horário final?</div>
    <Form.Group controlId="exampleForm.ControlSelect1" className="body-fim"> 
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