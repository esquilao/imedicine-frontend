import React from 'react';
import {NewInput, Information, LinkBala, Inpute, Botao, Main, Label, Texto} from '../../styles';
import { IoMdLogOut } from 'react-icons/io'
import {useHistory, useParams} from 'react-router-dom';
import api from '../../api/axioszada';
import { useState } from 'react';


export default function FixProduct () {

    const drugstoreId = localStorage.getItem('drugstoreId');
    const history = useHistory();
    const [name, setNewName] = useState([])
    const [price, setNewPrice] = useState([])
    const [quantity, setNewQuantity] = useState([])
    const [image, setImage] = useState([]);
    const {id} = useParams();

    function handleLogout() {
        localStorage.clear();
        history.push('/');
      }

    async function alteraProduto (e) {

        const data = new FormData();

            data.append("name", name)
            data.append("price", price)
            data.append("quantity", quantity)
            data.append("image", image)

        try {
          await api.put(`/medicines/${id}`, data , {
                headers: {
                    authorization : drugstoreId
                } 
            })
        } catch (error) {
            console.log('não deu pra alterar o produto')
        }
        history.push('/Perfil');
    }
    
    return(
        
          <Main >
          
            <Information gap="30px" margemEsquerda="-50px" margemCima="20px">
        
                <Texto tamanho="30px">Alterar produtos:</Texto>
           
                <NewInput value={name} 
                placeholder="  Nome" 
                onChange={ (e) => setNewName(e.target.value)}>
                </NewInput>
                <NewInput value={price} 
                placeholder="  Preço" 
                onChange={ (e) => setNewPrice(e.target.value)} >
                </NewInput>
                <NewInput value={quantity} 
                placeholder="  Qnt. em estoque" 
                onChange={ (e) => setNewQuantity(e.target.value)}>
                </NewInput>
                <Botao largura="380px" background="#E02041" onClick={alteraProduto}>Adicionar</Botao>
            </Information>
          <Information  margemEsquerda="150px" margemCima="400px">
         
         <Inpute altura="60px" display="none" 
         type="file" 
         accept="image/*" 
         onChange={(event) => {
         setImage(event.target.files[0])
         }}
         />
         <Label htmlFor="upload" >     Nova foto</Label>
         
         </Information>
         <LinkBala margemEsquerda="=700px" margemCima="20px" margemBaixo="650px" to="/">
             <IoMdLogOut size={50} color="red" onClick={handleLogout}></IoMdLogOut>
             </LinkBala>
          
    </Main>
    );
}

