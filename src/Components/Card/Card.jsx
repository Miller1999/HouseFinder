import StarIcon from '@mui/icons-material/Star';
import { colorResaltado } from '../../Global';
import { styled } from 'styled-components';

const StyledCard = styled.div`
    width: 350px;
    height: 500px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
const ContainerImg = styled.div`
    width:100%;
`
const StyledImg = styled.img`
    width:100%;
    border-radius:30px;
`
const InfoPrincipal = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`
const Info = styled.div`
    display: flex;
    align-items:center;
    gap:10px;
`
const Puntuacion = styled.div`
    display:flex;
    align-items:center;
`
const SuperHost = styled.span`
    padding:10px;
    border: 1px black solid;
    border-radius: 15px;
    font-weight: 900;
`
const DescripcionP = styled.span`
    color:gray;
`
const DescripcionA = styled(DescripcionP)`
    color:black;
    font-weight:900;
`
const Card = () => {
    return(
        <StyledCard>
            <ContainerImg>
                <StyledImg src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="Imagen"/>
            </ContainerImg>
            <InfoPrincipal>
                <Info>
                    <SuperHost>Super Host</SuperHost>
                    <DescripcionP>Entire apartment, 2 beds</DescripcionP>
                </Info>
                <Puntuacion>
                    <StarIcon sx={{color:colorResaltado}}/>
                    <span>5</span>
                </Puntuacion>
            </InfoPrincipal>
            <DescripcionA>Stylist apartment in center of the city</DescripcionA>

        </StyledCard>

    )
}

export default Card