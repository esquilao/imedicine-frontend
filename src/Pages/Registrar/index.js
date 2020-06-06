import React, { useState } from 'react';
import './estilo.css';
import { IoMdArrowRoundForward } from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';
import api from '../../api/axioszada';


export default function Registrar () {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [address, setAddress] = useState();

    const history = useHistory();

    const data = {
            name,
            email,
            whatsapp,
            city,
            state,
            address,
    }

    async function handleRegister(e) {

        e.preventDefault();
        console.log(data)
        try {
            const response = await api.post('drugstores', data)
            alert(`Seu id é ${response.data.drugstore_id}`);
            
        } catch (error) {
            alert('não foi possivel : cadastrar seu estabelecimento')
        }
        
        history.push('/');
   }

    return(
        
         <div className="Page-container">
         
         <div className="Register-container">
           
        
         <form onSubmit={handleRegister}>
            <div className="conteudo">
            <p>Cadastre seu estabelecimento :</p>

                <input value={name} 
                onChange={ (e) => setName(e.target.value)} 
                placeholder="  Nome da farmacia"></input>
                <input value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></input>
                <input value={whatsapp} 
                onChange={ (e) => setWhatsapp(e.target.value)} 
                placeholder="  Whatsapp"></input>

                    <div id="endereço">
                        <input value={city} 
                        onChange={ (e) => setCity(e.target.value)} className="city"  placeholder="  Cidade"></input>
                        <input value={state} 
                        onChange={ (e) => setState(e.target.value)} className="state" placeholder="Estado"></input>
                        <input value={address} 
                        onChange={ (e) => setAddress(e.target.value)} className="address" placeholder="  Endereço"></input>
                    </div>
                    
                  
                    <button type="submit">Cadastrar</button>
          

                
            
                
            </div>
            </form>
                    <div id="function">
                    
                    <input type="file" placeholder="adicionar foto"></input>
                
                    </div>
               
                    <div className="cadastro-container">
                
               <Link to='/'>
              
               <IoMdArrowRoundForward size={30} color="purple"></IoMdArrowRoundForward> Tenho cadastro
               
               </Link>
              
            
                     </div>
                
            </div>
            
            </div>
    );
}

