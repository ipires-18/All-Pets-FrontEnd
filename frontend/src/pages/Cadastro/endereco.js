import React from 'react';
import './styles.css';
import LogoBranco from '../../assets/logo_branco.svg';
import LoginPets from '../../assets/login_pets6.jpeg';

export default function CadastroEndereco() {
    return(
        <div className="cadastro-pessoal-container">
            <div className="fluxo-cadastro-container">
                <article className="logo-container">
                    <img src={LogoBranco} alt="All Pets" className="logo"></img>
                </article>
                <article className="topics">
                    <div className="ball_white"></div>
                    <p className="paragafo-letra">
                        Informações Pessoais
                    </p>
                </article>
                <article>
                    <div className="ball_grey"></div>
                    <p className="paragafo-letra">
                        Seleciona o seu perfil
                    </p>
                </article> 
                <article>
                    <div className="ball_grey"></div>
                    <p className="paragafo-letra">
                        Informações de Serviços
                    </p>
                </article> 
                <article>
                    <div className="ball_grey"></div>
                    <p className="paragafo-letra">
                        Confirmação
                    </p>
                </article>    
                <div className="animal-photo">
                    <img src={LoginPets}></img>
                </div>  
            </div>