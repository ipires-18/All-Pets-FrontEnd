import React,{Component} from 'react';
import {isAuthenticated} from '../src/auth';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../src/pages/Home/index';
import Login from '../src/pages/Login/index';
import Cadastro from '../src/pages/Registro/index';
import CadastroPet from '../src/components/FormularioPet';
import PainelDono from '../src/pages/PainelDeControle/PainelDono/PainelResultado';
import PainelDonoHistorico from '../src/pages/PainelDeControle/PainelDono/PainelContrato';
import PainelDonoEditarCadastro from '../src/pages/PainelDeControle/PainelDono/PainelEditarPerfil/PainelCadastro';
import PainelDonoEditarAnimal from '../src/pages/PainelDeControle/PainelDono/PainelEditarPerfil/PainelAnimal';
import PainelDonoEditarEndereco from '../src/pages/PainelDeControle/PainelDono/PainelEditarPerfil/PainelEndereco';
import PainelCuidador from '../src/pages/PainelDeControle/PainelCuidador/PainelOfertas';
import PainelCuidadorCadastro from '../src/pages/PainelDeControle/PainelCuidador/PainelEditarPerfilCuidador/PainelCadastro';
import PainelCuidadorEndereco from '../src/pages/PainelDeControle/PainelCuidador/PainelEditarPerfilCuidador/PainelEndereco';
import PainelCuidadorHistorico from '../src/pages/PainelDeControle/PainelCuidador/PainelHistorico';
import PainelOfertasResult from '../src/pages/PainelDeControle/PainelCuidador/PainelOfertas/PainelOfertaResult';

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login"  component={Login}/>
                <Route path="/registro"  component={Cadastro}/>
                <Route path="/pet"  component={CadastroPet}/>
                <Route path="/donos" component={PainelDono}/>
                <Route path="/contratos" component={PainelDonoHistorico}/>
                <Route path="/perfil/donos" component={PainelDonoEditarCadastro}/>
                <Route path="/perfil/animal" component={PainelDonoEditarAnimal}/>
                <Route path="/perfil/endereco" component={PainelDonoEditarEndereco}/>
                <Route path="/cuidador" component={PainelCuidador}/>
                <Route path="/perfil/cuidador" component={PainelCuidadorCadastro}/>
                <Route path="/perfil/historico" component={PainelCuidadorHistorico}/>
                <Route exact path="/perfil/end/cuidador" component={PainelCuidadorEndereco}/>
                <Route exact path="/result" component={PainelOfertasResult}/>
            </Switch>
        </BrowserRouter>
    );
}