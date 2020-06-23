import React,{useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';

export default function MyVerticallyCenteredModalService(props) {
  
  const idService = localStorage.getItem('idService');
  const [status, setStatus] = useState(1)

  const history = useHistory();

    
 async function handleAccept(e) {
  e.preventDefault();
  setStatus(1)
    console.log("Aceitar: "+status);

  const res = await api.put(`service/${idService}/${status}`);

  swal("Proposta", "Aceita com sucesso", "success");

  history.push('/result');

  console.log(res)
      
 }


 async function handleReject(e) {
    e.preventDefault();
    setStatus(2)

    const res = await api.put(`service/${idService}/${status}`);
     
    swal("Proposta", "Rejeitada com sucesso", "success");

    history.push('/cuidador');

    
    console.log("Rejeitar: "+status);
        
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
            <button onClick={props.onHide, handleAccept} type="submit" className="button" 
              style={{width:400, background:'#9C27B0', color:'#fff',  display:'flex', justifyContent:'center', 
              margin:'10px auto'}}>
                Aceitar
            </button>
        </form>

        <form action="" onSubmit={handleReject}>
          <button onClick={props.onHide, handleReject} type="submit" className="button" 
            style={{width:400, background:'#B787E8', color:'#fff',  display:'flex', justifyContent:'center', 
            margin:'0 auto'}}>
            Rejeitar
          </button>
        </form>

      </Modal.Body>
    </Modal>
  );
}