import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home/index';
import Login from '../src/pages/Login/index';
import Cadastro from '../src/pages/Cadastro/CadastroInfoPrimeiro';
import CadastroSegundo from '../src/pages/Cadastro/cadastroInfoSegundo';
import CadastroEndereco from '../src/pages/Cadastro/CadastroEndPrimeiro';
import CadastroEnderecoSegundo from '../src/pages/Cadastro/CadastroEndSegundo';
import CadastroPerfil from '../src/pages/Cadastro/CadastroPerfil';
import CadastroPets from '../src/pages/Cadastro/CadastroPetPrimeiro';
import CadastroPetsSegundo from '../src/pages/Cadastro/CadastroPetSegundo';
import CadastroCuidador from '../src/pages/Cadastro/CadastroCuidador';
import CadastroTermos from '../src/pages/Cadastro/CadastroTermos';

import PainelCuidador from '../src/pages/PainelDeControle/PainelDono/PainelResultado';
import PainelContrato from '../src/pages/PainelDeControle/PainelDono/PainelContrato';
import PainelEditarPerfil from '../src/pages/PainelDeControle/PainelDono/PainelEditarPerfil';

import PainelOferta from '../src/pages/PainelDeControle/PainelCuidador/PainelOfertas';
import PainelHistorico from '../src/pages/PainelDeControle/PainelCuidador/PainelHistorico';
import PainelEditarPerfilCui from '../src/pages/PainelDeControle/PainelCuidador/PainelEditarPerfilCuidador';

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cadastro"  component={Cadastro}/>
                <Route path="/pessoal"  component={CadastroSegundo}/>
                <Route path="/endereco"  component={CadastroEndereco}/>
                <Route path="/enderecocomple"  component={CadastroEnderecoSegundo}/>
                <Route path="/perfil"  component={CadastroPerfil}/>
                <Route path="/animal"  component={CadastroPets}/>
                <Route path="/petsdois"  component={CadastroPetsSegundo}/>
                <Route path="/cuidador"  component={CadastroCuidador}/>
                <Route path="/termos"  component={CadastroTermos}/>
                <Route path="/login"  component={Login}/>

                <Route path="/propostas" component={PainelCuidador}/>
                <Route path="/contratos" component={PainelContrato}/>
                <Route path="/perfilDono" component={PainelEditarPerfil}/>
                
                <Route path="/ofertas" component={PainelOferta}/> 
                <Route path="/historico" component={PainelHistorico}/> 
                <Route path="/perfilCui" component={PainelEditarPerfilCui}/> 
            </Switch>
        </BrowserRouter>
    );
}