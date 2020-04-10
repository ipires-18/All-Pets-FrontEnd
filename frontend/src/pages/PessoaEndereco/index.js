import React from 'react';
import './styles2.css';
import LogoBranco from '../../assets/logo_branco.svg';
import LoginPets from '../../assets/login_pets2.jpeg';

export default function CadastroPessoalEnd() {
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
            <div className="body-pessoa-endereco">
                <div className="rg-container">
                    <p className="letra-form">RG*</p>
                    <input className="input-rg" placeholder="  __.___.___-_"></input>
                </div>
                <div className="cpf-container">
                    <p className="letra-form">CPF*</p>
                    <input className="input-cpf" placeholder="  ___.___.___-__"></input>
                </div>
                <div className="phone-container">
                    <p className="letra-form">Celular*</p>
                    <input className="input-ddd" placeholder="  __"></input>
                    <input className="input-number" placeholder="  _____-____"></input>
                </div>
                <div className="info-adress">
                    <h2>Informação de Endereço</h2>
                </div>
                <div className="cep-container">
                    <p className="letra-form">CEP*</p>
                    <input className="input-cpf" placeholder="  _____-___"></input>
                </div>
                <div className="estado-container">
                    <p className="letra-form">Estado*</p>
                    <input className="input-cpf" placeholder="  São Paulo"></input>
                </div>
                <div className="cidade-container">
                    <p className="letra-form">Cidade*</p>
                    <input className="input-cpf" placeholder="  Garulhos"></input>
                </div>
                <div>
                    <button className="button-next">Próximo</button>
                    <button className="button-cancel">Voltar</button>
                </div>
            </div>
        </div>
    )
        }