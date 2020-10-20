import React, { useState } from 'react';
import {Texto, Main, LinkBala, Inpute, Botao, Imagem, Information} from './../../styles.js';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useHistory} from 'react-router-dom';
import api from './../../api/axioszada';

export default function Login() {
  
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const history = useHistory();


    async function handleLogin(e) {
      
      e.preventDefault();
      try {
        
        const data = { email, password }
        const response = await api.post('auth', data )
        
        localStorage.setItem('drugstoreName', response.data.name);
        localStorage.setItem('drugstoreId', response.data.drugstore_id);
        
        history.push('/Perfil');

      } catch (err) {

        alert('e-mail ou senha incorretos');
      }
     
  }

  return (
    
    
    <Main>
     
        <form onSubmit={handleLogin}>
        
          <Imagem altura="400px" largura="700px" margemCima="-100px" 
          margemBaixo="-100px" src="https:\/\/i.imgur.com\/OSL63Zg.png" alt="logo">
          </Imagem>
          <Texto>Destruindo fronteiras entre fármacias e clientes desde 1920  </Texto>
          <Texto margemCima="10" margemEsquerda="170px" tamanho="22px">Login </Texto>

          <Information margemEsquerda="170px">

            <Inpute
            placeholder="E-mail"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            />
            <Inpute
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
           <Botao type="submit">Entrar</Botao>

          </Information>

               <LinkBala to="/Registrar" margemEsquerda="175px">

               <IoIosArrowRoundForward size={32} color="purple" ></IoIosArrowRoundForward>
               <a href="/Registrar">Não sou cadastrado</a>
               </LinkBala>
               <LinkBala margemEsquerda="175px">
               <AiOutlineQuestionCircle size={30}  color="purple"></AiOutlineQuestionCircle>
               <a href="/Password"> Esqueci a senha</a>

               </LinkBala>

        </form>
      
    </Main>

  );
}







