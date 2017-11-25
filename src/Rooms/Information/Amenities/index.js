import React from "react";
import styled from "styled-components";
import internet from "./internet.svg";
import family from "./family.svg";
import parking from "./parking.svg";
import wifi from "./wifi.svg";
import downArrow from "../downArrow.svg";

const Amenities = styled.div`
  font-size: 16px;
  color: #383838;
  padding-bottom: 23px;
  border-bottom: 1px solid #eaebf0;
  padding-top: 23px;
  font-family: "CircularAir";
  font-weight: 300;
`;

const Title = styled.h3`
  font-family: "CircularAir";
  font-weight: normal;
  color: #383838;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  margin-bottom: 16px;
`;

const TopRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Text = styled.span`
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 14px;
  color: #383838;

  @media (min-width: 320px) {
    font-size: 16px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  margin-top: 16px;

  @media (min-width: 320px) {
    margin-top: 24px;
  }
`;

const Amenity = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Img = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
  padding: 0px;
  margin-top: 23px;
  color: #0f7276;
  display: block;
`;

const ShowAllButton = styled.button`
  border: none;
  background-color: white;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
  padding: 0px;
  margin-top: 23px;
  color: #0f7276;
  display: block;
`;
const ShowAllText = styled.span`
  margin-right: 8px;
`;

const ShowAllImage = styled.img`
  vertical-align: middle;
`;

export default () => (
  <Amenities>
    <Title>Amenities</Title>
    <TopRow>
      <Amenity>
        <Img src={internet} />
        <Text>Internet</Text>
      </Amenity>
      <Amenity>
        <Img src={family} />
        <Text>Family/kid friendly</Text>
      </Amenity>
    </TopRow>
    <BottomRow>
      <Amenity>
        <Img src={wifi} />
        <Text>Wireless Internet</Text>
      </Amenity>
      <Amenity>
        <Img src={parking} />
        <Text>Free parking on premises</Text>
      </Amenity>
    </BottomRow>
    <ShowAllButton>
      <ShowAllText>Show all amenities</ShowAllText>
      <ShowAllImage src={downArrow} />
    </ShowAllButton>
  </Amenities>
);
