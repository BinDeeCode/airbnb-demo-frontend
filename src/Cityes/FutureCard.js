import React from "react";
import styled from "styled-components";
import "../gridstyle.css";

const ImgCard = styled.img`width: 100%;`;
const City = styled.div`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
`;

export default function(props) {
  return (
    <a href="#">
      <ImgCard src={props.img} />
      <City>{props.city}</City>
    </a>
  );
}
