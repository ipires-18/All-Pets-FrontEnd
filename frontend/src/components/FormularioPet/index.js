import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo-roxo.svg';
import heroesImg from '../../assets/peixes.svg';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


const FormularioPet = () => {
  
return (
  <>
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="All Pets" className="logo" />
      <form action="">
        <h1>Entre na sua conta</h1>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Digite seu email"/>
        <label htmlFor="email">Senha</label>
        <input id="email" type="text" placeholder="Digite seu senha"/>
        <button className="button">Entrar</button>
        <Link className="ancora" to="/registro">
          <FiLogIn size={16} color="#9C27B0"/>
          Não tenho cadastro
        </Link>
      </form>
      </section>
      <section className="ordernacao">
          <img src={heroesImg} className="banner" alt="All Pets" />
      </section>
      
    </div>
  </>
)};

export default FormularioPet;