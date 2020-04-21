import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
<<<<<<< HEAD
import PessoaEndereco from './pages/PessoaEndereco';
import Endereco from './pages/Endereco';

=======
import CadastroSec from './pages/Cadastro-sec';
import CadastroTer from './pages/Cadastro-ter';
import CadastroQuat from './pages/Cadastro-quat';
>>>>>>> origin/Cadastro-NM

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
<<<<<<< HEAD
                <Route path="/cadastro" exact component={Cadastro}></Route>
                <Route path="/pessoa" exact component={PessoaEndereco}></Route>
                <Route path="/endereco" exact component={Endereco}></Route>
=======
                <Route path="/cadastrar" exact component={Cadastro}></Route>
                <Route path="/informacao" exact component={CadastroSec}></Route>
                <Route path="/cuidador" exact component={CadastroTer}></Route>
                <Route path="/termo" exact component={CadastroQuat}></Route>
                
>>>>>>> origin/Cadastro-NM
            </Switch>
        </BrowserRouter>
    );
}