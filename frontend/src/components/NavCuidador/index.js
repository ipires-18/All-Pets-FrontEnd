import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink,MDBNavbarNav } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav style={{background:"#FFF"}}>
      <MDBNavLink active to="/ofertas" className="black-text"> <strong>Propostas</strong> </MDBNavLink>
      <MDBNavLink to="/historico" className="black-text"><strong>Historico</strong></MDBNavLink>
      <MDBNavLink to="/perfilCui" className="black-text"><strong>Editar Perfil</strong></MDBNavLink>
      <MDBNavLink to="#!" className="black-text"><strong>Sair</strong></MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);