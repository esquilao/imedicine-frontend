import React, { useState, useEffect } from 'react';
import './estilo.css';
import api from '../../api/axioszada';
import { IoMdLogOut } from 'react-icons/io'
import { AiFillDelete, AiOutlineSetting } from "react-icons/ai";
import { Link, useHistory, } from 'react-router-dom';

export default function Perfil() {

  const [medicines, setMedicine] = useState([]);
  const history = useHistory();
  const drugstoreName = localStorage.getItem('drugstoreName');
  const drugstoreId = localStorage.getItem('drugstoreId');

  useEffect(() => {
    api.get('profile', {
      headers: {
        authorization: drugstoreId
      }
    })
    .then(res => {
      setMedicine(res.data);
    })
  }, [drugstoreId]);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  function goToAddProduct() {
    history.push('/AddProduct');
  }

  function saveId(id) {
    return function (e) {
      localStorage.setItem('productId', id);
    }
   
  }
   
  function deleteProduct(id) {
    return async function (e) { 
     await api.delete(`/medicines/${id}`)
     setMedicine(medicines.filter(medicines => medicines.product_id !== id));
   }
  }

  return (

    <div>
      <header className="logout-container">

        <Link id="sair" to="/">
          <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
        </Link>
        <p id="função" >Seus produtos :</p>
        <p>Bom dia, {drugstoreName} </p>

      </header>

      <div className="addProduct-container">
        <button onClick={goToAddProduct} >Adicionar produtos</button>
      </div>

      <div className="products-template">
        
          {medicines.map((medicine) => (
            
              <div key={medicine.product_id} className="lista">
                <img src={medicine.url} alt="aaaaa"/>
                <div className="container">
                <div className="caracteristicas">
                <p>{medicine.name}</p>
                <p>{medicine.price}</p>
              </div>
              <div className="buttons">
                
                <AiFillDelete onClick={deleteProduct(medicine.product_id)} size={27} />
                
                <Link to="/FixProduct">
                  <AiOutlineSetting size={27} onClick={saveId(medicine.product_id)}/>
                </Link>

              </div>
              </div>
            </div>
          
          ))}
        
      </div>

    </div>
  );
}