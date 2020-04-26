import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Site from './pages/Institucional';
import Dashboard from './pages/Dashboard/TelaBuscadores';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Site}></Route>
                <Route path="/Login"  component={Login}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    );
}