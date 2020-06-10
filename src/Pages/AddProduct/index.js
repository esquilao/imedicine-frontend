import React from 'react';
import './estilo.css';
import { IoMdLogOut } from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/axioszada';

export default function AddProduct() {
     
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const history = useHistory();
    const [image, setImage] = useState();
    const drugstoreId = localStorage.getItem('drugstoreId');

    function handleLogout() {
        localStorage.clear();
        history.push('/');
      }
      
    async function addProduct(e) {

        e.preventDefault();
        const data = new FormData();

            data.append("name", name)
            data.append("price", price)
            data.append("image", image)

        try {
           await api.post('/medicines', data, { headers: {
                authorization: drugstoreId,
            }})
       
        } catch (error) {
            alert('não foi possivel adicionar o produto');
        }
        history.push('/Perfil');
    }

    return (

      <div className="page-container">
          <div id="aa">
         <Link id="euu" to="/">
                <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
            </Link>
            </div>
            <div className="product-container">
            
            <p id="function">Adicionar produtos:</p>
           
                <input value={name} 
                placeholder="  Nome" 
                id="name"
                onChange={ (e) => setName(e.target.value)}>
                </input>
                <input value={price} 
                placeholder="  Preço" 
                id="price"
                onChange={ (e) => setPrice(e.target.value)} >
                </input>
            </div>

            <button id="add" onClick={addProduct}>Adicionar</button>
            
            <input 
            id="upload" 
            type="file" 
            accept="image/*" 
            onChange={(event) => {
            setImage(event.target.files[0])
            }}
            />
            <label htmlFor="upload" >Selecione a foto</label>
                    
            
      </div>




    );
}