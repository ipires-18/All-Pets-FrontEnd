import React,{useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/peixes.svg';
import {Link,useHistory} from 'react-router-dom';
import {FiLogIn,FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import swal from 'sweetalert';

const FormularioLogin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

 async function handleLogin(e){
      e.preventDefault();

      try{
          const response = await api.post('login/logar', {email, password}) 

          

          console.log(response)

          history.push('/propostas');
      
      }catch(err){
        swal("Login", "Falha no login", "error");
      }

  }


return (
  <>
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="All Pets" className="logo" />
      <form action="" onSubmit={handleLogin}>
        <h1>Entre na sua conta</h1>

        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Digite seu email" value={email} 
        onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="email">Senha</label>
        <input id="email" type="password" placeholder="Digite seu senha" value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" className="button">Entrar</button>
        <Link className="ancora" to="/registro">
          <FiLogIn size={16} color="#FFF"/>
          Não tenho cadastro
        </Link>
        <Link className="ancora" to="/">
          <FiArrowLeft size={16} color="#FFF"/>
          Voltar ao Home
        </Link>
      </form>
      </section>
      <section className="ordernacao">
          <img src={heroesImg} className="banner" alt="All Pets" />
      </section>
      
    </div>
  </>
)};

export default FormularioLogin;