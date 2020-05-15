import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '././Pages/Login';
import Registrar from '././Pages/Registrar';
import AddProduct from './Pages/AddProduct';
import FixProduct from './Pages/FixProduct';
import Perfil from './Pages/Perfil';



export default function Routes(){

    return(
        <BrowserRouter>
        <Switch>
            
        <Route path="/" exact component={Login}/>
        <Route path="/Registrar" component={Registrar}/>
        <Route path="/AddProduct" component={AddProduct}/>
        <Route path="/FixProduct" component={FixProduct}/>
        <Route path="/Perfil" component={Perfil}/>

        </Switch>
        </BrowserRouter>
    );

}