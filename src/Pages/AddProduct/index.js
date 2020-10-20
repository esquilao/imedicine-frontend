import React from 'react';
import {NewInput, Inpute, LinkBala, Botao, Main, Label, Texto, Information} from './../../styles';
import { IoMdLogOut } from 'react-icons/io'
import { useHistory} from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/axioszada';

export default function AddProduct() {
     
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [quantity, setQuantity] = useState([]);
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
            data.append("quantity", quantity)
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

      <Main >
          
            <Information gap="30px" margemEsquerda="-50px" margemCima="20px">
        
                <Texto tamanho="30px">Adicionar produtos:</Texto>
           
                <NewInput value={name} 
                placeholder="  Nome" 
                onChange={ (e) => setName(e.target.value)}>
                </NewInput>
                <NewInput value={price} 
                placeholder="  Preço" 
                onChange={ (e) => setPrice(e.target.value)} >
                </NewInput>
                <NewInput value={quantity} 
                placeholder="  Qnt. em estoque" 
                onChange={ (e) => setQuantity(e.target.value)}>
                </NewInput>
                <Botao largura="380px" background="#E02041" onClick={addProduct}>Adicionar</Botao>
            </Information>
            <Information  margemEsquerda="150px" margemCima="400px">
         
            <Inpute altura="60px" display="none" 
            type="file" 
            accept="image/*" 
            onChange={(event) => {
            setImage(event.target.files[0])
            }}
            />
            <Label htmlFor="upload" >Selecione a foto</Label>
            
            </Information>
            <LinkBala margemEsquerda="=700px" margemCima="20px" margemBaixo="650px" to="/">
                <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
                </LinkBala>
      </Main>
    



    );
}