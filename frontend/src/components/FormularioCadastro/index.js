import React from 'react';
import './styles.css';

export default function FormularioCadastro(){

  const name =  localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const cpf = localStorage.getItem('cpf');
  const whatsapp =  localStorage.getItem('whatsapp');
  const rg = localStorage.getItem('rg');

  return(
    <>    
      <div className="container-cad">
              <h1 style={{margin:'1px 32px', color:'#9C27B0', fontWeight:700}}>Cadastro Pessoal</h1>
              <form style={{margin:'30px 50px'}}>
                <section class="container-input-cad row">
                  <div class="item-input">
                    <label htmlFor="nome" style={{display:'flex', justifyContent:'flex-start'}}>Nome Completo</label>
                    <input defaultValue={name} id="nome" type="text" placeholder="Digite seu nome completo"/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="email" style={{display:'flex', justifyContent:'flex-start'}}>Email</label>
                    <input defaultValue={email} id="email" type="text" placeholder="Digite seu email"/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="senha" style={{display:'flex', justifyContent:'flex-start'}}>Senha</label>
                    <input id="senha" type="number" placeholder="Digite sua Senha "/>
                  </div>
                  <div class="item-input">
                  <label htmlFor="senhav" style={{display:'flex', justifyContent:'flex-start'}}>Nova Senha</label>
                    <input  id="senhav" type="number" placeholder="Digite sua Nova Senha "/>
                  </div>
                </section>
                <section class="container-input-cad row">
                  <div class="item-input">
                    <label htmlFor="rg" style={{display:'flex', justifyContent:'flex-start'}}>RG</label>
                    <input defaultValue={rg} id="rg" type="text" placeholder="Digite seu RG "/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="cpf" style={{display:'flex', justifyContent:'flex-start'}}>CPF</label>
                    <input defaultValue={cpf} id="cpf" type="text" placeholder="Digite sua descrição "/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="whatsApp" style={{display:'flex', justifyContent:'flex-start'}}>WhatsApp</label>
                    <input defaultChecked={whatsapp} id="whatsApp" type="text" placeholder="Digite sua WhatsApp "/>
                  </div>
                  <div class="item-input">
                    <button type="submit" className="button" 
                    style={{width:200, background:'#9C27B0', color:'#fff', margin:22}}>
                      Salvar
                    </button>
                  </div>
                </section>
              </form>
          </div>
    </>
  )
}