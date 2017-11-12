import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import star from "../star.svg";

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
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
`;

const Information = styled.div`
  font-family: "Circular Air Light", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin-top: 2px;
  padding-bottom: 6px;
`;

const Superhost = styled.div`
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #383838;
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`;

const Wrapper = styled.div`
  width: 315px;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export default function(props) {
  return (
    <a href="#">
      <div className="col-4 col-sm-5 col-xs-8">
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
      </div>
    </a>
  );
}
