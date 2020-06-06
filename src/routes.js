import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '././Pages/Login';
import Registrar from '././Pages/Registrar';
import AddProduct from './Pages/AddProduct';
import FixProduct from './Pages/FixProduct';
import Perfil from './Pages/Perfil';
import PrivateRoute from './components';



export default function Routes(){

    return(
        <BrowserRouter>
        <Switch>
            
        <Route path="/" exact component={Login}/>
        <Route path="/Registrar" component={Registrar}/>
        <PrivateRoute path="/AddProduct" component={AddProduct}/>
        <PrivateRoute path="/FixProduct" component={FixProduct}/>
        <PrivateRoute path="/Perfil" component={Perfil}/>

        </Switch>
        </BrowserRouter>
    );

}