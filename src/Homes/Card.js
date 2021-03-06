import React from "react";
import styled from "styled-components";
import star from "../UI/star.svg";

const Card = styled.a`
  margin-top: 24px;
  display: block;
  padding: 0;
`;
const Img = styled.img`
  padding: 0;
  width: 100%;
`;

const Title = styled.div`
  margin-top: 8px;
`;
const Information = styled.div`
  font-family: "Circular Air Light", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin-top: 2px;
  padding-bottom: 6px;
`;

const Price = styled.span`
  margin: 0;
  font-size: 15px;
  color: #383838;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
const Name = styled.span`
  margin: 0;
  margin: 0;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;

  color: #383838;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding-left: 8px;
`;

const Reviews = styled.span`
  padding-left: 8px;
  color: #383838;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

export default function(props) {
  return (
    <Card href="#">
      <Img src={props.img} />
      <Title>
        <Price>${props.price}</Price>
        <Name>{props.name}</Name>
      </Title>
      <Information>{props.roomtype}</Information>
      <div>
        <img src={star} />
        <Reviews>{props.superhost}</Reviews>
      </div>
    </Card>
  );
}
