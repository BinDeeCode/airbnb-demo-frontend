import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import bath from "./bath.svg";
import bed from "./bed.svg";
import door from "./door.svg";
import guests from "./guests.svg";

const Сharacteristics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 18px;

  @media only screen and (min-width: 320px) {
    margin-top: 34px;
  }

  @media only screen and (min-width: 1000px) {
    margin-left: 0px;
    flex-wrap: nowrap;
  }
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-top: 14px;

  @media only screen and (min-width: 320px) {
    width: auto;
    margin-right: 30px;
  }
`;

const Img = styled.img`
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 14px;
  color: #383838;
  white-space: nowrap;
`;

export default function() {
  return (
    <Сharacteristics>
      <Value>
        <Img src={guests} />
        <Text>2 guests</Text>
      </Value>
      <Value>
        <Img src={door} />
        <Text>Studio</Text>
      </Value>
      <Value>
        <Img src={bed} />
        <Text>2 beds</Text>
      </Value>
      <Value>
        <Img src={bath} />
        <Text>1 bath</Text>
      </Value>
    </Сharacteristics>
  );
}
