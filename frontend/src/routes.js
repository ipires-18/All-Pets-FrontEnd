import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home/index';
import Login from '../src/pages/Login/index';
import Cadastro from '../src/pages/Registro/index';
import CadastroPet from '../src/components/FormularioPet';
import PainelDono from '../src/pages/PainelDeControle/PainelDono/PainelResultado';
import PainelCuidador from '../src/pages/PainelDeControle/PainelCuidador/PainelOfertas';


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