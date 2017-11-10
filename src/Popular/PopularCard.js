import React from "react";
import styled from "styled-components";
import "../gridstyle.css";

const ImgCard = styled.img`width: 100%;`;
const CookName = styled.div`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 10px;
  color: #383838;
  line-height: 13px;
  margin-top: 12px;
`;

const Name = styled.div`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #383838;
  line-height: 23px;
  margin-top: 2px;
`;

const Price = styled.div`
  font-family: "Circular Air Light", Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #383838;
  line-height: 23px;
  margin-top: 4px;
`;

export default function(props) {
  return (
    <a href="#">
      <ImgCard src={props.img} />
      <CookName>{props.cook.toUpperCase()}</CookName>
      <Name>{props.name}</Name>
      <Price>About ${props.price} per person</Price>
    </a>
  );
}
