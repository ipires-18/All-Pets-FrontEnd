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
        </div>
    )
}