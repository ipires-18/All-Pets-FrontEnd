import React,{useState, useEffect} from 'react';
import NavBarCuidador from '../../../../components/NavCuidador';
import api from '../../../../services/api';
import MyVerticallyCenteredModalService from '../../../../components/ModalServices';

const PainelOfertas = () => {

  const  idCare =  localStorage.getItem('idUser');
  const [services, setServices] = useState([]);
  const [idService, setIdService] = useState(['']);
  const [status] = useState(0);
  const [modalShow, setModalShow] = useState(false);
 

  function handleServices(){
    api.get('service', {
      params:{
        status,
        idCare
      }
    }).then(response => setServices(response.data));

  }


  useEffect(() => {

    handleServices();
    
  }, [status])


  function testeId(idx) { setIdService(services[idx].idService); setModalShow(true);}

  localStorage.setItem("idService", idService);
  localStorage.setItem("status", status);
  
  
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
                  <p>{services.fkOwner.name}</p>
                        
                  <strong>Descrição:</strong>
                  <p>{services.description}</p>


                  <strong>Total de Horas de Serviço:</strong>
                  <p>{`${services.qtdTime}º Horas`}</p>


                  <strong>Valor por hora por serviço:</strong>
                  <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(services.fkCare.valueTime)}</p>

                  <div className="left" style={{display:'flex',justifyContent:'flex-end'}}>
                    <strong style={{fontSize:20}}>Total do serviço:</strong>
                    <p style={{fontSize:20}}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(services.fkCare.valueTime * services.qtdTime)}</p>
                  </div>

                  <button  onClick={()=> {testeId(index)}}   className="button"  type="button" style={{display:'flex', color:'#FFF',
                    background:'#9C27B0',flexDirection:'column', justifyContent:'center', 
                    alignItems:'center'}}>
                      Ver mais
                  </button>
                
                  <hr/>
                </li>
                  ))}
            </ul>   
            <MyVerticallyCenteredModalService   show={modalShow}
                  onHide={() => setModalShow(false)} />
          </section>
       </form>
     </div>     
    </>
  )
}

export default PainelOfertas;