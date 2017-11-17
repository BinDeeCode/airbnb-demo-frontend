import React from "react";
import styled from "styled-components";

const Background = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const Filter = styled.button`
  height: 32px;
  width: auto;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 14px;
  padding: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 12px;
  color: #383838;
  background-color: white;
`;
const FirstFilter = styled(Filter)`
  margin-left: 0px;
  @media (min-width: 576px) and (max-width: 992px) {
    margin-left: -6px;
  }
  @media (max-width: 576px) {
    margin-left: -6px;
  }
`;

export default function() {
  return (
    <Background>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-xs-12">
            <FirstFilter>Dates</FirstFilter>

            <Filter>Guests</Filter>

            <Filter className="xs-hidden sm-hidden">Room type</Filter>

            <Filter className="xs-hidden sm-hidden">Price</Filter>

            <Filter className="xs-hidden sm-hidden">Instant book</Filter>

            <Filter>More&nbsp;filters</Filter>
          </div>
        </div>
      </div>
    </Background>
  );
}
