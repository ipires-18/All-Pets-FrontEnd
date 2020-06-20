import React,{useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';

export default function MyVerticallyCenteredModalService(props) {
  
  const idService = localStorage.getItem('idService');
  const [status, Setstatus] = useState(1)

  const history = useHistory();

    
 async function handleAccept(e) {
  e.preventDefault();

  const status = localStorage.getItem('status');
        
  const res = await api.put(`service/${idService}/${status}`);


  if(res.status == 204 && status == 1){
    swal("Proposta", "Aceita com sucesso", "success");
    history.push('/result')
  } 
  
  Setstatus(2)
  swal("Proposta", "Rejeitada com sucesso", "success");
  history.push('/cuidador')
    
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
          <h3 style={{color:'#9C27B0', fontWeight:700, display:'flex', justifyContent:'center', alignItems:'center'}}>
            Deseja Realmente Aceitar o serviço?
          </h3> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAccept}>
          <div style={{display:'flex'}}>
            <button onClick={props.onHide, handleAccept} type="submit" className="button" 
              style={{width:400, background:'#9C27B0', color:'#fff', margin:22, display:'flex', justifyContent:'center', 
              margin:'0 10px'}}>
                Aceitar
            </button>
            <button onClick={props.onHide} type="submit" className="button" 
              style={{width:400, background:'#B787E8', color:'#fff', margin:22, display:'flex', justifyContent:'center', 
              margin:'0 auto'}}>
                Rejeitar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}