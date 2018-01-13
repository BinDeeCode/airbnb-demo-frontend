import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import medal from "./medal.svg";

const HostProfile = styled.div`
  @media only screen and (min-width: 320px) {
    margin-right: 46px;
  }
`;

const ProfileName = styled.span`
  display: none;
  width: 64px;
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  color: #636363;
  @media (min-width: 576px) {
    display: inline-block;
  }
`;

const PhotoAndMedal = styled.div`
  position: relative;
`;

const Photo = styled.img`
  width: 55px;
  height: 40px;
  @media only screen and (min-width: 320px) {
    width: 64px;
    height: 64px;
  }
`;

const Medal = styled.img`
  position: absolute;
  width: 10px;
  height: 19px;
  top: 26px;
  left: 28px;

  @media only screen and (min-width: 320px) {
    width: 16px;
    height: 30px;
    top: 40px;
    left: 52px;
  }
`;

export default props => {
  return (
    <HostProfile>
      <PhotoAndMedal>
        <Photo src={props.img} />
        <Medal src={medal} />
      </PhotoAndMedal>
      <ProfileName>{props.name}</ProfileName>
    </HostProfile>
  );
};
