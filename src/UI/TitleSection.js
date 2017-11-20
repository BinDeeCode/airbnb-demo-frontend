import React from "react";
import styled from "styled-components";

const H2Title = styled.h2`
  font-family: "CircularAir";
  font-weight: bold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin-top: 50px;
  line-height: 34px;
  color: #383838;
  padding-bottom: 2px;
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export default function(props) {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <H2Title>{props.name}</H2Title>
    </div>
  );
}
