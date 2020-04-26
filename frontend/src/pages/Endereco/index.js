import React from 'react';
import './styles1.css';
import LogoBranco from '../../assets/logo_branco.svg';
import LoginPets from '../../assets/login_pets2.jpeg';

export default function CadastroEndereco() {
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
            <div className="body-endereco">
                <div className="endereco-container">
                    <p className="letra-form">Endereço*</p>
                    <input className="input" placeholder="  Rua Haddok Lobo"></input>
                </div>
                <div className="numero-container">
                    <p className="letra-form">Numero*</p>
                    <input className="input-numero" placeholder="  595"></input>
                </div>
                <div className="complemento-container">
                    <p className="letra-form">Complemento*</p>
                    <input className="input-complemento" placeholder="  casa, bloco, apt..."></input>
                </div>
                <div className="bairro-container">
                    <p className="letra-form">Bairro*</p>
                    <input className="input" placeholder="  Paulista"></input>
                </div>
                <div className="referencia-container">
                    <p className="letra-form">Ponto de referencia</p>
                    <input className="input-referencia" placeholder="  Seguindo a padaria Polipan..."></input>
                </div>
                <div>
                    <button className="button-next">Próximo</button>
                    <button className="button-cancel">Voltar</button>
                </div>
            </div>
        </div>
    )
}