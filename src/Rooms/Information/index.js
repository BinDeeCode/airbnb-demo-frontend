import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import hostPhoto from "./hostPhoto.png";
import HostProfile from "./HostProfile";
import Сharacteristics from "./Description";
import downArrow from "./downArrow.svg";
import Amenities from "./Amenities";
import Cancellations from "./Cancellations";
import { StickyContainer, Sticky } from "react-sticky";
import lamp from "./lamp.png";

const BeenViewed = styled.div`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Overview = styled.div`
  margin-top: 16px;

  @media only screen and (min-width: 320px) {
    margin-top: 24px;
  }
`;

const OverviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
  font-weight: bold;
  color: #383838;
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: normal;
  }
`;

const ShortDescription = styled.div`
  color: #636363;
  font-size: 14px;
  margin-top: 18px;
  font-family: CircularAir-Light, sans-serif;
  @media only screen and (min-width: 320px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;

const Description = styled.div`
  font-family: CircularAir-Light, sans-serif;
  font-size: 16px;
  color: #383838;
  margin-top: 24px;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 32px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-family: CircularAir-Book, sans-serif;
  font-size: 16px;
  padding: 0px;
  margin-top: 23px;
  color: #0f7276;
  display: block;
`;
const MoreText = styled.span`
  margin-right: 8px;
`;

const MoreImage = styled.img`
  vertical-align: middle;
`;

const Title = styled.h3`
  font-family: CircularAir-Book, sans-serif;
  color: #383838;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  margin-top: 23px;
`;

const Wrapper = styled.div`
  padding-bottom: 23px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const Paragraph = styled.p`
  color: #383838;
  font-family: CircularAir-Light, sans-serif;
  font-weight: 16px;
`;

const Link = styled.a`
  color: #0f7276;
  margin-top: 15px;
`;

const Rules = styled.p`
  color: #383838;
  font-family: "CircularAir";
  font-weight: 300;
  font-weight: 16px;
  margin: 0;
`;

const ThisHome = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  margin: 0;
  margin-left: 24px;
  color: #383838;
`;
const ViewedCount = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  margin: 0;
  margin-left: 24px;
  color: #636363;
`;
const LampImage = styled.img`
  margin-right: 32px;
  margin-top: 13px;
  margin-bottom: 13px;
`;

export default function() {
  return (
    <Overview>
      <OverviewTop>
        <div>
          <MainTitle>Romantic Cabana with view</MainTitle>
          <ShortDescription>Entire cabin · Armenia</ShortDescription>
          <Сharacteristics />
        </div>
        <HostProfile name="Yudi & Victoria" img={hostPhoto} />
      </OverviewTop>
      <div className="xs-hidden lg-hidden">
        <BeenViewed>
          <div>
            <ThisHome>This home is on people’s minds.</ThisHome>
            <ViewedCount>
              It’s been viewed 500+ times in the past week.
            </ViewedCount>
          </div>
          <LampImage src={lamp} alt="" />
        </BeenViewed>
      </div>
      <Wrapper>
        <Description>
          Located in the coffee region, in the Andean mountains of Colombia,
          South America, a charming cabana made from bamboo, with a great view
          and a "sendero" or pathway through the bamboo forest which
          criss-crosses our 5 acre organic farm, leading down to a stream. A
          place to relax and commune with nature.
        </Description>
        <Button>
          <MoreText>Read more about the space</MoreText>
          <MoreImage src={downArrow} />
        </Button>
        <Button>Contact host</Button>
      </Wrapper>
      <Amenities />
      <Wrapper>
        <Title>Always communicate through Airbnb</Title>
        <Paragraph>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </Paragraph>
        <Link>Learn more</Link>
      </Wrapper>
      <Wrapper>
        <Title>House rules</Title>
        <Rules>Check-in is anytime after 1PM</Rules>
        <Rules>Check out by 11AM</Rules>
        <Button>
          <MoreText>Read all rules</MoreText>
          <MoreImage src={downArrow} />
        </Button>
      </Wrapper>
      <Cancellations />
    </Overview>
  );
}
