import { API,findStays } from "../../API/api";
import { Fragment,useEffect,useState } from "react";
import Card from "../Card/Card";
import {v4 as uuid} from "uuid"
import {styled} from "styled-components"

const StyledContainer = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
    flex-wrap: wrap;
    margin-bottom:20px;
`
const StyledDiv = styled.div`
    display:flex;
    justify-content: space-between;
    margin:2em;
`
const Title = styled.h1`
    font-size: 1.5em;
    font-weight:900;

`

const Container = (props) =>{
    const {location}= props
    const [ListHouses, setHouses] = useState([])
    useEffect(()=>{
        findStays(API.baseURL,(response) => {
            setHouses(response)
        })
    },[])
    const showHouses = ListHouses.filter(house => house.city === location)
    return(
        <Fragment>
            <StyledDiv>
                <Title>Stays in Finland</Title>
                <span>{ListHouses.length} stays</span>
            </StyledDiv>
            <StyledContainer>
                {showHouses.map((house) => {
                    return(
                        <Card photo={house.photo} superHost={house.superHost} title={house.title} rating={house.rating} beds={house.beds} type={house.type} key={uuid()}/>
                    )
                })}
            </StyledContainer>
        </Fragment>

    )

}

export default Container