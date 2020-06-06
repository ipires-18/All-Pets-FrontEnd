import React from "react";
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";


export default () => (
  <BrowserRouter>

    <MDBNav style={{background:"#FFF"}}>
      <MDBNavLink active to="/propostas" className="black-text"> <strong>Cuidadores</strong> </MDBNavLink>
      <MDBNavLink to="/contratos" className="black-text"><strong>Contratos</strong></MDBNavLink>
      <MDBNavLink to="/perfilDono" className="black-text"><strong>Editar Perfil</strong></MDBNavLink>
      <MDBNavLink to="#!" className="black-text"><strong><Link to="/">Sair</Link></strong></MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);