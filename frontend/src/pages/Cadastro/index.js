import React from 'react';
import './styles.css';
//import LoginPets from '../../assets/login_pets4.jpeg'
import LogoBranco from '../../assets/logo_branco.svg';

export default function CadastroPessoal() {
    return(
        <div className="cadastro-pessoal-container">
            <div className="fluxo-cadastro-container">
                <h1 className="fluxo_1">Informações Pessoais</h1>
                <h1 className="fluxo_2">Seleciona o seu perfil</h1>
                <h1 className="fluxo_3">Informações de Serviços</h1>
                <h1 className="fluxo_4">Confirmação</h1>
                <article className="logo-container">
                    <img src={LogoBranco} alt="All Pets" className="logo"></img>
                </article>
                
            </div>
            
        </div>
    )
}