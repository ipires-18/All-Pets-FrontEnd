import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink,MDBNavbarNav } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav style={{background:"#FFF"}}>
      <MDBNavLink active to="/propostas" className="black-text"> <strong>Cuidadores</strong> </MDBNavLink>
      <MDBNavLink to="/contratos" className="black-text"><strong>Contratos</strong></MDBNavLink>
      <MDBNavLink to="/perfilDono" className="black-text"><strong>Editar Perfil</strong></MDBNavLink>
      <MDBNavLink to="#!" className="black-text"><strong>Sair</strong></MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);