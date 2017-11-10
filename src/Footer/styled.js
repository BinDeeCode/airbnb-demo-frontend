import styled from "styled-components";
import "../gridstyle.css";
import arrowBot from "./arrowBot.svg";
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  border-top: solid 0.5px rgba(72, 72, 72, 0.3);
`;

export const ContainerFooter = styled.div`
  margin-top: 48px;
  border-bottom: solid 0.5px rgba(72, 72, 72, 0.3);
  padding-bottom: 48px;
`;

export const InputList = styled.select`
  height: 48px;
  width: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: white;
  font-family: Circular Air Light, Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-radius: 4px;
  margin-bottom: 16px;
  background-image: url(${arrowBot});
  background-repeat: no-repeat;
  background-position: 235px center;
  padding: 10px;
  box-decoration-break: none;
  color: #383838;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  &:focus {
    border: 1px solid #00797e;
    outline: none;
  }
`;

export const H3 = styled.div`
  padding: 0;
  padding-bottom: 16px;
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 19px;
  color: #3838383;
`;

export const LinksDiv = styled.nav`
  margin-top: 0px;
  padding-bottom: 8px;
`;

export const LinksText = styled.a`
  font-size: 15px;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  color: #636363;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ImgLogo = styled.img``;

export const FlexDiv = styled.div`
  display: flex;
  height: 88px;
  align-items: center;
`;

export const FlexImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 48%;
`;

export const DivLogoText = styled.div`
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-decoration: none;
  color: #383838;
  margin-left: 16px;
  width: 100%;
`;

export const ImgSoc = styled.img`
  margin-right: 12px;
  padding: 4px;
`;
