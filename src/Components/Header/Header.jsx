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
    

const StyledSpan = styled.p`
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
    cursor:pointer;
`
const CenterDiv = styled(PDiv)`
    border-right: 1px lightgray solid;
    border-left: 1px lightgray solid;
    padding: 10px 0px;
    width:40%;
`
const StyledNav = styled.nav`
    width:100%;
    height:35vh;
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
const BotonesSR = styled.div`
    display:flex;
    align-items:center;
    gap:10px;

`

const Header = () =>{
    const [mostrarCities,setMostrarCities] = useState(false)
    const [mostrarGuests,setMostrarGuests] = useState(false)
    const [location,setlocation] = useState("Helsinki")
    const mostrar = () => {
        setMostrarCities(!mostrarCities)
        setMostrarGuests(false)
    }
    const mostrarG = () => {
        setMostrarGuests(!mostrarGuests)
        setMostrarCities(false)
    }
    const enviarID = (e) => {
        setlocation(e.target.id) 
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
                    <StyledButton><SearchIcon/></StyledButton>
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
                    <StyledButton><SearchIcon/></StyledButton>
                </PDiv>
            </NavDiv>
            <Guests>
            <StyledSpan>Adults</StyledSpan>
            <GraySpan>Ages 13 or above</GraySpan>
            <BotonesSR><button>-</button><span>0</span><button>+</button></BotonesSR>
            <StyledSpan>Children</StyledSpan>
            <GraySpan>Ages 2-12</GraySpan>
            <BotonesSR><button>-</button><span>0</span><button>+</button></BotonesSR>
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
                    <StyledButton><SearchIcon/></StyledButton>
                </PDiv>
            </StyledDiv>
            </Fragment>       
            </StyledHeader>
        )
    }
}

export default Header