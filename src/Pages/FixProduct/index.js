import React from 'react';
import './estilo.css';
import { IoMdLogOut } from 'react-icons/io'
import {Link} from 'react-router-dom';


export default function FixProduct () {
    function alteraProduto () {
        alert('altera produto');
    }
    return(
        <div className="page-container">
        <div id="aa">
       <Link id="euu" to="/">
              <IoMdLogOut size={50} color="red" ></IoMdLogOut>
          </Link>
          </div>
          <div className="product-container">
          
          <p id="function">Alterar produtos :</p>
         
              <input placeholder=" Novo nome" id="name"></input>
              <input placeholder=" Novo preço" id="price"></input>
          </div>

          <button id="add" onClick={alteraProduto}>Alterar</button>
          
          <input id="foto" type="file"></input>
          
    </div>
    );
}