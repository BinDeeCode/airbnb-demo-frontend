import React from "react";
import styled from "styled-components";
import star from "../star.svg";

const Cards = styled.div`
  margin: 0;
  padding: 0;
  width: 219px;
  @media (max-width: 576px) {
    width: 180px;
  }
`;
const Img = styled.img`
  padding: 0;
  width: 100%;
`;

const Title = styled.div`margin-top: 8px;`;

const Price = styled.span`
  margin: 0;
  font-size: 15px;
  color: #383838;
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
`;
const Name = styled.span`
  margin: 0;
  margin: 0;
  font-size: 15px;
  color: #383838;
  font-family: "Circular Air Light", Arial, Helvetica, sans-serif;
  padding-left: 8px;
`;

const Raiting = styled.div`margin-top: 7px;`;

const Reviews = styled.span`
  padding-left: 8px;
  color: #383838;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

export default function(props) {
  return (
    <a href="#">
      <Cards>
        <Img src={props.img} />
        <Title>
          <Price>${props.price}</Price>
          <Name>{props.name}</Name>
        </Title>
        <Raiting>
          <img src={star} />
          <Reviews>{props.reviews} reviews</Reviews>
        </Raiting>
      </Cards>
    </a>
  );
}
