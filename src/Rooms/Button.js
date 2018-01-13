import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;

  @media (min-width: 576px) {
    margin-left: 16px;
    font-family: "CircularAir";
    font-weight: normal;
    line-height: 10px;
    font-size: 14px;
    color: #383838;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: #ffffff;
    border: none;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    outline: none;
  }
`;

const Image = styled.img`
  margin-right: 8px;
`;

export default function(props) {
  return (
    <Button>
      <Image src={props.image} alt="" />
      <p>{props.label}</p>
    </Button>
  );
}
