import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroSec from './pages/Cadastro-sec';
import CadastroTer from './pages/Cadastro-ter';
import CadastroQuat from './pages/Cadastro-quat';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastrar" exact component={Cadastro}></Route>
                <Route path="/informacao" exact component={CadastroSec}></Route>
                <Route path="/cuidador" exact component={CadastroTer}></Route>
                <Route path="/termo" exact component={CadastroQuat}></Route>
                
            </Switch>
        </BrowserRouter>
    );
}