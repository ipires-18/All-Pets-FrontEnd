import React,{useState, useEffect} from 'react';
import NavDono from '../../../../components/NavDono';
import api from '../../../../services/api';


const PainelContrato = () => {

  const  idOwner =  localStorage.getItem('idUser');
  const [historico, setHistorico] = useState([]);
  const [ord, setOrd] = useState(true);
  const [status] = useState(1);

  useEffect(() => {

    api.get('service', {
      params:{
        status,
        idOwner,
        ord
      }
    }).then(response => setHistorico(response.data));
    
  }, [])

  console.log(historico)


  return (
    <>
      <NavDono/>
      <div style={{margin:30}}>
        <section  style={{background:'#FFF', widthMax:'1000px', 
          width:'100%', borderRadius:'8px', padding:'40px'}}>

            <h1 style={{display:'flex', flexDirection:'row', justifyContent:'center', 
            alignItems:'center', fontWeight:500}}>Historico de contratos</h1>

            <section className="container">
                <div className="contendhear" style={{display:'flex', justifyContent:'space-between', margin:'0 auto'}}>
                  <strong><span>Ultimos Contratos</span></strong>
                </div>
                
                <table role="table" class="table">
                  <thead role="rowgroup">
                    <tr role="row">
                      <th role="columnheader">ID do Serviço</th>
                      <th role="columnheader">Nome do Cuidador</th>
                      <th role="columnheader">Descrição do Serviço</th>
                      <th role="columnheader">Valor Pago</th>
                      <th role="columnheader">Animal</th>
                    </tr>
                  </thead>
                
                    {historico.map(historicos => (
                      <tbody role="rowgroup">
                        <tr key={historicos.idService} role="row">
                          <td role="cell" data-title="Serviço">{historicos.idService}</td>

                          <td role="cell" data-title="Serviço">{historicos.fkCare.name}</td>

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

export default PainelContrato;
