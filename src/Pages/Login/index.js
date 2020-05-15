import React, { useState } from 'react';
import './estilo.css';
import { IoIosArrowRoundForward } from 'react-icons/io'
import {Link} from 'react-router-dom';
import api from './../../api/axioszada';

export default function Login() {
  


  function handleLogin() {
       //api.get('session', )
    console.log('adasda');
  }

  return (
    
    <div className='login-container'>
     
        <form>

          <p className="proposta">
            Destruindo fronteiras entre fármacias e clientes desde 1920
          </p>
          <text id="zz">Login</text>

          <div className="form-container">
            <input />
            <button className="botao" onClick={handleLogin}>Entrar</button>
          </div>


          <div className="cadastro-container">         
               <Link>
               <IoIosArrowRoundForward size={45} color="purple"></IoIosArrowRoundForward>
              
               </Link>
               <a href="/Registrar">Não sou cadastrado</a>
          </div>
        </form>
      
    </div>
   

  );
}







