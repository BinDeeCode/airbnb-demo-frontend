import React from "react";
import styled from "styled-components";
import starPicture from "../../../UI/star.svg";

const Grades = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #eaebf0;
`;

const Level = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Value = styled.span`
  font-size: 18px;
  line-height: 21px;
  font-family: CircularAir-Light, sans-serif;
`;

const Star = styled.img``;

const Stars = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-left: 12px;

  @media only screen and (min-width: 320px) {
    margin-left: 16px;
  }
`;

export default props => (
  <Grades>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Accuracy</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Communication</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Cleanliness</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Location</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Check In</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
    <div className="col-lg-6 col-sm-12 col-xs-12">
      <Level>
        <Value>Value</Value>
        <Stars>
          <Star src={starPicture} alt="star" />
        </Stars>
      </Level>
    </div>
  </Grades>
);
