import React from "react";
import styled from "styled-components";
import star from "../../UI/star.svg";
import { Link } from "react-router-dom";

const Img = styled.img`width: 100%;`;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  display: block;
  float: left;
`;
const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`;

const Star = styled.img`
  display: flex;
  justify-content: flex-start;
  float: left;
`;

const Title = styled.div`
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
`;

const Information = styled.div`
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 15px;
  color: #383838;
  margin-top: 2px;
  padding-bottom: 6px;
`;

const Superhost = styled.div`
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 12px;
  color: #383838;
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`;

const Wrapper = styled.div`
  width: 250px;
  @media (min-width: 576px) {
    width: 315px;
  }
`;

export default function(props) {
  return (
    <Link to="/rooms">
      <Wrapper>
        <div>
          <Img src={props.img} alt="" />
        </div>
        <Title>
          <Price>${props.price}</Price>
          <Name>{props.name}</Name>
        </Title>
        <Information>{props.entre}</Information>
        <div>
          <Star src={star} />
          <Superhost>{props.supershot}</Superhost>
        </div>
      </Wrapper>
    </Link>
  );
}
