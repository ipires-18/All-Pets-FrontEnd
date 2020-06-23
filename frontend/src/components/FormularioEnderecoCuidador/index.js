import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import swal from 'sweetalert';

export default function FormularioCadastroCuidador(){
      const idUser = localStorage.getItem('idUser');
      const [cep, setCep] = useState('');
      const [state, setState] = useState('');
      const [city, setCity] = useState('');
      const [bairro, setBairro] = useState('');
      const [endereco, setEndereco] = useState('');
      const [number, setNumber] = useState('');
      const [complement, setComplement] = useState('');

  async function handleFormEnd(e){
    e.preventDefault();

    const data = {
      cep,
      state,
      city,
      bairro,
      endereco,
      number,
      complement,
      idUser
  }

    try{
      
  
    const resposta = await api.post('endereco', data) 

    

    if(resposta.status == 201){

      localStorage.setItem('idAddress', resposta.data.idAddress)
      localStorage.setItem('cep', data.cep);
      localStorage.setItem('state', data.state); 
      localStorage.setItem('city', data.city);
      localStorage.setItem('bairro', data.bairro); 
      localStorage.setItem('endereco', data.endereco); 
      localStorage.setItem('number', data.number); 
      localStorage.setItem('complement', data.complement); 
      

      
      const name =  localStorage.getItem('name');
      const twoFactor =  localStorage.getItem('twoFactor');
      const twoFactorCode = localStorage.getItem('twoFactorCode');
      const email = localStorage.getItem('email');
      const cpf = localStorage.getItem('cpf');
      const password = localStorage.getItem('password');
      const birthDate = localStorage.getItem('birthDate');
      const whatsapp =  localStorage.getItem('whatsapp');
      const rg = localStorage.getItem('rg');
      const graduacao =  localStorage.getItem('graduacao');
      const valueTime =  localStorage.getItem('valueTime');
      const typeUser =  localStorage.getItem('typeUser');
      const idAddress =  localStorage.getItem('idAddress');
      
    

      const res = await api.put(`donos/${idUser}`, {
        twoFactor,
        twoFactorCode,
        name,
        email,
        password,
        cpf,
        birthDate,
        whatsapp,
        rg,
        graduacao,
        valueTime,
        typeUser,
        idAddress
      });

      
      
     
      if(res.status == 200){
        swal("Cadastro", "Endereço cadastrado", "success");
      }

      console.log(res)
    }
         
    }catch(err){
        swal("Cadastro", "Falha no Cadastro", "error");
       
    }
}

  return(
    <>    
      <div className="container-cad">
              <h1 style={{margin:'1px 32px', color:'#9C27B0', fontWeight:700}}>Cadastro Endereço</h1>
              <form style={{margin:'30px 50px'}} onSubmit={handleFormEnd}>
                <section class="container-input-cad row">
                  <div class="item-input">
                    <label htmlFor="cep" style={{display:'flex', justifyContent:'flex-start'}}>Cep</label>
                    <input id="cep" type="text" placeholder="Digite o seu cep" value={cep} 
                    onChange={(e) => setCep(e.target.value)}/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="estado" style={{display:'flex', justifyContent:'flex-start'}}>Estado</label>
                    <input id="estado" type="text" placeholder="Digite o seu estado" value={state}
                    onChange={(e) => setState(e.target.value)}/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Cidade</label>
                    <input id="cidade" type="text" placeholder="Digite sua cidade" value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Bairro</label>
                    <input id="cidade" type="text" placeholder="Digite seu bairro" value={bairro}
                    onChange={(e) => setBairro(e.target.value)}/>
                  </div>
                </section>
                  <section class="container-input-cad row">
                    <div class="item-input">
                      <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Endereco</label>
                      <input id="cidade" type="text" placeholder="Digite seu endereço" value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}/>
                    </div> 
                    <div class="item-input">
                        <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Numero</label>
                        <input id="cidade" type="text" placeholder="Digite seu endereço" value={number}
                        onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div class="item-input">
                        <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Complemento</label>
                        <input id="cidade" type="text" placeholder="Digite seu endereço" value={complement}
                        onChange={(e) => setComplement(e.target.value)}/>
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