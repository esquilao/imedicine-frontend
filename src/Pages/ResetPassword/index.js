import React, { useState } from 'react';
import './estilo.css';
import {Link, useHistory} from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import api from './../../api/axioszada';

export default function RequestPasswordReset () {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const history = useHistory();

    async function solicitar(e) {

        e.preventDefault();
        const data = {
            email,
            name
        }

        try {
            await api.post('/Solicit', data)
            alert('Troca solicitada, verifique o seu e-mail')
                
        } catch (error) {
            const erro = error.response.data.error;
            alert(erro)
           
        }
        
        history.push('/');
    }

    return (
        <div className="Page-container">
            <h1>Solicitar troca de senha</h1>
                <form className="Info-container" onSubmit={solicitar}>

            
                <input value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></input>
                <input value={name} 
                onChange={ (e) => setName(e.target.value)} 
                placeholder="  Nome da sua fármacia"></input>

                <button type="submit">Solicitar</button>
                <div className="voltar">
                <Link to='/'>
              
                <IoMdArrowRoundForward size={20} color="purple"></IoMdArrowRoundForward>
                <a href="/Registrar">Voltar para home</a>
                </Link>
                </div>
                </form>
        </div>
    )
}

