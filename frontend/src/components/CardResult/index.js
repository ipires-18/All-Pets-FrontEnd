import React,{useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api'

export default function CardResult(){

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get('donos').then(response => {
      setUsuarios(response.data);
    })
  },[])

  return(
    <>
      <section className="result-container">
          <ul>
          {usuarios.map(usuarios =>(
             <li key={usuarios.idUser}>
              <div className="items-result">
                <strong>Nome:</strong>
                <p>{usuarios.name}</p>
                <strong>Graduação:</strong>
                <p>{usuarios.graduacao}</p>
              </div>
              <div className="items-result">
                <strong>Nascimento:</strong>
                <p>{usuarios.birthDate}</p>
                <strong>Valor da hora:</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(usuarios.valueTime)}</p>
              </div>
             <button style={{width:80, borderRadius:8, background:'#9C27B0', color:'#fff'}}>Contratar</button>
            </li>
          ))}
          </ul>
      </section>
    </>
  )
}