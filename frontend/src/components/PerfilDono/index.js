import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default function PerfilDono(){
  return(
    <>  
      <div className="container-dono">
        <div className="items-link">
          <ul>
            <li className="link-dono"><Link to="/perfil/donos">Cadastro Pessoal</Link></li>
            <li className="link-dono"><Link to="/perfil/endereco">Cadastro de Endereço</Link></li>
            {/* <li className="link-dono"><Link to="/perfil/animal">Cadastro de Animal</Link></li> */}
          </ul>
        </div>
      </div>
    </>
  )
}