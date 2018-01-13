import React from "react";
import styled from "styled-components";
import starPicture from "../../../UI/star.svg";
import flag from "./flag.png";

const Review = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;
  border-bottom: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;
const Name = styled.div`
  font-size: 20px;
  color: #383838;
`;

const RegistrationDate = styled.div`
  font-size: 16px;
  color: #383838;
  font-family: CircularAir-Light, sans-serif;
`;

const Flag = styled.img`
  position: absolute;
  right: 0px;
  top: 24px;
`;

const Paragraph = styled.p`
  font-family: CircularAir-Light, sans-serif;
  line-height: 21px;
`;

export default props => (
  <Review>
    <Wrapper>
      <Avatar src={props.avatar} />
      <div>
        <Name>{props.name}</Name>
        <RegistrationDate>{props.registrationDate}</RegistrationDate>
      </div>
    </Wrapper>
    <Flag src={flag} />
    <Paragraph>{props.children}</Paragraph>
  </Review>
);
