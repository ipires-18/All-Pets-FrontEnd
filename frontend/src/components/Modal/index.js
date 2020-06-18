import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api';
import swal from 'sweetalert';

export default function MyVerticallyCenteredModal(props) {
  
  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');


  const  idUserDono = localStorage.getItem('idUser')
  const  idUserCuidador =  localStorage.getItem('idUserCuidador');

  console.log("Quantidade: "+quantidade)
  console.log("Descrição: "+descricao)
  console.log("IdUserDone: "+idUserDono)
  console.log("IdUserCuidador: "+idUserCuidador)
  
  
  async function handleService(e){
      e.preventDefault();
      try{

        const data = {
          "fkCare": {
            "idUser": idUserDono
          },
          "fkOwner": {
            "idUser": idUserCuidador
          },
          "qtdTime":quantidade,
          "description":descricao   
        }
        
      
      const response = await api.post('service', data);
        
      localStorage.setItem('idServices', response.data.idService);


      swal("Serviço", "Sucesso em efetuar o serviço", "success");

      }catch(err){
          swal("Serviço", "Falha no Serviço", "error");
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
          <h3 style={{color:'#9C27B0', fontWeight:700}}>Informações sobre o serviço</h3> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleService}>
          <div class="item-input">
            <label htmlFor="valor" style={{display:'flex', justifyContent:'flex-start'}}>Quantidade de Horas</label>
            <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)} 
              id="valor" type="number" style={{width:'100%', padding:'8px', height:'50px', borderRadius:'6px'}} 
              placeholder="R$ "/>
          </div>
          <div class="item-input">
            <label htmlFor="cidade" style={{display:'flex', justifyContent:'flex-start'}}>Descrição</label>
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} 
            id="cidade" type="text" style={{width:'100%', padding:'8px', height:'50px', borderRadius:'6px'}}
            placeholder="Digite sua descrição"/>
          </div>
          <button onClick={props.onHide} type="submit" className="button" 
            style={{width:400, background:'#9C27B0', color:'#fff', margin:22, display:'flex', justifyContent:'center', 
            margin:'0 auto'}}>
              Contratar
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}