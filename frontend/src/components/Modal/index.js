import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api';
import swal from 'sweetalert';

export default function MyVerticallyCenteredModal(props) {

  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const  idUserDono = localStorage.getItem('idUser')
  const  idUserCuidador =  localStorage.getItem('idUserCuidador');

  async function handleService(e){
      e.preventDefault();
      try{

        const data = {
          "fkOwner": {
            "idUser": idUserDono
          },
          "fkCare": {
            "idUser": idUserCuidador
          },
          "qtdTime":quantidade,
          "description":descricao   
        }
        
      const response = await api.post('service', data);



      if(response.status == 201){

        const idUser =  localStorage.getItem('idUser');
        const twoFactor = localStorage.getItem('twoFactor');
        const twoFactorCode = localStorage.getItem('twoFactorCode');
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const cpf = localStorage.getItem('cpf');
        const birthDate = localStorage.getItem('birthDate');
        const whatsapp = localStorage.getItem('whatsapp');
        const rg = localStorage.getItem('rg');
        const graduacao = localStorage.getItem('graduacao');
        const valueTime = localStorage.getItem('valueTime');
        const typeUser = localStorage.getItem('typeUser');
        const idAddress = localStorage.getItem('idAddress');
        const idPet = localStorage.getItem('idPet');
       
        const res = await api.put(`donos/${idUser}`, {
          twoFactor,
          twoFactorCode,
          name,
          email,
          password,
          cpf,
          birthDate,
          whatsapp,
          rg,
          graduacao,
          valueTime,
          typeUser,
          idAddress,
          idPet
        });
      }
        
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
              placeholder="Digite a quantidade de horas"/>
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