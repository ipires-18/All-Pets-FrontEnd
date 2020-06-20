import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import swal from 'sweetalert';
import './styles.css';

export default function FormularioCadastro(){
  const [name, setName] = useState('')
  const [age] = useState(null)
  const [rga] = useState(null)
  const [breed, setBreed] = useState('')
  const [medication] = useState(false)
  const [size, setSize] = useState('');
  const [weight] = useState(null);
  const idUser =  localStorage.getItem('idUser');
  const history = useHistory();

  async function handleFormPet(e){
    e.preventDefault();
  
    const data = {
      name,
      age,
      rga,
      breed,
      medication,
      weight,
      size,
      idUser
  }
  
    try{
      
    const res = await api.post('pets', data)
  
    console.log(res)
  
    if(res.status == 201){
      swal("Cadastro", "Animal Cadastrado", "success");
    }
         
    }catch(err){
        swal("Cadastro", "Falha no Cadastro", "error");
       
    }
  }



  return(
    <>    
      <div className="container-cad">
              <h1 style={{margin:'1px 32px', color:'#9C27B0', fontWeight:700}}>Cadastro Animal</h1>
              <form style={{margin:'30px 50px'}} onSubmit={handleFormPet}>
                <section class="container-input-cad row">
                  <div class="item-input">
                    <label htmlFor="nome" style={{display:'flex', justifyContent:'flex-start'}}>Nome</label>
                    <input id="nome" type="text" placeholder="Digite o nome completo" value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div class="item-input">
                    <label htmlFor="raca" style={{display:'flex', justifyContent:'flex-start'}}>Raça</label>
                    <input id="raca" type="text" placeholder="Digite o nome da raça" value={breed}
                    onChange={(e) => setBreed(e.target.value)}/>
                  </div>
                </section>
                  <section class="container-input-cad row">
                  <div class="item-input">
                      <label htmlFor="porte">Porte</label>
                      <select id="porte" style={{marginTop:10}} onChange={(e) => setSize(e.target.value)}>
                      <option value="">Selecione o porte</option>
                      <option value={"P"}>Pequeno</option>
                      <option value={"M"}>Medio</option>
                      <option value={"G"}>Grande</option>
                    </select>
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