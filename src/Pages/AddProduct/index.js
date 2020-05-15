import React from 'react';
import './estilo.css';
import { IoMdLogOut } from 'react-icons/io'
import {Link} from 'react-router-dom';

export default function AddProduct() {
     
    function addProduto() {
        alert('adiciona produto');
    }

    return (

      <div className="page-container">
          <div id="aa">
         <Link id="euu" to="/">
                <IoMdLogOut size={50} color="red" ></IoMdLogOut>
            </Link>
            </div>
            <div className="product-container">
            
            <p id="function">Adicionar produtos:</p>
           
                <input placeholder="  Nome" id="name"></input>
                <input placeholder="  Preço" id="price"></input>
            </div>

            <button id="add" onClick={addProduto}>Adicionar</button>
            
            <input id="foto" type="file"></input>
            
      </div>




    );
}