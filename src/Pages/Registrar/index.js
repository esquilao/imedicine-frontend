import React, { useState } from 'react';
import './estilo.css';
import { IoMdArrowRoundForward } from 'react-icons/io'
import {Link} from 'react-router-dom';


export default function Registrar () {

    const [user, setUser] = useState({

        drugstoreName: "",
        email: "",
        zap: "",
        city: "",
        state: "",
        address: ""
    });

   const handleInput = (e) => {
        
        // console.log(e.target.name)
        // setUser((usuario) => ({
        //     ...usuario,
        //     [e.target.name]: e.target.value
        // })
        // );
    }
    

     function handleRegister() {

    //     const api = axios.create({

    //         baseURL : 'http://localhost:3001',
    //     })

    //    api.get('/users')
    //    .then(console.log)
       
    //    ;

    fetch('http://localhost:3001/drugstores', {
        method: 'POST',
        body: JSON.stringify({ 'asdasd': 'sdas'}),
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            
        }
    })
    
    .then(res => res.json())
    .then(res => alert(res.code))
       
          
    }

    return(

         <div className="Page-container">
        <div className="Register-container">
           
        

            <div className="conteudo">
            <p>Cadastre seu estabelecimento :</p>

                <input name="drugstoreName" onChange={handleInput} value={user.drugstoreName} placeholder="  Nome da farmacia"></input>
                <input onChange={handleInput} value={user.email} placeholder="  E-mail"></input>
                <input onChange={handleInput} value={user.zap} placeholder="  Whatsapp"></input>

                    <div id="endereço">
                        <input onChange={handleInput} value={user.city} className="city"  placeholder="  Cidade"></input>
                        <input onChange={handleInput} value={user.state} className="state" placeholder="Estado"></input>
                        <input onChange={handleInput} value={user.address} className="address" placeholder="  Endereço"></input>
                    </div>
                    
                  
                    <button onClick={handleRegister}>Cadastrar</button>
          

                
            
                
            </div>
            <div id="function">
                    
                    <input type="file" placeholder="adicionar foto"></input>
                
                </div>

                <div className="cadastro-container">
                
               <Link to='/'>
              
               <IoMdArrowRoundForward size={20} color="purple"></IoMdArrowRoundForward>
               
               </Link>
               <a href="/">Tenho cadastro</a>
            
          </div>
                
            </div>
            </div>
    );
}

