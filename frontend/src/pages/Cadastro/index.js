import React from 'react';
import './styles.css';
import LogoBranco from '../../assets/logo_branco.svg';
import LoginPets from '../../assets/login_pets2.jpeg';
import Camera from '../../assets/icons8-unsplash-37.png';
//import { Container, Row, Col } from 'react-grid-system';

export default function CadastroPessoal() {
    return(
        <div className="cadastro-container">
            <div className="passo-a-passo">
                <article className="allpets-container">
                    <img src={LogoBranco} alt="All Pets" className="allpets"></img>
                </article>
                <h3 className="info-pessu">Informações Pessoais</h3>
                <h3 className="select-perf">Seleciona o seu perfil</h3>
                <h3 className="info-serv">Informações de Serviços</h3>
                <h3 className="confirm">Confirmação</h3>
                <form>
                    <article className="circus-white"/>
                    <article className="circus-grey1"/>
                    <article className="circus-grey2"/>
                    <article className="circus-grey3"/>
                </form>     
                <div>
                    <img src={LoginPets} className="dog-photo"></img>
                </div> 
            </div>
            <div className="register-body">
                <div className="info-pess">
                    <h2>Informação Pessoal</h2>
                </div>
                <div className="name">
                    <p className="letra-form">Nome Completo*</p>
                    <input placeholder="  Fulano de Tal" className="name-input"></input>
                </div>
                <div className="photo">
                    <article className="circus-photo"><img src={Camera} className="camera"/></article>
                    <p className="insert-photo">Insira sua foto</p>
                </div>
                <div className="email">
                    <p className="letra-form">E-mail*</p>
                    <input placeholder="  fulano.tal@dominio.com" className="email-input"></input>
                </div>
                <div className="email-confirm">
                    <p className="letra-form">Confirmação de e-mail*</p>
                    <input placeholder="  fulano.tal@dominio.com" className="email-input"></input>
                </div>
                <div className="password">
                    <p className="letra-form">Senha*</p>
                    <input placeholder="  ********" className="password-input"></input>
                </div>
                <div className="password-confirm">
                    <p className="letra-form">Confirmação de senha*</p>
                    <input placeholder="  ********" className="password-input"></input>
                </div>
                <div className="sexo">
                    <p className="letra-form-sexo">Sexo</p>
                        <div className="sexo-1">
                            <p className="sexo-form">
                                <b className="form-sexo">Homem:  </b>
                                <input type="radio" className="input-sexo"/>
                                <b className="form-sexo">Mulher:  </b>
                                <input type="radio" className="input-sexo"/>
                            </p>
                        </div>
                </div>
                <div className="data-nasc">
                    <p className="letra-form">Data de nascimento</p>
                        <input type="date" className="data" value="01-01-2000"></input>
                </div>
                <div>
                    <button className="button-next">Próximo</button>
                    <button className="button-cancel">Voltar à pagina principal</button>
                </div>
            </div>
        </div>
    )
}