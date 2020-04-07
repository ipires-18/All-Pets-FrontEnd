import React from 'react';
import './styles.css';
import RegisterLogo from '../../assets/logo_branco.svg';
import RegisterPet from '../../assets/register_pets.jpg';

export default function CadastroSec(){
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

                <form>
                    <div className="body-info">
                        <h1>Informações do seu PET</h1>
                    </div>

                    <div className="info-container">
                    <h4>Nome do seu PET*</h4>
                    <input placeholder="Thor" />
                    
                    <br/><br/>
                    <h4>Registro Geral do Animal</h4>
                    <input placeholder="12345" />

                    <br/><br/>
                    <article className="info-s">
                    <h4>Sexo</h4>
                    </article>
                    <div className="info-button">
                        <button>Feminino</button>
                        <button>Masculino</button> 
                    </div>

                    <div className="info-age">
                    <h4>Idade</h4>
                    
                    <input placeholder="5 anos" />
                    </div>
                    
                    <article className="info-p">
                    <h4>Porte</h4>
                    </article>
                    <div className="info-button-porte">
                        <button>Pequeno</button>
                        <button>Médio</button> 
                        <button>Grande</button>
                    </div>

                    <div className='info-raca'>
                    <h4>Raça</h4>
                    <input placeholder="Pitbull" />
                    </div>

                    <article className="body-h4-med">
                    <h4>Alguma medicação?</h4> 
                    </article>
                    <div className="info-button-med">          
                        <button>Sim</button>
                        <button>Não</button>
                    </div>

                    <div className="info-med">
                        <h4>Nome do Remédio</h4>
                        <input placeholder="Cronidor"/>
                    </div>

                    <div className="info-hour">
                        <h4>Qual o horário?</h4>
                        <input placeholder="18:00Hrs" />
                    </div>

                    <div className="button-f-container">
                    <article className="button-first-container">
                        <button>Próximo</button>
                    </article>

                    <article className="button-second-container">
                        <button>Voltar</button>
                    </article>
                    </div>

                    </div>
                </form>
    
            </div>
            </section>
            </div>
    );

}
