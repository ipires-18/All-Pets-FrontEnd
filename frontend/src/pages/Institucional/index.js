import React from 'react';
import './styles.css';

export default function SiteInstitucional() {
    window.location = "#wall-1";
    return(
        <div>
            <div className="cabecalho-container">
                <p className="allpets">All Pet's</p>
                <p className="home-letra">Home</p>
                <p className="somos-letra">Quem Somos</p>
                <p className="planos-letra">Planos</p>
                <p className="fale-letra">Fale Conosco</p>
                <p className="entra-letra">Entrar</p>
                <button className="button-cadastrar">Cadastrar</button>
            </div>
            <div>
                <div class="container">
            <div class="wall wall-1" id="wall-1">
                <a href="#wall-3">Voltar</a>
                <h1>carrosel numero - 1</h1>
                <a href="#wall-2">Avançar</a>
            </div>

            <div class="wall wall-2" id="wall-2">
                <a href="#wall-1">Voltar</a>
                <h1>carrosel numero - 2</h1>
                <a href="#wall-3">Avançar</a>
            </div>

            <div class="wall wall-3" id="wall-3">
                <a href="#wall-2">Voltar</a>
                <h1>carrosel numero - 3</h1>
                <a href="#wall-1">Avançar</a>
            </div>
            </div>
            </div>
        </div>
    );
}