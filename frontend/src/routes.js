import React,{Component} from 'react';
import {isAuthenticated} from '../src/auth';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../src/pages/Home/index';
import Login from '../src/pages/Login/index';
import Cadastro from '../src/pages/Registro/index';
import CadastroPet from '../src/components/FormularioPet';
import PainelDono from '../src/pages/PainelDeControle/PainelDono/PainelResultado';
import PainelCuidador from '../src/pages/PainelDeControle/PainelCuidador/PainelOfertas';

// const PrivateRoute = ({component: component, ...rest }) => (
//     <Route {...rest} render={props => (
//         isAuthenticated() ? (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{pathname:'/', state:{from:props.location}}} />
//         )
//     )}/>
// );


export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login"  component={Login}/>
                <Route path="/registro"  component={Cadastro}/>
                <Route path="/pet"  component={CadastroPet}/>
                <Route path="/donos" component={PainelDono}/>
                <Route path="/cuidador" component={PainelCuidador}/>
            </Switch>
        </BrowserRouter>
    );
}