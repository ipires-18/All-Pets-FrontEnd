import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard
          className='card-image'
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> Cuidador
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Historico de Serviços</strong>
              </MDBCardTitle>
              <p>
                Você cuidador pode ver atraves de um historico
                os seus rendimentos que teve no ultimo mês,
                a quantidade de serviços prestados e quantas
                horas já trabalhos nesses periodos
              </p>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          >
          <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
                <MDBIcon icon='desktop' /> All Pets
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Startup </strong>
              </MDBCardTitle>
              <p>
               Nós temos a missão de achar para você dono de animais 
               uma pessoa especializada que possa cuidadar dele em um 
               momento que você estiver ausente, ou queria contratar
              </p>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      
      <MDBCol md='4'>
        <MDBCard
          className='card-image'
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> Dono de Animais
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Buscar Cuidadores</strong>
              </MDBCardTitle>
              <p>
                Aqui você pode buscar os melhores especialista 
                de animais de estimação, tento uma busca bem 
                simples e rápida, onde localizamos por região 
                qual cuidador está proximo de você
              </p>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      
      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
               marginTop:"20px"
              }}>
          <div className="text-white text-center d-flex align-items-center  rgba-indigo-strong py-5 px-4 rounded">
            <div>
              <h6 className="orange-text">
                <MDBIcon icon="plane" />
                <strong> All Pets</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Como Funciona?</strong>
              </h3>
              <p className="pb-3">
               É bem simples você pode fazer um cadastro em nosso site 
               preencher suas informações e escolher qual tipo de usuário 
               você é, caso for um dono irá cadastrar os dados do seu amigo
               pet, caso for um cuidador irá cadastrar seus dados Técnicos
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;