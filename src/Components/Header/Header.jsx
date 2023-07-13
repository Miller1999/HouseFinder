import styled from "styled-components"
import Logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Fragment, useState } from "react";
import { colorResaltado } from "../../Global";

const cities = ["Helsinki","Turku","Vaasa","Oulu"]

const StyledHeader = styled.header`
    margin:0px 0px 30px 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
const StyledLogo = styled.img`
    width:150px;
`
const StyledDiv = styled.div`
    padding:10px;
    display:inline-flex;
    align-items:center;
    border-radius: 20px;
    width:350px;
    height:50px;
    box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.75);
`
const StyledSpan = styled.span`
    font-size: 12px;
`
const StyledInput = styled.input`
    width:60%;
    border:none;
    outline:none;
`
const PDiv = styled.div`
    padding:10px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: transparent;
    border:none;
    padding:0;
    cursor:pointer;
`
const CenterDiv = styled(PDiv)`
    border-right: 1px lightgray solid;
    border-left: 1px lightgray solid;
    padding: 10px 0px;
`
const StyledNav = styled.nav`
    width:100%;
    height:35vh;
    background-color:white;
    backdrop-filter: drop-shadow(16px 16px 10px black);

    &:first-child, div{
        width:100%;
    }
`
const Lista = styled(StyledDiv)`
    width: 100%;
    flex-direction: column;
    align-items:start;
    box-shadow: none;
    margin:10px 0px;
    gap:20px;
`
const ElementoLista = styled(PDiv)`
    align-items:center;
    justify-content: start;
    gap:10px;
`
const Header = () =>{
    const [mostrarOcultar,setMostrar] = useState(false)
    const [location,setlocation] = useState("Helsinki")
    const mostrar = () => {
        setMostrar(!mostrarOcultar)
    }
    const enviarID = (e) => {
        setlocation(e.target.id) 
    }
    return(
        <StyledHeader>
        {
            mostrarOcultar ?  <StyledNav>
            <StyledDiv>
            <PDiv>
                <StyledButton onClick = {mostrar}>{location}, Finland</StyledButton>
            </PDiv>
            <CenterDiv>
                <StyledInput type="text" placeholder="Add Guests"/>
            </CenterDiv>
            <PDiv>
                <StyledButton><SearchIcon/></StyledButton>
            </PDiv>
        </StyledDiv>
        <Lista>
        {
            cities.map((city,index) => {
                return <ElementoLista key={index} ><LocationOnIcon sx={{color:colorResaltado}}/><StyledButton id={city} onClick={enviarID}>{city}, Finland</StyledButton></ElementoLista>
            })
        }
        </Lista>
        </StyledNav> 
        :<Fragment>
        <StyledLogo src={Logo} alt="logo"/>
        <StyledDiv>
            <PDiv>
                <StyledButton onClick = {mostrar}>{location}, Finland</StyledButton>
            </PDiv>
            <CenterDiv>
                <StyledInput type="text" placeholder="Add Guests"/>
            </CenterDiv>
            <PDiv>
                <StyledButton><SearchIcon/></StyledButton>
            </PDiv>
        </StyledDiv>
        </Fragment>       

        }
       

        </StyledHeader>
    )
}

export default Header