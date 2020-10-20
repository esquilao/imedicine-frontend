import React, { useState } from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import api from './../../api/axioszada';

export default function AlterPassword () {
    
    const [email, setEmail] = useState();
    const [new_password, setNewPassword] = useState();
    const history = useHistory();
    const {token} = useParams();

    async function alterar(e) {

        e.preventDefault();
        const data = {
            email,
            new_password
        }

        try {
            
            await api.post(`/AlterPassword/${token}`, data)
            alert('Senha alterada, já pode logar')
                
        } catch (error) {
            const erro = error.response.data.error;
            alert(erro)
           
        }
        
        history.push('/');
    }

    return (
        <div className="Page-container">
            <h1>Alterar senha</h1>
                <form className="Info-container" onSubmit={alterar}>

            
                <input value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></input>
                <input value={new_password} 
                onChange={ (e) => setNewPassword(e.target.value)} 
                type="password"
                placeholder="  Nova senha"></input>

                <button type="submit">Alterar</button>
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