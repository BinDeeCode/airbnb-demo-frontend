import React from "react";
import styled from "styled-components";
import star from "./img/star.png";
import imgForest from "./expcardbg.png";

const CardDiv = styled.div`
  margin: 0;
  padding: 0;
`;
const Img = styled.img`
  width: 100%;
  padding: 0;
`;

const DivWrapper = styled.div`margin-top: 8px;`;

const SpanPrice = styled.span`
  margin: 0;
  font-size: 15px;
  color: #383838;
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
`;
const SpanText = styled.span`
  margin: 0;
  margin: 0;
  font-size: 15px;
  color: #383838;
  font-family: Circular Air Light, Arial, Helvetica, sans-serif;
  padding-left: 8px;
`;

const DivRait = styled.div`margin-top: 7px;`;

const SpanRait = styled.span`
  padding-left: 8px;
  color: #383838;
  font-family: Circular Air Book, Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

export default function(props) {
  return (
    <nav>
      <a href="#">
        <CardDiv>
          <Img src={props.img} />
          <DivWrapper>
            <SpanPrice>{props.price}</SpanPrice>
            <SpanText>{props.name}</SpanText>
          </DivWrapper>
          <DivRait>
            <img src={star} />
            <SpanRait>{props.reviews} reviews</SpanRait>
          </DivRait>
        </CardDiv>
      </a>
    </nav>
  );
}
