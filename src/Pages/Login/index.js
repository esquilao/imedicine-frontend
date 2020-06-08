import React, { useState } from 'react';
import './estilo.css';
import { IoIosArrowRoundForward } from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';
import api from './../../api/axioszada';

export default function Login() {
  
    const [ id, setId ] = useState();
    const history = useHistory();

  async function handleLogin(e) {

      e.preventDefault();
      try {

        const response = await api.post('auth', { id } )
        localStorage.setItem('drugstoreId', id);
        localStorage.setItem('drugstoreName', response.data.name);

        history.push('/Perfil');

      } catch (err) {

        alert('nao foi');
      }
     
  }

  return (
    
    <div className='login-container'>
     
        <form onSubmit={handleLogin}>

          <p className="proposta">
            Destruindo fronteiras entre fármacias e clientes desde 1920
          </p>

          <p id="zz">Login </p>

          <div className="form-container">
            <input placeholder="E-mail"/>
            <input value={id}
            placeholder="Senha"
            onChange={e => setId(e.target.value)} />
           <button className="botao" type="submit">Entrar</button>
          </div>


          <div className="cadastro-container">         
               <Link to="/Registrar">
               <IoIosArrowRoundForward size={45} color="purple"></IoIosArrowRoundForward>
              
               </Link>
               <a href="/Registrar">Não sou cadastrado</a>
          </div>
        </form>
      
    </div>
   

  );
}







