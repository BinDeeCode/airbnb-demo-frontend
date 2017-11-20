import React from "react";
import styled from "styled-components";
import star from "../../UI/star.svg";

const Cards = styled.div`
  margin: 0;
  padding: 0;
  width: 230px;
  @media (max-width: 576px) {
    width: 180px;
  }
`;
const Img = styled.img`
  padding: 0;
  width: 100%;
`;

const Information = styled.div`margin-top: 8px;`;

const Price = styled.span`
  margin: 0;
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 15px;

  color: #383838;
`;
const Name = styled.span`
  margin: 0;
  margin: 0;
  font-family: "CircularAir";
  color: #383838;
  font-weight: 300;
  font-size: 15px;
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
        <Information>
          <Price>${props.price}</Price>
          <Name>{props.name}</Name>
        </Information>
        <Raiting>
          <img src={star} />
          <Reviews>{props.reviews} reviews</Reviews>
        </Raiting>
      </Cards>
    </a>
  );
}
