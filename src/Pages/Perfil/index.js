import React from 'react';
import './estilo.css';
import { IoMdLogOut} from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default function Perfil () {
    
    return(
         <div> 
        <div className="logout-container">
        <Link id="sair" to="/">
              <IoMdLogOut size={50} color="red" ></IoMdLogOut>
          </Link>
          <p id="função" >Seus produtos :</p>
          <text>Bom dia, fármacia x </text>
          </div>
          <div className="addProduct-container">
              <button >Adicionar produtos</button>
          </div>
          <div className="product-template">
              
                  <p>Rivotril 50 gotas</p>
                  <p>0,00 R$</p>
                  <img id="imagem" src="https://www.cartacapital.com.br/wp-content/uploads/2015/11/caixa-de-rivotril.jpg" alt="imagem"></img>
                  <FaTrashAlt size={30}></FaTrashAlt>
                 
              
          </div>

          </div> 
    );
}