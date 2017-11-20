import React from "react";
import styled from "styled-components";
import search from "./search.svg";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  height: 80px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(72, 72, 72, 0.2);

  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding-left: 53px;
  background-image: url(${search});
  background-repeat: no-repeat;

  font-family: "CircularAir";
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;

  color: #383838;
  background-position: 16.2px center;
  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    height: 48px;
    border: 1px solid rgba(72, 72, 72, 0.2);

    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    padding-left: 53px;
    width: 392px;
    background-image: url(${search});
    background-repeat: no-repeat;

    font-family: "CircularAir";
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;

    color: #383838;
    background-position: 16.2px center;
    &:focus {
      outline: none;
    }
  }
`;

export const Li = styled.a`
  text-decoration: none;
  line-height: 24px;
  font-size: 14px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 8px;
  font-family: "CircularAir";
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
`;

export const Img = styled.img`
  padding: 10px;
  padding-left: 0px;
  margin-top: 3px;
`;

export const Logo = styled(Link)`display: flex;`;
