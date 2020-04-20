import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Site from './pages/Institucional'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Site}></Route>
            </Switch>
        </BrowserRouter>
    );
}