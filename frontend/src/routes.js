import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroSec from './pages/Cadastro-sec';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastrar" exact component={Cadastro}></Route>
                <Route path="/informacao" exact component={CadastroSec}></Route>
                
            </Switch>
        </BrowserRouter>
    );
}