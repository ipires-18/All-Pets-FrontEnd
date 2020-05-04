import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Site from './pages/Institucional';
import CadPerfil from './pages/CadPerfil';
import CadInfo from './pages/CadInfo';
import CadEndereco from './pages/CadEndereco';
import CadEnderecoSec from './pages/CadEnderecoSec';
import CadTermo from './pages/CadTermo';
import CadPet from './pages/CadPet';
import CadCuidador from './pages/CadCuidador';
import DashboardCuidador from './pages/Dashboard/PropostasCuidador';
import GraficosCuidador from './pages/Dashboard/GraficosCuidador';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Site}></Route>
                <Route path="/Login"  component={Login}></Route>
                <Route path="/perfil" component={CadPerfil}></Route>
                <Route path="/info" component={CadInfo}></Route>
                <Route path="/endereco"  component={CadEndereco}></Route>
                <Route path="/complemento"  component={CadEnderecoSec}></Route>
                <Route path="/termo"  component={CadTermo}></Route>
                <Route path="/pet"  component={CadPet}></Route>
                <Route path="/cuidador"  component={CadCuidador}></Route>
                <Route path="/propostas" component={DashboardCuidador}></Route>
                <Route path="/graficos" component={GraficosCuidador}></Route>
            </Switch>
        </BrowserRouter>
    );
}