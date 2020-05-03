import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


import CadPerfil from './pages/CadPerfil';
import CadInfo from './pages/CadInfo';
import CadEndereco from './pages/CadEndereco';
import CadEnderecoSec from './pages/CadEnderecoSec';
import CadTermo from './pages/CadTermo';
import CadPet from './pages/CadPet';
import CadCuidador from './pages/CadCuidador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastrar"  component={Cadastro}></Route>
 
                <Route path="/perfil" component={CadPerfil}></Route>
                <Route path="/info" component={CadInfo}></Route>
                <Route path="/endereco"  component={CadEndereco}></Route>
                <Route path="/complemento"  component={CadEnderecoSec}></Route>
                <Route path="/termo"  component={CadTermo}></Route>
                <Route path="/pet"  component={CadPet}></Route>
                <Route path="/cuidador"  component={CadCuidador}></Route>

            </Switch>
        </BrowserRouter>
    );
}