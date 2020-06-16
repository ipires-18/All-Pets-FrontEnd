import React,{useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api'

export default function CardResult(){

  //const [usuarios, setUsuarios] = useState([]);


  //console.log(currentRegion)
  
  // useEffect(() => {
  //   api.get('cuidadores/search').then(response => {
  //     setUsuarios(response.data);
  //   })
  // },[])


  return(
    <>
      {/* <section className="result-container">
          <ul>
          {currentRegion.map(currentRegion =>(
             <li key={currentRegion.idUser}>
              <div className="items-result">
                <strong>Nome:</strong>
                <p>{currentRegion.name}</p>
                <strong>Graduação:</strong>
                <p>{currentRegion.graduacao}</p>
              </div>
              <div className="items-result">
                <strong>Nascimento:</strong>
                <p>{currentRegion.birthDate}</p>
                <strong>Valor da hora:</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(currentRegion.valueTime)}</p>
              </div>
             <button style={{width:80, borderRadius:8, background:'#9C27B0', color:'#fff'}}>Contratar</button>
            </li>
          ))}
          </ul>
      </section> */}
    </>
  )
}