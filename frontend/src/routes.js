import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import DashboardDono from './pages/Dashboard/TelaBuscadores/';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/dashboard" component={DashboardDono}></Route>
            </Switch>
        </BrowserRouter>
    );
}