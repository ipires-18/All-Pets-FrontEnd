import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api';
import swal from 'sweetalert';

export default function MyVerticallyCenteredModalAnimal(props) {
  
  const idUser =  localStorage.getItem('idUser');
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [typePet, setTypePet] = useState('')
  const [size, setSize] = useState('');
  const [observacao, setObservacao] = useState('');
 

  async function handleFormPet(e){
    e.preventDefault();

    const data = {
      name,
      age,
      breed,
      typePet,
      size,
      observacao,
      idUser
  }

    try{
      
    const res = await api.post('pets', data)

    if(res.status == 201){
      swal("Cadastro", "Animal Cadastrado", "success");
      console.log(res.data)
      localStorage.setItem("idPet", res.data.idPet);
    }
         
    }catch(err){
        swal("Cadastro", "Falha no Cadastro", "error");
       
    }
}
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 style={{color:'#9C27B0', fontWeight:700}}>Informações sobre o animal</h3> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <form onSubmit={handleFormPet}>

          <div class="item-input">
            <label htmlFor="nome" style={{display:'flex', justifyContent:'flex-start'}}>Nome do Pet</label>
            <input id="nome" type="text" placeholder="Digite o nome completo" value={name} 
                onChange={(e) => setName(e.target.value)}/>
          </div>

          <div class="item-input">
            <label htmlFor="raca" style={{display:'flex', justifyContent:'flex-start'}}>Tipo de Pet</label>
            <input id="raca" type="text" placeholder="Digite o nome da tipo de Pet" value={typePet}
                onChange={(e) => setTypePet(e.target.value)}/>
          </div>

          <div class="item-input">
            <label htmlFor="raca" style={{display:'flex', justifyContent:'flex-start'}}>Raça</label>
            <input id="raca" type="text" placeholder="Digite o nome da raça" value={breed}
                onChange={(e) => setBreed(e.target.value)}/>
          </div>
          
          <div class="item-input">
            <label htmlFor="idade" style={{display:'flex', justifyContent:'flex-start'}}>Idade</label>
            <input id="idade" type="text" placeholder="Digite o nome completo" value={age} 
                onChange={(e) => setAge(e.target.value)}/>
          </div>

          <div class="item-input">
            <label htmlFor="porte" style={{display:'flex', justifyContent:'flex-start'}}>Porte</label>
            <select id="porte" style={{marginTop:10}} onChange={(e) => setSize(e.target.value)}>
              <option value="">Selecione o porte</option>
              <option value={"P"}>Pequeno</option>
              <option value={"M"}>Medio</option>
              <option value={"G"}>Grande</option>
            </select>
          </div>

          <div class="item-input">
            <label htmlFor="raca" style={{display:'flex', justifyContent:'flex-start'}}>Observação</label>
            <input id="raca" type="text" placeholder="Digite o nome da observação" value={observacao}
                onChange={(e) => setObservacao(e.target.value)}/>
          </div>

          <button onClick={props.onHide} type="submit" className="button" 
            style={{width:400, background:'#9C27B0', color:'#fff', margin:22, display:'flex', justifyContent:'center', 
            margin:'0 auto'}}>
              Salvar pet
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}