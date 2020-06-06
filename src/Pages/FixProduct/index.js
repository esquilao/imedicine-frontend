import React from 'react';
import './estilo.css';
import { IoMdLogOut } from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';
import api from '../../api/axioszada';
import { useState } from 'react';


export default function FixProduct () {

    const drugstoreId = localStorage.getItem('drugstoreId');
    const product_id  = localStorage.getItem('productId');
    const history = useHistory();
    const [name, setNewName] = useState([])
    const [price, setNewPrice] = useState([])

    function handleLogout() {
        localStorage.clear();
        history.push('/');
      }

    async function alteraProduto (e) {

        const data = {
            name,
            price,
            product_id
        }

        try {
          await api.put('/medicines', data , {
                headers: {
                    authorization : drugstoreId
                } 
            })
        } catch (error) {
            console.log('não deu pra alterar o produto')
        }
        history.push('/Perfil');
        localStorage.removeItem('productId');
       

    }
    return(
        <div className="page-container">
        <div id="aa">
       <Link id="euu" to="/">
              <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
          </Link>
          </div>
          <div className="product-container">
          
          <p id="function">Alterar produtos :</p>
         
              <input value={name}
              placeholder=" Novo nome" 
              id="name"
              onChange={(e) => setNewName(e.target.value)}></input>
              <input value={price} 
              placeholder=" Novo preço" 
              id="price"
              onChange={(e) => setNewPrice(e.target.value)}></input>
          </div>

          <button id="add" onClick={alteraProduto}>Alterar</button>
          
          <input id="foto" type="file"></input>
          
    </div>
    );
}