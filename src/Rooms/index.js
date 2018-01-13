import React from "react";
import styled from "styled-components";
import bg from "./bg.png";
import GoogleMap from "../UI/GoogleMap";
import save from "./save.svg";
import share from "./share.svg";
import Button from "./Button";
import mobSave from "./saveMobile.svg";
import mobShare from "./shareMobile.svg";
import Sticker from "./Sticker";
import Navigation from "./Navigation";
import { StickyContainer as Container, Sticky } from "react-sticky";
import Information from "./Information";
import Reviews from "./Reviews";
import HostedBy from "./HostedBy";

const MapText = styled.div`
  margin-top: 16px;
  font-family: "CircularAir";
  font-weight: 300;
  line-height: normal;
  font-size: 18px;

  color: #383838;
  @media (min-width: 576px) {
    margin-top: 8px;
  }
`;
const ButtonView = styled.button`
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
  margin-top: 206px;
  @media (min-width: 576px) {
    margin-top: 550px;
  }
`;

const PaddingHeader = styled.div`
  height: 81px;
`;

const BackgroundImage = styled.div`
  width: 100%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 24px;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 576px) {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
`;

const Wrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 100%;
  @media (min-width: 576px) {
    display: flex;
    justify-content: flex-start;
  }
`;

const MobileButton = styled.button`
  border: none;
  background: none;
  margin-top: 15px;
  margin-left: 10px;
  @media (min-width: 576px) {
    display: none;
  }
`;

const StickyContainer = styled(Container)`
  height: 100%;
  background-color: red;
`;

const RoomType = styled.div`
  display: flex;
  align-items: center;

  font-family: "CircularAir";
  font-weight: 300;
  line-height: normal;
  font-size: 14px;

  color: #383838;
`;

export default function() {
  return (
    <div>
      <PaddingHeader />
      <BackgroundImage>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-12">
              <Row>
                <Button image={share} label="Share" />
                <Button image={save} label="Save" />
                <MobileButton>
                  <img src={mobShare} alt="" />
                </MobileButton>
                <MobileButton>
                  <img src={mobSave} alt="" />
                </MobileButton>
              </Row>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-12">
              <Wrapper>
                <ButtonView>
                  <p>View Photos</p>
                </ButtonView>
              </Wrapper>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-8">
            <Navigation />
            <Information />
            <Reviews />
            <HostedBy />
            <GoogleMap center={{ lat: 42.565, lng: 47.8734 }} zoom={7} />
            <MapText>
              Exact location information is provided after a booking is
              confirmed.
            </MapText>
          </div>
          <div className="xs-hidden sm-hidden col-lg-4">
            <Sticker />
            {/* <StickyContainer>
              <Sticky>
                {isSticky => {
                  return <Sticker />;
                }}
              </Sticky>
            </StickyContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
}
