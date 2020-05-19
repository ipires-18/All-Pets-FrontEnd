import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import AllPets from '../Animations/LogoRoxa/index';
import Nav from '../Nav/index';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <>
      <Router>
      <MDBNavbar color="white" dark expand="md">
        <MDBNavbarBrand>
          <AllPets />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} style={{backgroundColor:"#9C27B0"}}/>
        <MDBCollapse dark id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="#!" className="black-text"> <strong> Email: </strong>Davi.teixeira10@gmail.com</MDBNavLink>
              <MDBNavLink to="#!" className="black-text"> <strong> Usuário:</strong> Davi Teixeira</MDBNavLink>
              <MDBNavLink to="#!" className="black-text"> <strong> Perfil:</strong><strong style={{color:"green", fontWeight:"normal"}}> Ativado </strong></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Nav/>
    </Router>
     
    </>

    );
  }
}

export default NavbarPage;