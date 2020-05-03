import React from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function FormInfo(){
    return(
    
    <Row>
<div className="titulos" style={{color:'#c850c0', textAlign:'center', fontSize:'30px', fontWeight:"bold"}}>Informação Pessoal</div> 

<Form style={{color:'white'}}> 
    <div className="box-browse">
        <Form.File id="formcheck-api-regular" >
            <Form.File.Label style={{color:'white'}}>Insira sua Foto</Form.File.Label>
        <Form.File.Input  />
        </Form.File>
    </div>
    </Form>

<Form>
   
  <Form.Row>  
  <Form.Group as={Col} className="first-coluna">
      <Form.Label>Nome Completo</Form.Label>
      <Form.Control placeholder="Amanda Ferreira" />
    </Form.Group>

        
    <Form.Group as={Row} controlId="formHorizontalEmail" className="sec-coluna">
    <Form.Label column sm={5} className="titulo-sec">
        Email
    </Form.Label>
    <Col sm={12}>
      <Form.Control type="email" placeholder="@hotmail.com" />
    </Col>
  </Form.Group> 

    <Form.Group as={Row} controlId="formHorizontalPassword" className="terc-coluna">
    <Form.Label column sm={5}>
       Senha
    </Form.Label>
    <Col sm={12}>
      <Form.Control type="password" placeholder="Coloque sua Senha" />
    </Col>
  </Form.Group> 

    </Form.Row>
    </Form>

    <Form.Group style={{width:'150px'}} className="telefone-body">
      <Form.Label>Celular</Form.Label>
      <Form.Control placeholder="91234-5678" />
    </Form.Group>

    <div className="sex-titulo">Sexo</div>
    <div className="bt-body">
    <Button style={{backgroundColor:'#c850c0', border:'none',marginRight:"10px", width:"90px", height:"35px"}} type="submit" className="bt-f">
                          Feminino
    </Button>
    <Button style={{backgroundColor:'#c850c0', border:'none',  width:"90px", height:"35px"}} type="submit" className="bt-m">
                          Masculino
    </Button>
    </div>
    
    <div className="born-titulo">Nascimento</div>
    <Form.Group controlId="exampleForm.ControlSelect1" className="corpo-first"> 
    <Form.Control as="select">
      <option>Dia</option>  
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>  
    </Form.Control>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlSelect1" className="corpo-sec"> 
    <Form.Control as="select">
      <option>Mês</option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </Form.Control>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlSelect1" className="corpo-terc"> 
    <Form.Control as="select">
      <option>Ano</option>
      <option>1975</option>
      <option>1976</option>
      <option>1977</option>
      <option>1978</option>
      <option>1979</option>
      <option>1980</option>
      <option>1981</option>
      <option>1982</option>
      <option>1983</option>
      <option>1984</option>
      <option>1985</option>
      <option>1986</option>
      <option>1987</option>
      <option>1988</option>
      <option>1989</option>
      <option>1990</option>
      <option>1991</option>
      <option>1992</option>
      <option>1993</option>
      <option>1994</option>
      <option>1995</option>
      <option>1996</option>
      <option>1997</option>
      <option>1998</option>
      <option>1999</option>
      <option>2000</option>
      <option>2001</option>
      <option>2002</option>
    </Form.Control>
    </Form.Group>
    





    </Row>

    );

}