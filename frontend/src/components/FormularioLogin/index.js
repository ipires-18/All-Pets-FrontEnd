import React,{useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/peixes.svg';
import {Link,useHistory} from 'react-router-dom';
import {FiLogIn,FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import swal from 'sweetalert';
import {useFormLogin } from '../../context/FormLogin';



const FormularioLogin = () => {

  const [typeUser, setTypeUser] = useState(0);
  const {email, setEmail, password ,setPassword} = useFormLogin();

  const history = useHistory();
 
  async function handleLogin(e){
      e.preventDefault();

      
      try{
        
      const response = await api.post('login/logar', {typeUser, email, password})

      //const {idUser,name,email,cpf,birthDate,whatsapp,rg,graduacao,valueTime,typeUser} = response.data;
      
      // const data = response.data;
        
      // console.log(data)
      // localStorage.setItem('data', data);
      localStorage.setItem('idUser', response.data.idUser);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('cpf', response.data.cpf);
      localStorage.setItem('birthDate', response.data.birthDate);
      localStorage.setItem('whatsapp', response.data.whatsapp);
      localStorage.setItem('rg', response.data.rg);
      localStorage.setItem('graduacao', response.data.graduacao);
      localStorage.setItem('valueTime', response.data.valueTime);
      localStorage.setItem('typeUser', response.data.typeUser);

        if(typeUser == 1){

          history.push('/donos');

        }else if(typeUser == 2){

          history.push('/cuidador');

        }else{

            swal("Login", "Verifique seus dados", "error");
            
        }

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

        <label htmlFor="email">Perfil</label>
        <select onChange={(e) => setTypeUser(e.target.value)}>
          <option value={0}>Escolha seu Perfil</option>
          <option value={1}>Dono de Animais</option>
          <option value={2}>Cuidador de Animais</option>
        </select>

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