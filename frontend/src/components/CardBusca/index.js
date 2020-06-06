import React from 'react';
import './styles.css';

export default function CardBusca(){
  return(
    <>
        <main>
          <div className="container-main">
              <h1 style={{margin:'1px 32px', color:'#9C27B0', fontWeight:700}}>Busca Cuidadores</h1>
              <form style={{margin:'30px 50px'}}>
                <section class="container-input row">
                  <div class="item-input">
                    <label htmlFor="bairro" style={{display:'flex', justifyContent:'flex-start'}}>Bairro</label>
                    <input id="bairro" type="text" placeholder="Digite seu bairro"/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Cidade</label>
                    <input id="cidade" type="text" placeholder="Digite sua cidade"/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="valor" style={{display:'flex', justifyContent:'flex-start'}}>Valor Maximo: Hora</label>
                    <input id="valor" type="number" placeholder="R$ "/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="horas" style={{display:'flex', justifyContent:'flex-start'}}>Quantidade de horas</label>
                    <input id="horas" type="number" placeholder="Digite a quantidade de horas"/>
                  </div>
                </section>
                <section class="container-input row">
                  <div class="item-input">
                    <label htmlFor="nome" style={{display:'flex', justifyContent:'flex-start'}}>Nome do Pet</label>
                    <input id="nome" type="text" placeholder="Digite seu nome "/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="des" style={{display:'flex', justifyContent:'flex-start'}}>Descrição</label>
                    <input id="des" type="text" placeholder="Digite sua descrição "/>
                  </div>
                  <div class="item-input">
                    <button type="submit" className="button" style={{width:200, background:'#9C27B0', color:'#fff', margin:22}}>
                      Entrar</button>
                  </div>
                </section>
              </form>
          </div>
        </main>
    </>
  )
} 