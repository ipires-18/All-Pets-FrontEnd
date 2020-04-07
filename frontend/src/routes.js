import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PessoaEndereco from './pages/PessoaEndereco';
import Endereco from './pages/Endereco';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastro" exact component={Cadastro}></Route>
                <Route path="/pessoa" exact component={PessoaEndereco}></Route>
                <Route path="/endereco" exact component={Endereco}></Route>
            </Switch>
        </BrowserRouter>
    );
}