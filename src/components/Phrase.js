import React from 'react';
import styled from '@emotion/styled';


const ContainerPhrase = styled.div`
padding:3rem;
border-radius:.5rem;
background-color:#fff;
max-width:800px;
margin-top:10rem;
margin-bottom:3rem;

@media (min-width : 992px){
    margin-top:10rem;
}

h1{
font-family:Arial, Helvetica, sans-serif;
text-align:center;
position:relative;
padding-left:4rem;

&::before{
    content:open-quote;
    font-size:10rem;
    color: #000;
    position:absolute;
    left:-1rem;
    top: -2rem;
}
}
p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:1.6rem;
    font-weight:bold;
    text-align:right;
    color: #666;
    margin-top:2rem;
}
`;

const Phrase = ({phrase}) => {
    return (  
    <ContainerPhrase>
    <h1>{phrase.quote}</h1>
    <p>- {phrase.author}</p>
    </ContainerPhrase>
    );
}
 
export default Phrase;