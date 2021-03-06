import styled from "styled-components";
import arrow from "./arrow.svg";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  border-top: solid 0.5px rgba(72, 72, 72, 0.3);
`;

export const Container = styled.div`
  margin-top: 48px;
  border-bottom: solid 0.5px rgba(72, 72, 72, 0.3);
  padding: 0px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  height: 48px;
  width: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: white;
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 18px;

  color: #383838;
  border-radius: 4px;
  margin-bottom: 16px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) center;
  padding: 10px;
  padding-left: 15px;
  box-decoration-break: none;
  appearance: none;
  :-ms-expand {
    display: none;
  }

  &:focus {
    border: 1px solid #00797e;
    outline: none;
  }
  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 15px;
  }
  @media (max-width: 576px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Title = styled.div`
  padding: 0;
  padding-bottom: 16px;
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 15px;

  color: #383838;
  line-height: 19px;
`;

export const LinkPosition = styled.nav`
  margin-top: 0px;
  padding-bottom: 8px;
`;

export const Link = styled.a`
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 15px;

  color: #636363;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 12px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 576px) {
    justify-content: flex-start;
    height: 60px;
  }
`;

export const FlexImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Inc = styled.div`
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 15px;

  color: #636363;
  text-decoration: none;
  margin-left: 16px;
  width: 100%;
  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 13px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ImgSoc = styled.img`
  margin-left: 12px;
  padding: 4px;
`;

export const Privacy = styled.div`
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 15px;

  color: #636363;
  text-decoration: none;
  padding-left: 16px;
  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 13px;
  }
  @media (max-width: 576px) {
    padding-right: 16px;
    padding-left: 0px;
    margin-top: 0px;

    font-size: 12px;
  }
`;
