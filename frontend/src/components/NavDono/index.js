import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logoroxo.svg';
import {FiMenu, FiLogOut} from 'react-icons/fi';
import swal from 'sweetalert';

export default function NavDono(){ 

  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const [ativo, setAtivo] = useState('Ativo');
  const history = useHistory();

  // if(ativo === 'Não completado'){
  //   swal("Cadastro", "Cadastro não finalizado", "error");
  //   history.push('/historico')
  // }


  function handleLogout(){
    // localStorage.clear();

    history.push('/')
  }

  return(
    <>
      <header>
        <label htmlFor="meuMarcador" className="menu-button">
          <FiMenu/>
        </label>  
        <input type="checkbox" id="meuMarcador"/>
        
        <section className="menu-container space-between"> 
            <div class="item">
              <img src={Logo} alt="All Pets"/>
            </div>
            <div class="item">
              <ul>
                <li>Email: <span>{email}</span> </li>
                <li>Nome: <span> {name}</span></li>
                <li>Perfil: <span> {ativo}</span></li>
              </ul>
            </div>
        </section>
        <section className="menu-container-link space-between">
          <div className="item-link">
            <ul>
              <li><Link className="item-color"  to="/donos">Cuidadores</Link></li>
              <li><Link className="item-color"  to="/contratos">Contratos</Link></li>
              <li><Link className="item-color" to="/perfil/donos">Editar Perfil</Link></li>
            </ul>
          </div>
          <div className="item-link">
            <ul>
              <li><Link className="item-color" onClick={handleLogout}>
                <span style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <FiLogOut/> Sair
                </span></Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </>
  )
}