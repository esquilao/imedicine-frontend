import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Pages/Login';


 export default function PrivateRoute({ component, ...options }){
    const DrugstoreId  = localStorage.getItem('drugstoreId');
    const finalComponent = DrugstoreId ? component : Login;
  
    return <Route {...options} component={finalComponent} />;
    
  };
