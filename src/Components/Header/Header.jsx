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
    width:300px;
    height:50px;
    box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.75);
`
const NavDiv = styled(StyledDiv)`
    width:100%;
    justify-content:space-evenly;
`
    

const StyledSpan = styled.span`
    font-size: 16px;
`
const GraySpan = styled(StyledSpan)`
    color:gray;
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
    gap:20px;
`
const StyledSearch = styled(StyledButton)`
    padding:10px 15px;
    background-color:${colorResaltado};
    font-size: 1em;
    color:white;
    border-radius: 20px;
`
const CenterDiv = styled(PDiv)`
    border-right: 1px lightgray solid;
    border-left: 1px lightgray solid;
    padding: 10px 0px;
    width:40%;
`
const StyledNav = styled.nav`
    width:100%;
    height:45vh;
    background-color:white;
    position:relative;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 1000px rgba(0,0,0,0.7);

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
const Guests = styled.div`
    position: absolute;
    left: 35%;
    top: 75px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width:50%;
`
const ContenedorBotonesSR = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

const BotonesSR = styled.button`
    background-color:transparent;
    border-radius: 100%;
    font-size:1em;
    border:none;
    outline:none;
    display:flex;
    justify-content:center;
    align-items: center;
    width:20px;
    height:20px;
    &:hover{
        border: 1px gray solid;
    }
`

const Header = (props) =>{
    const {location,enviarID,counterAdults,setCounterAdults,counterChildren,setCounterChildren} = props
    const [mostrarCities,setMostrarCities] = useState(false)
    const [mostrarGuests,setMostrarGuests] = useState(false)


    //Funciones mostrar filtros
    const mostrar = () => {
        setMostrarCities(!mostrarCities)
        setMostrarGuests(false)
    }
    const mostrarG = () => {
        setMostrarGuests(!mostrarGuests)
        setMostrarCities(false)
    }
    const ocultar = () => {
        setMostrarGuests(false)
        setMostrarCities(false)
    }
    
    if(mostrarCities){
        return(<StyledHeader>
                <StyledNav>
                <NavDiv>
                <PDiv>
                    <StyledButton onClick = {mostrar}>{location}, Finland</StyledButton>
                </PDiv>
                <CenterDiv>
                <StyledButton onClick = {mostrarG}>Add Guests</StyledButton>
                </CenterDiv>
                <PDiv>
                    <StyledSearch onClick={ocultar}><SearchIcon sx={{color:"#fff"}}/>Search</StyledSearch>
                </PDiv>
            </NavDiv>
            <Lista>
            {
                cities.map((city,index) => {
                    return <ElementoLista key={index} ><LocationOnIcon sx={{color:colorResaltado}}/><StyledButton id={city} onClick={enviarID}>{city}, Finland</StyledButton></ElementoLista>
                })
            }
            </Lista>
            </StyledNav>
        </StyledHeader>)
    } else if(mostrarGuests){
        return(<StyledHeader>
                <StyledNav>
                <NavDiv>
                <PDiv>
                    <StyledButton onClick = {mostrar}>{location}, Finland</StyledButton>
                </PDiv>
                <CenterDiv>
                <StyledButton onClick = {mostrarG}>Add Guests</StyledButton>
                </CenterDiv>
                <PDiv>
                <StyledSearch onClick={ocultar}><SearchIcon sx={{color:"#fff"}}/>Search</StyledSearch>
                </PDiv>
            </NavDiv>
            <Guests>
            <StyledSpan>Adults</StyledSpan>
            <GraySpan>Ages 13 or above</GraySpan>
            {
                counterAdults === 0 ? <ContenedorBotonesSR>
            <BotonesSR id="disminuirA" disabled onClick={()=>{let less = counterAdults -1
                setCounterAdults(less)}}>-</BotonesSR>
            <span>{counterAdults}</span>
            <BotonesSR id="aumentarA" onClick={()=>{let add = counterAdults +1
                setCounterAdults(add)}}>+</BotonesSR>
            </ContenedorBotonesSR> : <ContenedorBotonesSR>
            <BotonesSR id="disminuirA" onClick={()=>{let less = counterAdults -1
                setCounterAdults(less)}}>-</BotonesSR>
            <span>{counterAdults}</span>
            <BotonesSR id="aumentarA" onClick={()=>{let add = counterAdults +1
                setCounterAdults(add)}}>+</BotonesSR>
            </ContenedorBotonesSR>
            }
            <StyledSpan>Children</StyledSpan>
            <GraySpan>Ages 2-12</GraySpan>
            {
                counterChildren === 0 ? <ContenedorBotonesSR>
                <BotonesSR id="disminuirC" disabled onClick={()=>{let less = counterChildren -1
                    setCounterChildren(less)}}>-</BotonesSR>
                <span>{counterChildren}</span>
                <BotonesSR id="aumentarC" onClick={()=>{let add = counterChildren +1
                    setCounterChildren(add)}}>+</BotonesSR>
                </ContenedorBotonesSR> :
                <ContenedorBotonesSR>
                <BotonesSR id="disminuirC" onClick={()=>{let less = counterChildren -1
                    setCounterChildren(less)}}>-</BotonesSR>
                <span>{counterChildren}</span>
                <BotonesSR id="aumentarC" onClick={()=>{let add = counterChildren +1
                    setCounterChildren(add)}}>+</BotonesSR>
            </ContenedorBotonesSR>
            }
            
        </Guests>
        </StyledNav>
        </StyledHeader>)
    }
    else{
        return(
            <StyledHeader>
            <Fragment>
            <StyledLogo src={Logo} alt="logo"/>
            <StyledDiv>
                <PDiv>
                    <StyledButton onClick = {mostrar}>{location}, Finland</StyledButton>
                </PDiv>
                <CenterDiv>
                <StyledButton onClick = {mostrarG}>Add Guests</StyledButton>
                </CenterDiv>
                <PDiv>
                <StyledButton onClick={ocultar}><SearchIcon sx={{color:colorResaltado}}/></StyledButton>
                </PDiv>
            </StyledDiv>
            </Fragment>       
            </StyledHeader>
        )
    }
}

export default Header