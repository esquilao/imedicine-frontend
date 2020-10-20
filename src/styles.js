import styled from 'styled-components';
import {Link} from 'react-router-dom';

 const Main = styled.div`
    display : ${props => props.display || 'flex'};
    font-family: 'Sura';
    font-style: normal;
    font-weight: normal;
    align-items: center;
    justify-content: space-around;
`;

const Cabeça = styled.header`
    display: flex;
    flex-direction: line;
    margin-top:${props => props.espaçamento || '60px'};
    margin-bottom: ${props => props.margemBaixo || '0'};
    margin-left:${props => props.margemEsquerda || '100px'};
`;

const LinkBala = styled(Link)`
    margin-top:${props => props.margemCima || 0};
    margin-bottom: ${props => props.margemBaixo || '0px'};
    margin-left:${props => props.margemEsquerda || 0};
    margin-left:${props => props.margemDireita || 0};
    display : ${props => props.display || 'flex'};
    align-items: center;
    font-size: 20px;
`;

const Registro = styled.form`
    align-items: left;
    display: flex;
    justify-content: space-between;
    margin-top:${props => props.espaçamento || '50px'};
    margin-bottom: ${props => props.margemBaixo || '0'};
    margin-left:${props => props.margemEsquerda || '-110px'};
    flex-direction: column;
    `;

const Remédios = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    background-color: lightsteelblue;
    height: 600px;
    gap: 30px;
    padding: 20px;
    width: 900px;
    margin-top:${props => props.espaçamento || '0px'};
    margin-bottom: ${props => props.margemBaixo || '0'};
    margin-left:${props => props.margemEsquerda || '100px'};
    border-radius: 10px;
    border: 1px solid grey;
    align-content: start;
    `; 

const Remedio = styled.div`
    font-size: 20px;
    height: 290px;  
    max-width: 250px; 
    background-color: lightgray;
    border-radius: 10px;
`;

const Information = styled.div`
    display : ${props => props.display || 'flex'};
    flex-direction: column;
    align-items: ${props => props.alinhar || ''};
    width:${props => props.largura || '250px'};
    margin-left:${props => props.margemEsquerda || 0};
    margin-top: ${props => props.margemCima || 0};
    justify-content: space-between;
    gap: ${props => props.gap || 0};
    padding: 20px;
`;

const Texto = styled.p`
    font-size:  ${props => props.tamanho || '26px'};
    margin-top: ${props => props.margemCima || 0};
    margin-left: ${props => props.margemEsquerda || 0};
`;

 const Imagem = styled.img`
    height:${props => props.altura || 0};
    width:${props => props.largura || 0};
    margin-top:${props => props.margemCima|| 0};
    margin-bottom:${props => props.margemBaixo || 0};
    margin-left: ${props => props.margemEsquerda || 0};
`;

const Inpute = styled.input`
    border: 1px solid grey;
    border-radius: 10px;   
    height:${props => props.altura || '55px'};
    width:${props => props.largura || '270px'};
    margin-left:${props => props.margemEsquerda || 0};
    margin-bottom: ${props => props.margemBaixo || '15px'};
    margin-top: ${props => props.margemCima || '0px'};
    display : ${props => props.display || 'inline'};
    background-color: #FFF;
    
`;

const NewInput = styled(Inpute)`
    height:${props => props.altura || '50px'};
    width:${props => props.largura || '360px'};
    margin-top:${props => props.espaçamento || 0};
    margin-bottom: ${props => props.margemBaixo || '7px'};
    margin-left:${props => props.margemEsquerda || 0};
    
`;

const Label = styled.label`
    color: white;
    font-size: 22px;
    background-color: indigo;   
    border-radius: 14px;
    padding: 10px 40px ;
`;

const Botao = styled.button`
    border: 1px solid grey;
    border-radius: 10px;
    width:${props => props.largura|| '270px'};
    height:${props => props.altura|| '60px'};
    background:${props => props.background || '#D08FB2' } ;
    font-size: 20px;
    margin-top:${props => props.espaçamento || 0};
    margin-bottom: ${props => props.margemBaixo || '0'};
    margin-left:${props => props.margemEsquerda || 0};
    border: 1px solid grey;
    &:hover{
        background: lightpink;
    }
`;



export { LinkBala, Registro, Remedio, Information, Label, Botao , 
        Inpute, Imagem, Texto, Main, NewInput, Remédios, Cabeça };


