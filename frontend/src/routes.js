import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PessoaEndereco from './pages/PessoaEndereco';
import Endereco from './pages/Endereco';
import CadastroSec from './pages/Cadastro-sec';
import CadastroTer from './pages/Cadastro-ter';
import CadastroQuat from './pages/Cadastro-quat';

import CadPerfil from './pages/CadPerfil';
import CadInfo from './pages/CadInfo';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastrar"  component={Cadastro}></Route>
                <Route path="/informacao"  component={CadastroSec}></Route>
                <Route path="/cuidador"  component={CadastroTer}></Route>
                <Route path="/termo"  component={CadastroQuat}></Route>
                <Route path="/pessoa"  component={PessoaEndereco}></Route>
                <Route path="/endereco"  component={Endereco}></Route>

                
                <Route path="/perfil" component={CadPerfil}></Route>
                <Route path="/info" component={CadInfo}></Route>
                
            </Switch>
        </BrowserRouter>
    );
}