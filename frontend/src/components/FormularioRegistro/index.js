import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo-roxo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import bannerImg from '../../assets/perfil.svg';
import api from '../../services/api';
import swal from 'sweetalert';

const FormularioRegistro = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [graduacao, setGraduacao] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sex, setSex] = useState('');
  const [valueTime, setValueTime] = useState('');
  const [typeUser, setTypeUser] = useState(0);
  const [twoFactor, setTwoFactor] = useState();
  const history = useHistory();
  
  async function  handleRegister(e){
    e.preventDefault();

    const data = {
        typeUser,
        name,
        email,
        password,
        cpf,
        rg,
        birthDate,
        whatsapp,
        sex,
        valueTime,
        graduacao,
        twoFactor
    }

   const resposta = await api.post('donos', data);

    try{
 
      if(resposta.status == 201){

        history.push('/login');
        swal("Cadastro", "Realizado com sucesso!", "success");
      }
      
    }catch(error){

      swal("Cadastro", "Error no cadastro tente novamente", "error");

    }}
    
return (
  <>
  <div className="registrer-container">
    <div className="content">
      <section className="selecionar">
       
        <img src={logoImg} alt="All Pets"/>
        <h1 className="titulo">Cadastro</h1>
       
        <select style={{marginTop:10}} onChange={(e) => setTypeUser(e.target.value)}>
          <option value={0}>Escolha seu Perfil</option>
          <option value={1}>Dono de Animais</option>
          <option value={2}>Cuidador de Animais</option>
        </select>
        <Link className="ancora2" to="/login">
        <FiArrowLeft size={16} color="#9C27B0"/>
        Voltar ao Login
      </Link>
      <Link className="ancora2" to="/">
        <FiArrowLeft size={16} color="#9C27B0"/>
        Voltar ao Home
      </Link>
      </section>

      {typeUser == 0 &&  
        <>
          <div className="container">
            <h1>Bem-Vindo</h1>
            <p>Escolha ao lado qual tipo de usuário você dejesa se cadastrar-se</p>
            <img src={bannerImg} className="banner" alt="Banner All Pets"/>
          </div>
         
        </>
      }


        {typeUser == 1 &&  
         <form className="formStyle" onSubmit={handleRegister}>
          
            <h1 style={{marginTop:5}}>Informações Pessoais</h1>

            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="Digite seu nome" value={name} 
            onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Digite seu email" value={email} 
            onChange={(e) => setEmail(e.target.value)} required/>

            <label htmlFor="senha">Senha</label>
            <input  id="senha" type="password" placeholder="Digite sua senha" value={password} 
            onChange={(e) => setPassword(e.target.value)} minLength="8" required/>

            <label htmlFor="rg">RG</label>
            <input  id="rg" type="text" placeholder="Digite seu RG" value={rg}
             onChange={(e) => setRg(e.target.value)} minLength="9" required/>

            <label htmlFor="cpf">CPF</label>
            <input  id="cpf" type="number" placeholder="Digite seu CPF" value={cpf}
             onChange={(e) => setCpf(e.target.value)} minLength="11" required/>

            <label htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" type="number" placeholder="Digite seu whatsapp" value={whatsapp} 
            onChange={(e) => setWhatsapp(e.target.value)} minLength="11" required/>
            
            <label htmlFor="Valor">Nascimento</label>
            <input id="date" type="date" value={birthDate}
             onChange={(e) => setBirthDate(e.target.value)} required/>

              <label htmlFor="twoFactor">Deseja ter autenticação via SMS:</label>
              <select id="twoFactor" style={{marginTop:10}} onChange={(e) => setTwoFactor(e.target.value)} required>
                <option value="">Selecione</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
            <button className="button" type="submit">Cadastrar-se</button>
          </form>
        }

        {typeUser == 2 &&  
          <form className="formStyle" onSubmit={handleRegister}>
              <h1 style={{marginTop:5}}>Informações Pessoais</h1>
              
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Digite seu nome" value={name} 
              onChange={(e) => setName(e.target.value)} required/>

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Digite seu email" value={email} 
              onChange={(e) => setEmail(e.target.value)} required/>

              <label htmlFor="senha">Senha</label>
              <input  id="senha" type="password" placeholder="Digite sua senha" value={password} 
              onChange={(e) => setPassword(e.target.value)} minLength="8" required/>

              <label htmlFor="rg">RG</label>
              <input  id="rg" type="text" placeholder="Digite seu RG" value={rg}
              onChange={(e) => setRg(e.target.value)} minLength="9" required/>

              <label htmlFor="cpf">CPF</label>
              <input  id="cpf" type="number" placeholder="Digite seu CPF" value={cpf}
              onChange={(e) => setCpf(e.target.value)} minLength="11" required/>

              <label htmlFor="whatsapp">WhatsApp</label>
              <input id="whatsapp" type="number" placeholder="Digite seu whatsapp" value={whatsapp} 
              onChange={(e) => setWhatsapp(e.target.value)} minLength="11" required/>
              
              <label htmlFor="graduacao">Graduação</label>
              <input id="graduacao" type="text" placeholder="Digite sua graduação" value={graduacao}
              onChange={(e) => setGraduacao(e.target.value)} required/>

              <label htmlFor="Valor">Valor da Hora</label>
              <input id="Valor" type="number" placeholder="R$ " value={valueTime}
              onChange={(e) => setValueTime(e.target.value)} required/>

              <label htmlFor="Valor">Nascimento</label>
              <input id="date" type="date" value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)} required/>

              <label htmlFor="twoFactor">Deseja ter autenticação de via SMS:</label>
              <select id="twoFactor" style={{marginTop:10}} onChange={(e) => setTwoFactor(e.target.value)} required>
                <option value="">Selecione</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
              <button className="button" type="submit">Cadastrar-se</button>
            </form>
        }

    </div>
  </div>
  </>
)};

export default FormularioRegistro;