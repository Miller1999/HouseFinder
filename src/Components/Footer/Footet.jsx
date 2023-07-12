import { styled } from "styled-components"

const StyledFooter = styled.footer`
    display:flex;
    justify-content:center;
    width: 100%;
    font-size: 20px;
    font-weight:900;
`

const Footer = () => {
    return(
        <StyledFooter>Developed by Miller Arias - @Miller1999</StyledFooter>
    )
}

export default Footer