import React from "react";
import styled from "styled-components";

import search from "./search.svg";

export const Header = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: 80px;
  @media (max-width: 576px) {
    width: calc(100% - 20px);
  }
`;

export const Input = styled.input`
  height: 48px;
  border: 1px solid rgba(72, 72, 72, 0.2);

  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding-left: 53px;
  width: 392px;
  background-image: url(${search});
  background-repeat: no-repeat;

  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #3838383;
  background-position: 16.2px center;
  &:focus {
    outline: none;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: 432px;
  }
  @media (max-width: 576px) {
    width: calc(100% - 20px);
  }
`;

export const Links = styled.a`
  text-decoration: none;
  line-height: 24px;
  font-size: 14px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 8px;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
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
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
`;

export const Img = styled.img`
  padding: 10px;
  margin-top: 3px;
`;

export const Logo = styled.a`display: flex;`;
