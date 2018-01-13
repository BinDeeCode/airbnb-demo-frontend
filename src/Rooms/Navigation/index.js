import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  background-color: white;
  display: flex;
  border-bottom: 1px solid #eaebf0;
  padding-top: 11px;
  padding-bottom: 11px;

  @media only screen and (min-width: 320px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const NavigationButton = styled.button`
  border: none;
  background-color: white;
  font-family: CircularAir-Book, sans-serif;
  font-size: 12px;
  padding: 0px;
  cursor: pointer;
  font-weight: ${props => (props.isSelected ? "bold" : "normal")};
  color: ${props => (props.isSelected ? "#383838" : "#0F7276")};

  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
`;

const Dot = styled.span`
  font-size: 12px;
  color: #0f7276;
  margin: 0px 8px;
  align-self: center;

  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
`;

export default () => (
  <Navigation>
    <NavigationButton isSelected>Overview</NavigationButton>
    <Dot>·</Dot>
    <NavigationButton>Reviews</NavigationButton>
    <Dot>·</Dot>
    <NavigationButton>The Host</NavigationButton>
    <Dot>·</Dot>
    <NavigationButton>Location</NavigationButton>
  </Navigation>
);
