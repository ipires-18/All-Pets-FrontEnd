import React from 'react';
import {Link} from 'react-router-dom';


export default function PerfilDono(){
  return(
    <>  
      <div className="container-dono">
        <div className="items-link">
          <ul>
            <li className="link-dono"><Link to="/perfil/cuidador">Cadastro Pessoal</Link></li>
            <li className="link-dono"><Link to="/perfil/end/cuidador">Cadastro de Endereço</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}