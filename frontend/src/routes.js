import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import DashboardCuidador from './pages/Dashboard/PropostasCuidador';
import GraficosCuidador from './pages/Dashboard/GraficosCuidador';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/propostas" component={DashboardCuidador}></Route>
                <Route path="/graficos" component={GraficosCuidador}></Route>
            </Switch>
        </BrowserRouter>
    );
}