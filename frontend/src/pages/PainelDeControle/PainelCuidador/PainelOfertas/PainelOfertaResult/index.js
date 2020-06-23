import React,{useState, useEffect} from 'react';
import NavBarCuidador from '../../../../../components/NavCuidador';
import api from '../../../../../services/api';

const PainelOfertasResult = () => {

  const idCare = localStorage.getItem('idUser')
  const [pet, setPet] = useState([]);
  const [status] = useState(1);
  
  useEffect(() => {api.get('service', {
    params:{
      status,
      idCare
    }
  }).then(response => {setPet(response.data);})},[]);
  
  console.log(pet)
 
  return (
    <>  
      <NavBarCuidador/>
     <div style={{margin:30}}>
       <form> 
        <section  style={{background:'#FFF', widthMax:'1000px', 
          width:'100%', borderRadius:'8px', padding:'40px'}}>
          <h1 style={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:500}}>Descrições dos serviços</h1>
          <strong style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Legal, agora é entrar em contato com seu cliente e cuidar do Pet, Divirta-se *-*</strong>
          <strong style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Abaixo se encontra informações do dono, entre em contato com ele</strong>
          <ul>
              {pet.map((pet) => (
                <li style={{display:'flex', flexDirection:'column', margin:'10px'}} key={pet.idPet}>
                  <div style={{display:'flex', margin:'0 auto'}}>
                    <div style={{display:'flex', flexDirection:'column' ,
                      justifyContent:"flex-start", alignItems:'flex-start' }}>
                      
                      <strong>Nome do Dono</strong>
                      <p>{`${pet.fkOwner.name}`}</p>

                      <strong>Nome do Animal</strong>
                      <p>{pet.fkOwner.animal.name}</p>
                            
                      <strong>Tipo de Pet</strong>
                      <p>{pet.fkOwner.animal.typePet}</p>

                    </div>

                    <div style={{display:'flex', flexDirection:'column' ,
                      justifyContent:"center", alignItems:'center', marginLeft:'50px'}}>
                      
                      <strong>Email</strong>
                      <p>{`${pet.fkOwner.email}`}</p>

                      <strong>Nascimento</strong>
                      <p>{pet.fkOwner.birthDate}</p>
                            
                      <strong>Whatsapp</strong>
                      <p>{pet.fkOwner.whatsapp}</p>

                    </div>


                    <div style={{display:'flex', flexDirection:'column' ,
                      justifyContent:"flex-end", alignItems:'flex-end', marginLeft:'50px'}}>
                      
                      <strong>Cidade</strong>
                      <p>{pet.fkOwner.address.city}</p>

                      <strong>Bairro</strong>
                      <p>{pet.fkOwner.address.bairro}</p>
                            
                      <strong>Endereco</strong>
                      <p>{pet.fkOwner.address.endereco}</p>

                    </div>

                  </div>
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

export default PainelOfertasResult;