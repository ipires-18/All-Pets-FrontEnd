import React from 'react';
import FormularioLogin from '../../components/FormularioLogin';
import FormLoginProvider from '../../context/FormLogin';


export default function Login(){
  return(
   
      <FormLoginProvider>
        
        <FormularioLogin/>
        
      </FormLoginProvider>
   
  )
}
