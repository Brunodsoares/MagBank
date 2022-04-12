import React from 'react'; //importação do react
//(Header)começa com letra maiuscula pois é um componente segundo uma "convenção"
//linha 4 função de importação de html
//exemplo de como passar componente atraves do prop (pouco usado)
const Header = ({ text, color }) => <h1 style={{ color: color }}>{text}</h1>;
//função para exporta
export default Header;

