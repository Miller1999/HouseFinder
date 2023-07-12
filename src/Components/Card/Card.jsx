import StarIcon from '@mui/icons-material/Star';
import { colorResaltado } from '../../Global';
import { styled } from 'styled-components';

const StyledCard = styled.div`
    width: 350px;
    height: 350px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
const ContainerImg = styled.div`
    width:100%;
    height:70%;
`
const StyledImg = styled.img`
    width:100%;
    height:100%;
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
const Card = (props) => {
    const {photo,superHost,title,rating,beds,type}= props
    if(superHost){
        return(
            <StyledCard>
                <ContainerImg>
                    <StyledImg src={photo}/>
                </ContainerImg>
                <InfoPrincipal>
                    <Info>
                        <SuperHost>Super Host</SuperHost>
                        <DescripcionP>{type}, {beds} beds</DescripcionP>
                    </Info>
                    <Puntuacion>
                        <StarIcon sx={{color:colorResaltado}}/>
                        <span>{rating}</span>
                    </Puntuacion>
                </InfoPrincipal>
                <DescripcionA>{title}</DescripcionA>
            </StyledCard>
        )
    } else {
        return(
            <StyledCard>
                <ContainerImg>
                    <StyledImg src={photo}/>
                </ContainerImg>
                <InfoPrincipal>
                    <Info>
                        <DescripcionP>{type}, {beds} beds</DescripcionP>
                    </Info>
                    <Puntuacion>
                        <StarIcon sx={{color:colorResaltado}}/>
                        <span>{rating}</span>
                    </Puntuacion>
                </InfoPrincipal>
                <DescripcionA>{title}</DescripcionA>
            </StyledCard>
        )
    }
    
}

export default Card