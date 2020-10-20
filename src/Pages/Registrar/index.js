import React, { useState } from 'react';
import { LinkBala, Texto, Main, NewInput, Information, Botao, Inpute, Label, Registro} 
from './../../styles.js';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useHistory} from 'react-router-dom';
import api from '../../api/axioszada';


export default function Registrar () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [address, setAddress] = useState();

    const history = useHistory();

    async function handleRegister(e) {

        e.preventDefault();
        const formdata = new FormData();

            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("name", name);
            formdata.append("image", image);
            formdata.append("whatsapp", whatsapp);
            formdata.append("city", city);
            formdata.append("state", state);
            formdata.append("address", address);

            try {
            await api.post('drugstores', formdata)
            alert('Fármacia criada');
            
            } catch(erro) {
            const errolegível = erro.response.data.erro
            alert(errolegível);
            }
        
        history.push('/');
        
   }

    return(
        
         <Main >
         
         <Registro onSubmit={handleRegister}>
            
            <Texto tamanho="30px" margemCima="20px">Cadastre seu estabelecimento :</Texto>

                <NewInput value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="  E-mail"></NewInput>
                <NewInput value={password} 
                onChange={ (e) => setPassword(e.target.value)} 
                type="password"
                placeholder="  Senha secreta"></NewInput>
                <NewInput value={name} 
                onChange={ (e) => setName(e.target.value)} 
                placeholder="  Nome da farmacia"></NewInput>
                <NewInput value={whatsapp} 
                onChange={ (e) => setWhatsapp(e.target.value)} 
                placeholder="  Whatsapp"></NewInput>

                    <div>
                    <Inpute altura="50px" largura="270px" espaçamento="7px"
                    value={city} onChange={ (e) => setCity(e.target.value)} placeholder="  Cidade"></Inpute>
                    <NewInput altura="50px" largura="70px" espaçamento="7px" margemEsquerda="10px"
                    value={state} onChange={ (e) => setState(e.target.value)} placeholder="    Estado"></NewInput>
                        
                    </div>
                    <NewInput value={address} 
                    onChange={ (e) => setAddress(e.target.value)} placeholder="  Endereço"></NewInput>
                    
                    <Botao largura="400px" altura="50px" espaçamento="10px" 
                    background="#E02041" type="submit">Cadastrar</Botao>

                    <LinkBala to="/" margemEsquerda="0px">
                    <IoMdArrowRoundForward size={30} color="purple"></IoMdArrowRoundForward> 
                    <a href="/">Tenho cadastro</a>
                    </LinkBala>

                </Registro>
                    <Information margemCima="410px">
                    <Inpute display="none" type="file" 
                        accept="image/*" className="hidden"
                        onChange={(event) => {
                           setImage(event.target.files[0])
                        }}
                    />
                    <Label htmlFor="upload" >Selecione a foto</Label>
                    </Information>
            </Main>
    );
}

