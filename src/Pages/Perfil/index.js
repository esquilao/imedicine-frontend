import React, { useState, useEffect } from 'react';
import { Main, LinkBala, Cabeça, Remedio, Texto , Botao, Imagem, Remédios} from './../../styles.js';
import api from '../../api/axioszada';
import { IoMdLogOut } from 'react-icons/io'
import { AiFillDelete, AiOutlineSetting } from "react-icons/ai";
import { useHistory, } from 'react-router-dom';

export default function Perfil() {

  const [medicines, setMedicine] = useState([]);
  const [image, setImage] = useState([])
  const history = useHistory();
  const drugstoreName = localStorage.getItem('drugstoreName');
  const drugstoreId = localStorage.getItem('drugstoreId');

  useEffect(() => {
    api.get('image', {
      headers: {
        authorization: drugstoreId
      }
    })
    .then(res => {
      setImage(res.data);
    })
  }, [drugstoreId]);

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
  
  function deleteProduct(id) {
    return async function (e) { 
     await api.delete(`/medicines/${id}`)
     setMedicine(medicines.filter(medicines => medicines.product_id !== id));
   }
  }

  return (

    <Main display="inline">
      <Cabeça>
        <Texto >Seus produtos :</Texto>
        <Texto margemEsquerda="300px" tamanho="20px">Bom dia, {drugstoreName} </Texto>
        <Imagem margemEsquerda="30px" altura="80px" largura="80px" src={image.map(image => image.image)} alt='aaaa'></Imagem>
        <LinkBala margemCima="-80px" margemEsquerda="430px" to="/">
          <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
        </LinkBala>
        
      </Cabeça>
    
      <Remédios>
        
          {medicines.map((medicine) => (
            
              <Remedio key={medicine.product_id} className="lista">

                <Imagem altura="200px" largura="150px" src={medicine.image} alt="aaaaa"/>
                <p>{medicine.name}</p>
                <p>{medicine.quantity} em estoque</p>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency : 'BRL'}).format(medicine.price)}</p>
                
                <AiFillDelete onClick={deleteProduct(medicine.product_id)} size={27} />
                
                <LinkBala to={`/FixProduct/${medicine.product_id}`}>
                  <AiOutlineSetting size={27} color="indigo"/>
                </LinkBala>
                <Botao largura="250px" margemEsquerda="950px" onClick={goToAddProduct} >Adicionar produtos</Botao>
              </Remedio>
           
          ))}
          
      </Remédios>
      

    </Main>
  );
}