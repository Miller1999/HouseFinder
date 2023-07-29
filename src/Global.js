import { createGlobalStyle } from "styled-components";


//Colores
export const colorPrincipal = "black"
export const colorResaltado = "#eb5757"
//General
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: "Raleway";
}
body{
    font-family: "Raleway";
    font-size:14px;
    padding:50px;
    color:black;
}
button{
    cursor:pointer;
}
`

export default GlobalStyle