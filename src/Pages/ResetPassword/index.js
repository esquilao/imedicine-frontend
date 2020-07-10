import React, { useState } from 'react';
import './estilo.css';
import {Link, useHistory} from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import api from './../../api/axioszada';

export default function ResetPassword () {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const history = useHistory();

    async function Solicitar(e) {
        const data = {
            email,
            name,
            address
        }

        try {
            await api.post('/Solicit', data)
            alert('Troca solicitada, verifique o seu e-mail')
           
        } catch (error) {
            const erro = error.response.data.error
            alert(erro)
           
        }
        history.push('/');
    }

    return (
        <div className="Page-container">
            <h1>Solicitar troca de senha</h1>
                <form className="Info-container" onSubmit={Solicitar}>

            
                <input value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></input>
                <input value={name} 
                onChange={ (e) => setName(e.target.value)} 
                placeholder="  Nome da sua fármacia"></input>
                <input value={address} 
                onChange={ (e) => setAddress(e.target.value)} 
                placeholder="  Endereço"></input>

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