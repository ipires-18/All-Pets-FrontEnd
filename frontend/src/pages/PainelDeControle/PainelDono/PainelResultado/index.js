import React,{useEffect} from 'react';
import NavPainel from '../../../../components/NavPainel';
import api from '../../../../services/api'


const PainelResultado = () => {

  useEffect(() => {
    api.get('donos').then(response => {
        console.log(response.data);
    })
  },[])

  return (
    <>
      <NavPainel/>
      Tela de Propostas Donos
    </>
  )
}

export default PainelResultado;