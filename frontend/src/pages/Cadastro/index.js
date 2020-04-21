<<<<<<< HEAD
import React, {Component}from 'react';
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
=======
import React from 'react';
import './styles.css';
import RegisterLogo from '../../assets/logo_branco.svg';
import RegisterPet from '../../assets/register_pets.jpg';
import DonoPet from '../../assets/dono.jpg';
import CuidadorPet from '../../assets/cuidador.jpg';

export default function Cadastro(){
    return(
        <div className="register-container">
            <section className="content"> 
            <div className="fist-body">
                <article className="body-container">
                <img src={RegisterLogo} alt="Logo"/>
                </article>

                <form>
                    <article className="circus-p"/>
                    <b>Informações Pessoais</b> 
                    
                    <article className="circus-s"/>
                    <b>Seleciona seu perfil</b> 

                    <article className="circus-t"/>
                    <b>Informações de Serviços</b> 

                    <article className="circus-q"/>
                    <b>Confirmação</b> 
                </form>

                <article className="imgs-container">
                <img src={RegisterPet} alt="All Pets"/>
                </article>

                <div className="container-per">
                    <h1>Selecione o seu Perfil</h1>
                </div>

                <div className="container-body-fot">
                    <article className="body-dono"> 
                    <img src={DonoPet} alt="Dono" />
                    </article>

                    <h3>Dono de Pet</h3>
                    <article className="container-p">
                    <p>Para você que passa muito tempo fora de casa e fica preocupado com seu pet, para dar comida ou remédio, All Pets oferece a você um serviço de buca de cuidadores especializados no cuidado de pets.</p>
                    </article>
                </div>

                <div className="container-body-cuida">
                    <article className="body-cuidador">
                    <img src={CuidadorPet} alt="Cuidado"/>
                    </article>

                    <h3>Cuidador</h3>
                    <article className="container-p">
                    <p>Você que ama os animais, trabalha com isso, esta é uma oportunidade de cuidar bem desse bichinhos e ainda conseguir uma renda extra pelo seus cuidados.</p>
                    </article>
                </div>

                <div className="body-button-container">
                    <article className="button-first">
                        <button>Próximo</button>
                    </article>
                    
                    <article className="button-second">
                        <button>Voltar</button>
                    </article>
                </div>

        </div>
        </section>
        </div>

    );
>>>>>>> origin/Cadastro-NM
}