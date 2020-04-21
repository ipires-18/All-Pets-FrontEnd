import React from 'react';
import {Link } from 'react-router-dom';
import './styles.css';
import LogoRoxo from '../../assets/logo_roxo.svg';
import Button from 'react-bootstrap/Button';

export default function Header(){
  return(
    <>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link className="navbar-brand" to={"#"}><img src={LogoRoxo} width="100px" alt="All Pets"/></Link>
        <form className="form-inline" style={{padding:'25px'}}>
          <Button className="button-color">Criar Conta</Button>
          <Button className="button-color">Entrar</Button>
        </form>
      </nav>

        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/modalCuidador"}>Buscar Cuidadores</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/contrato"}>Contratos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/editar"}>Editar Perfil</Link>
              </li>    
            </ul>
          </div>  
        </nav>
        <br/>
    </>
  );
}