import React from "react";
import styled from "styled-components";

const Img = styled.img`width: 100%;`;
const CookName = styled.div`
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;

  color: #383838;
  line-height: 13px;
  margin-top: 12px;
`;

const Name = styled.div`
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 18px;

  color: #383838;
  line-height: 23px;
  margin-top: 2px;
`;

const Price = styled.div`
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 18px;

  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
  line-height: 23px;
  margin-top: 4px;
`;
const Wrapper = styled.div`width: 230px;`;

export default function(props) {
  return (
    <Wrapper>
      <a href="#">
        <Img src={props.img} />
        <CookName>{props.cook.toUpperCase()}</CookName>
        <Name>{props.name}</Name>
        <Price>About ${props.price} per person</Price>
      </a>
    </Wrapper>
  );
}
