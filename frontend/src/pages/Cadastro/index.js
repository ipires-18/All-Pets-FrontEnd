import React from 'react';
import './styles.css';
//import LoginPets from '../../assets/login_pets4.jpeg'
import LogoBranco from '../../assets/logo_branco.svg';
import LoginPets from '../../assets/login_pets6.jpeg';

export default function CadastroPessoal() {
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
            <div className="form-cadastro-container">
                <div>
                    <h1 className="info-pessoal">
                    Informação Pessoal
                    </h1>
                </div>

                <div className="form-nome">
                    <figure className="insert-photo">
                    <p className="text-form">Insira sua foto</p>
                <button className="ball-photo"></button>
                </figure>
                    <p className="text-form">
                        Nome Completo
                    </p>
                    <input className="input-nome"></input>
                    
                </div>
                <div className="form">
                    <p className="text-form">
                        E-mail
                    </p>
                    <input className="input-email"></input>
                </div>
                <div className="form">
                    <p className="text-form">
                        Confirmação de E-mail
                    </p>
                    <input className="input-email"></input>
                </div>
                <div className="form">
                    <p className="text-form">
                        Senha
                    </p>
                    <input className="input-email"></input>
                </div>
                <div className="form">
                    <p className="text-form">
                        Confirmação de Senha
                    </p>
                    <input className="input-email"></input>
                </div>
                <div className="form">
                    <p className="text-form">Escolha o sexo</p>
                        <p className="text-form">
                            Homem: <input type="radio" name="citizenship" /><br></br><br></br>
                            Mulher: <input type="radio" name="citizenship" />
                        </p>
                </div>
            </div>          
        </div>
    )
}