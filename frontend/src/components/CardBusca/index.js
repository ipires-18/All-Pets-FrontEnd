import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import './styles.css';
import MyVerticallyCenteredModal from '../Modal';
import MyVerticallyCenteredModalAnimal from '../ModalAnimal';

export default function CardBusca(){


  const [idUserCuidador, setIdUserCuidador] = useState(['']);
  const [city, setCity] = useState(['']);
  const [street, setStreet] = useState(['']);
  const [value, setValue] = useState(['']);
  const [currentRegion, setCurrentRegion] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalAniShow, setModalAniShow] = useState(false);
  const history = useHistory();

  function teste(idx) {setIdUserCuidador(currentRegion[idx].idUser); setModalShow(true); }

  function testeAni(idx) {setIdUserCuidador(currentRegion[idx].idUser); setModalAniShow(true); }

  localStorage.setItem('idUserCuidador',idUserCuidador)

  async function loadCuidadores(e) {
    e.preventDefault();
    

    try {

      if(city == '' || street == '' || value == ''){
        const response = await api.get('cuidadores/search')
        
        if(response.status == 200){
          setCurrentRegion(response.data);

          swal("Busca", "Busca encontrada", "success");

        }

        const data = response.data;

        const dataRes = data.map(res => res.idUser);

        localStorage.setItem("idUserCuidador", JSON.stringify(dataRes));
  
      }
      
      if(city != '' || street != '' || value != '' ){
  
        const response = await api.get('cuidadores/search', {
          params: {
            city,
            street,
            value
          }
        });
        
        if(response.status == 200){
          setCurrentRegion(response.data);

          swal("Busca", "Busca encontrada", "success");
          
        }

        const data = response.data;

        const dataRes = data.map(res => res.idUser);

        localStorage.setItem("idUserCuidador", JSON.stringify(dataRes));

      }
      
    } catch (error) {
      swal("Busca", "Falha na busca", "error");
      history.push('/donos')
    }
  
  }  

  return(
    <>
        <main>
          <div className="container-main">
              <h1 style={{margin:'1px 32px', color:'#9C27B0', fontWeight:700}}>Busca Cuidadores</h1>
              <form style={{margin:'30px 50px'}} onSubmit={loadCuidadores} >
                <section class="container-input row">
                  <div class="item-input">
                    <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Cidade</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} 
                    id="cidade" type="text" placeholder="Digite sua cidade"/>
                  </div>
                  
                  <div class="item-input">
                    <label htmlFor="bairro" style={{display:'flex', justifyContent:'flex-start'}}>Bairro</label>
                    <input value={street} onChange={(e) => setStreet(e.target.value)} 
                    id="bairro" type="text" placeholder="Digite seu bairro"/>
                  </div>
                  
                  <div class="item-input">
                    <label htmlFor="valor" style={{display:'flex', justifyContent:'flex-start'}}>Valor Maximo: Hora</label>
                    <input value={value} onChange={(e) => setValue(e.target.value)} 
                    id="valor" type="number" placeholder="R$ "/>
                  </div>
                </section>
                <section class="container-input row">
                  <div class="item-input">
                    <button type="submit" className="button" 
                      style={{width:400, background:'#9C27B0', color:'#fff', margin:22}}>
                      Buscar
                    </button>
                  </div>
                </section>
              </form>
          </div>
           <section className="result-container">
            <ul>
              {currentRegion.map((current, index) =>(
                <li key={current.idUser}> 
                  <div className="items-result">
                    <strong>Nome:</strong>
                    <p>{current.name}</p>
                    <strong>Graduação:</strong>
                    <p>{current.graduacao}</p>
                  </div>
                  <div className="items-result">
                    <strong>Nascimento:</strong>
                    <p>{current.birthDate}</p>
                    <strong>Valor da hora:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(current.valueTime)}</p>
                 
                  </div>
                 
                  <button onClick={()=> {testeAni(index)}}  
                  style={{width:80, borderRadius:8, background:'#9C27B0', color:'#fff'}}>
                    Cadastro de pet 
                  </button>

                  <button onClick={()=> {teste(index)}} 
                  style={{width:80, borderRadius:8, background:'#9C27B0', color:'#fff', margin:'70px 2px'}}>
                    Contratar
                  </button>
                </li>
              ))}
              
            </ul>

            <MyVerticallyCenteredModal   show={modalShow}
              onHide={() => setModalShow(false)} />

            <MyVerticallyCenteredModalAnimal   show={modalAniShow}
              onHide={() => setModalAniShow(false)} />  
              
          </section>
        </main>
    </>
  )
} 