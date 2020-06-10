import React, { useState } from 'react';
import './estilo.css';
import { IoMdArrowRoundForward } from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';
import api from '../../api/axioszada';


export default function Registrar () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [address, setAddress] = useState();

    const history = useHistory();

    async function handleRegister(e) {

        e.preventDefault();
        const formdata = new FormData();

            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("name", name);
            formdata.append("image", image);
            formdata.append("whatsapp", whatsapp);
            formdata.append("city", city);
            formdata.append("state", state);
            formdata.append("address", address);

            try {
            await api.post('drugstores', formdata)
            alert('Fármacia criada');
            
        } catch (error) {
            alert('não foi possivel cadastrar seu estabelecimento')
        }
        
        history.push('/');
   }

    return(
        
         <div className="Page-container">
         
         <div className="Register-container">
           
        
         <form onSubmit={handleRegister}>
            <div className="conteudo">
            <p>Cadastre seu estabelecimento :</p>

                <input value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></input>
                <input value={password} 
                onChange={ (e) => setPassword(e.target.value)} 
                type="password"
                placeholder="  Senha secreta"></input>
                <input value={name} 
                onChange={ (e) => setName(e.target.value)} 
                placeholder="  Nome da farmacia"></input>
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
                    
                    <input id="upload" type="file" accept="image/*" className="hidden"
                        onChange={(event) => {
                           setImage(event.target.files[0])
                        }}
                    />
                    <label htmlFor="upload" >Selecione a foto</label>
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

