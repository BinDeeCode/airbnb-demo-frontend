import React from "react";
import styled from "styled-components";
import pin from "./badge.png";

const Pin = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media only screen and (min-width: 320px) {
    margin-top: 0px;
    margin-left: 32px;
  }
`;

const PinImage = styled.img``;

const Text = styled.span`
  font-size: 18px;
  color: #636363;
  margin-left: 16px;
`;

export default props => (
  <Pin>
    <PinImage src={pin} />
    <Text>Verified</Text>
  </Pin>
);
