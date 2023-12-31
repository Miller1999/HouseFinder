import { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import { v4 as uuid } from "uuid";
import { styled } from "styled-components";
import axios from "axios";

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em;
`;
const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
`;

const Container = (props) => {
  const { location, counterAdults, counterChildren } = props;
  let maxGuests = counterAdults + counterChildren;
  const [ListHouses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get("../../stays.json")
      .then((res) => setHouses(res.data.apartments))

      .catch((err) => console.log(err));
  }, []);

  const showHouses = ListHouses.filter(
    (house) => house.city === location && house.maxGuests >= maxGuests
  );
  return (
    <Fragment>
      <StyledDiv>
        <Title>Stays in Finland</Title>
        <span>{showHouses.length} stays</span>
      </StyledDiv>
      <StyledContainer>
        {showHouses.map((house) => {
          return (
            <Card
              photo={house.photo}
              superHost={house.superHost}
              title={house.title}
              rating={house.rating}
              beds={house.beds}
              type={house.type}
              key={uuid()}
            />
          );
        })}
      </StyledContainer>
    </Fragment>
  );
};

export default Container;
