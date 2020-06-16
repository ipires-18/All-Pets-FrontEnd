import React,{useState, useEffect} from 'react';
import NavBarCuidador from '../../../../components/NavCuidador';
import api from '../../../../services/api';
import {useHistory} from 'react-router-dom';

const PainelOfertas = () => {

  const [services, setServices] = useState([]);
  const [idService, setIdService] = useState([]);
  const [status, setStatus] = useState(0);
  const [ord] = useState(true);
  const  idUserDono = localStorage.getItem('idUser')
  const  idUserCuidador =  localStorage.getItem('idUserCuidador');
  const history = useHistory();

  useEffect(() => {
      
    api.get('service', {params: status, idUserCuidador, idUserDono, ord}).then(response => {
      setServices(response.data);

    })
  },[]);

  
 async function test(idx) {
    
    // await setIdService(services[idx].idService); 
    // await setStatus(status + 1); 

    // const res = await api.put('service', {idService, status});

    // console.log(res)

    if(status == 0 ){
      alert("Oferta aceita")
      history.push("/result")
    }
    
    
  }
  
 

  


  return (
    <>  
      <NavBarCuidador/>
     <div style={{margin:30}}>
       <form> 
        <section  style={{background:'#FFF', widthMax:'1000px', 
          width:'100%', borderRadius:'8px', padding:'40px'}}>
          <h1 style={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:500}}>Descrições dos serviços</h1>
          <ul>
              {services.map((services, index) => (
                <li style={{display:'flex', flexDirection:'column', margin:'10px'}} key={services.idService}>
                  <strong>Nome do Cliente:</strong>
                  <p>{services.fkCare.name}</p>
                        
                  <strong>Descrição:</strong>
                  <p>{services.description}</p>


                  <strong>Total de Horas de Serviço:</strong>
                  <p>{`${services.qtdTime}º Horas`}</p>


                  <strong>Valor por hora por serviço:</strong>
                  <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(services.fkOwner.valueTime)}</p>

                  <div className="left" style={{display:'flex',justifyContent:'flex-end'}}>
                    <strong style={{fontSize:20}}>Total do serviço:</strong>
                    <p style={{fontSize:20}}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(services.fkOwner.valueTime * services.qtdTime)}</p>
                  </div>
                  
                  <button onClick={()=> {test(index)}} className="button"  type="button" style={{display:'flex', color:'#FFF',
                    background:'#9C27B0',flexDirection:'column', justifyContent:'center', 
                    alignItems:'center'}}>
                      Aceitar
                  </button>
                  <button className="button"  type="button" style={{display:'flex', color:'#FFF',
                    background:'#5C5C5C',flexDirection:'column', justifyContent:'center', 
                    alignItems:'center'}}>
                      Rejeitar
                  </button>
                  <hr/>
                </li>
                  ))}
            </ul>   
          </section>
       </form>
     </div>     
    </>
  )
}

export default PainelOfertas;