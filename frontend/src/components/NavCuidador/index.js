import React from "react";
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav style={{background:"#FFF"}}>
      <MDBNavLink active to="/ofertas" className="black-text"> <strong>Propostas</strong> </MDBNavLink>
      <MDBNavLink to="/historico" className="black-text"><strong>Historico</strong></MDBNavLink>
      <MDBNavLink to="/perfilCui" className="black-text"><strong>Editar Perfil</strong></MDBNavLink>
      <MDBNavLink to="#!" className="black-text"><strong><a href="/login">Sair</a></strong></MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);