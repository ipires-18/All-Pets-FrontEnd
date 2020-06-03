import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBView } from 'mdbreact';
import { Link } from 'react-router-dom';
import Banner from '../../assets/banner.svg';
import Logo from '../Animations/index';
import ButtonRoxo from '../ButtonRoxo/index';
import CardContent from '../CardContent/index';


class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src={Banner}>
              <MDBNavbar dark expand="md">
                <MDBContainer>
                  <MDBNavbarBrand href="/">
                   <strong>All Pets</strong> 
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem >
                        <Link to="/login"><ButtonRoxo nome="Entrar" color="#FFF"/></Link>
                      </MDBNavItem>
                      <MDBNavItem >
                        <Link to="/registro"><ButtonRoxo  nome="Cadastro" color="#9C27B0"/></Link>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            <div className="flex-center flex-column text-white text-center">
                <Logo/><br/>
                <h5 style={{fontWeight:'bold'}}>Bem - Vindos</h5><br />
              <p style={{fontWeight:'bold'}}>Um serviços para donos de animais e cuidadores</p>
            </div>
          </MDBView>
        </header>

        <main>
       
          <MDBContainer className="text-center my-5">
            <CardContent/>
          </MDBContainer>
        </main>

      </div>
    );
  }
}

export default FullPageIntroWithNonFixedTransparentNavbar;