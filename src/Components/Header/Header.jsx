import styled from "styled-components"
import Logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';

const StyledHeader = styled.nav`
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
`
const CenterDiv = styled(PDiv)`
    border-right: 1px lightgray solid;
    border-left: 1px lightgray solid;
    padding: 10px 0px;
    
`

const Header = () =>{
    return(
        <StyledHeader>
            <StyledLogo src={Logo} alt="logo"/>
            <StyledDiv>
                <PDiv>
                    <StyledSpan>Helsinki, Finland</StyledSpan>
                </PDiv>
                <CenterDiv>
                    <StyledInput type="text" placeholder="Add Guests"/>
                </CenterDiv>
                <PDiv>
                    <StyledButton><SearchIcon/></StyledButton>
                </PDiv>
            </StyledDiv>
        </StyledHeader>
    )
}

export default Header