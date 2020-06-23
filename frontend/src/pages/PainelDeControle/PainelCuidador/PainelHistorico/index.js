import React,{useState, useEffect} from 'react';
import NavBarCuidador from '../../../../components/NavCuidador';
import api from '../../../../services/api';
import {Link} from 'react-router-dom';


const PainelHistorico = () => {

  const  idCare =  localStorage.getItem('idUser');
  const [historico, setHistorico] = useState([]);
  const [arquivo, setArquivo] = useState([]);
  const [status] = useState(1);
  const [ord] = useState(true);
  // const status = localStorage.getItem('status')
 

  useEffect(() => {
    console.log(status)
    api.get('service', {
      params:{
        status,
        idCare,
        ord
      }
    }).then(response => setHistorico(response.data));
    
  }, [])

  console.log(historico)


  return (
    <>
      <NavBarCuidador/>
      <div style={{margin:30}}>
        <section  style={{background:'#FFF', widthMax:'1000px', 
          width:'100%', borderRadius:'8px', padding:'40px'}}>

            <h1 style={{display:'flex', flexDirection:'row', justifyContent:'center', 
            alignItems:'center', fontWeight:500}}>Historico dos serviços</h1>

            <section className="container">
                <div className="contendhear" style={{display:'flex', justifyContent:'space-between', margin:'0 auto'}}>
                  <strong><span>Ultimos Contratos: <strong>Aceitos</strong></span></strong>

          
                    <button className="button"  type="button" 
                      style={{display:'flex', justifyContent:'center', alignItems:'center', 
                      width:200, color:'#FFF',background:'#9C27B0'}}>
                         <a style={{color:'#FFF'}} target='_blank' href={'http://ec2-18-230-69-117.sa-east-1.compute.amazonaws.com:8080/arquivo'}>
                          Baixar todos arquivos
                           </a>
                    </button>
            

                   
               
                </div>
                
                <table role="table" class="table">
                  <thead role="rowgroup">
                    <tr role="row">
                      <th role="columnheader">ID do Serviço</th>
                      <th role="columnheader">Nome do Cliente</th>
                      <th role="columnheader">Descrição do Serviço</th>
                      <th role="columnheader">Valor Ganho</th>
                      <th role="columnheader">Animal</th>
                    </tr>
                  </thead>
                
                    {historico.map(historicos => (
                      <tbody role="rowgroup">
                        <tr key={historicos.idService} role="row">
                          <td role="cell" data-title="Serviço">{historicos.idService}</td>

                          <td role="cell" data-title="Serviço">{historicos.fkOwner.name}</td>

                          <td role="cell" data-title="descricao">{historicos.description}</td>

                          <td role="cell" data-title="descricao">
                            {Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(historicos.fkCare.valueTime * historicos.qtdTime)}
                          </td>
                          <td role="cell" data-title="Download">{historicos.fkOwner.animal.name}</td>
                        </tr>
                      </tbody> 
                    ))}
                      
               </table>
              </section>
          </section>
     </div>     
    </>
  )
}

export default PainelHistorico;