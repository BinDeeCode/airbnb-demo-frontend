import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import star from "../star.png";

const HomesImg = styled.img`width: 100%;`;
const HomesPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  display: block;
  float: left;
`;
const HomesName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`;

const ImgStar = styled.img`
  display: flex;
  justify-content: flex-start;
  float: left;
`;

const TitleHomesCard = styled.div`
  font-family: Circular Air Bold;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
`;

const InfTitle = styled.div`
  font-family: Circular Air Light;
  font-size: 15px;
  color: #383838;
  margin-top: 2px;
  padding-bottom: 6px;
`;

const InfSupershot = styled.div`
  font-family: Circular Air Book;
  font-size: 12px;
  color: #383838;
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
`;

export default function(props) {
  return (
    <a href="#">
      <div>
        <HomesImg src={props.img} alt="" />
      </div>
      <TitleHomesCard>
        <HomesPrice>${props.price}</HomesPrice>
        <HomesName>{props.name}</HomesName>
      </TitleHomesCard>
      <InfTitle>{props.entre}</InfTitle>
      <div>
        <ImgStar src={star} />
        <InfSupershot>{props.supershot}</InfSupershot>
      </div>
    </a>
  );
}
