import React from "react";
import styled from "styled-components";

const ImgCard = styled.img`width: 100%;`;
const City = styled.div`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
`;

const Wrapper = styled.div`width: 147px;`;

export default function(props) {
  return (
    <a href="#">
      <Wrapper>
        <ImgCard src={props.img} />
        <City>{props.city}</City>
      </Wrapper>
    </a>
  );
}
