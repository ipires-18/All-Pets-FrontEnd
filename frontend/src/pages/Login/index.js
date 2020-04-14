import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import LoginPets from '../../assets/dog.svg'
import LogoRoxo from '../../assets/logo_branco.svg';
//import {FiLogIn} from 'react-icons/fi' //Usaremos para icone feathericons ---> Link do site com os nomes https://feathericons.com/

export default function Login(){
    return(
      <>
        <div class="container">
            <div className="card-img">
                <img src={LoginPets}  className="responsive" alt="Cachorro"/>
            </div>
            <div className="card-form">
                <div className="col">
                    <img src={LogoRoxo} className="logo" alt="All Pets"/>
                    <h3 className="titulo">Login</h3>
                </div>
                <div className="col">
                    <div>
                        <h4 style={{color:"#FFF", paddingBottom:"10px"}}>Email</h4>
                        <p><input type="email" className="input" placeholder="Digite seu email" required/></p> 
                    </div>
                    <div>
                        <h4 style={{color:"#FFF", paddingBottom:"12px"}}>Senha</h4>
                        <p><input type="password" className="input" placeholder="Digite sua senha" required/></p>
                    </div>
                    
                    <div>
                        <button className="button">Entrar</button>
                        <button className="button">Cadastrar-se</button>
                    </div>
                   
                </div>
                <div className="col">
                   <h4 className="tituloTwo"> 
                        <Link className="tituloTwo">
                            Esqueceu a senha?
                       </Link>
                    </h4> 
                    <h4 className="tituloThree" style={{marginTop:"10px", textAlign:"center", color:"#FFF"}}> 
                        <Link style={{textDecoration:"none", color:"#FFF"}}>
                            Voltar a home
                       </Link>
                    </h4> 
                </div>
            </div>
        </div>
      </>
    );
}