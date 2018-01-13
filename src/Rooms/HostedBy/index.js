import React from "react";
import styled from "styled-components";
import HostProfile from "../Information/HostProfile";
import hostPhoto from "../Information/hostPhoto.png";
import NumberOfReviews from "./NumberOfReviews";
import Pin from "./Pin";
import downArrow from "../Information/downArrow.svg";

const TheHost = styled.div`
  margin-top: 56px;
`;

const MainTitle = styled.h2`
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

const TheHostTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BadgesWrapper = styled.div`
  margin-top: 24px;
  @media only screen and (min-width: 320px) {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }
`;

const Description = styled.p`
  font-family: CircularAir-Light, sans-serif;
  font-size: 16px;
  color: #383838;
  display: inline;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
  }
`;

const SecondDescription = styled.p`
  font-family: CircularAir-Light, sans-serif;
  font-size: 16px;
  color: #383838;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 0px;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
  }
`;

const Link = styled.a`
  color: #0f7276;
  display: inline;
  margin-left: 8px;
`;

const TextBlock = styled.div`
  margin-top: 24px;
  @media only screen and (min-width: 1200px) {
    margin-top: 32px;
  }
`;

const ContactHost = styled.button`
  background-color: #ffffff;
  border: 1px solid #008489;
  border-radius: 2px;
  color: #0f7276;
  font-size: 14px;
  padding: 7px 12px;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const InformationSection = styled.div`
  margin-bottom: 48px;
`;

const Information = styled.p`
  font-size: 18px;
  font-family: "CircularAir";
  font-weight: 300;
  color: #383838;
  margin: 0px 0 4px 0;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
  padding: 0px;
  margin-top: 15px;
  color: #0f7276;
  display: block;
  margin-bottom: 16px;
`;

const MoreText = styled.span`
  margin-right: 8px;
`;

const MoreImage = styled.img`
  vertical-align: middle;
`;

export default props => (
  <TheHost>
    <TheHostTop>
      <div>
        <MainTitle>Hosted by Yudy & Victoria</MainTitle>
        <ShortDescription>
          Santa Ana, California, United States · Joined in August 2014
        </ShortDescription>
      </div>
      <HostProfile img={hostPhoto} />
    </TheHostTop>
    <BadgesWrapper>
      <NumberOfReviews />
      <Pin />
    </BadgesWrapper>
    <TextBlock>
      <Description>
        Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
        would be your hostess on the property. I live in California and am the
        owner of the property. It is my goal to create a "boutique eco-resort"
        on the approximately 5 acre farm we have in the coffee growing reg…
      </Description>
      <Link>Read more</Link>
    </TextBlock>
    <ContactHost>Contact host</ContactHost>
    <InformationSection>
      <Information>
        Languages: <b>English, Español</b>
      </Information>
      <Information>
        Response rate: <b>100%</b>
      </Information>
      <Information>
        Response time: <b>within a few hours</b>
      </Information>
    </InformationSection>
    <MainTitle>The neighborhood</MainTitle>
    <TextBlock>
      <Description>
        Yudy & Victoria’s home is located in Armenia, Quindio, Colombia.
      </Description>
      <SecondDescription>
        We are situated in the heart of the coffee region in the Andean
        mountains in Colombia. We are in "Vereda La Pradera" neighborhood, near
        the small town of "El Caimo", 20 minutes from Armenia and 20 minutes
        from the airport, by car. Close enough for comfort and easy access, far
        enough from the hustle of traffic and city noise that you can commune
        with nature. Sleep to the sound of the crickets and awaken to the sound
        of birds.
      </SecondDescription>
    </TextBlock>
    <Button>
      <MoreText>Read more about neighborhood</MoreText>
      <MoreImage src={downArrow} />
    </Button>
  </TheHost>
);
