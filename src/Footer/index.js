import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import inst from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

import {
  Text,
  Inc,
  ImgSoc,
  Block,
  Div,
  Logo,
  FlexImg,
  Title,
  Wrapper,
  RowWrapper,
  Privacy,
  ContainerFooter,
  Select
} from "./styled";

export default function() {
  return (
    <Wrapper>
      <ContainerFooter className="container">
        <div className="row rownoscroll">
          <div className="col-3 col-sm-4 xs-hidden">
            <Select>
              <option>English</option>
              <option>Русский</option>
              <option>Украинский</option>
              <option>China</option>
            </Select>
            <Select>
              <option>United States dollar</option>
              <option>Рубли</option>
              <option>Гривны</option>
              <option>Юани</option>
            </Select>
          </div>
          <div className="col-xs-6 sm-hidden lg-hidden">
            <Select>
              <option>English</option>
              <option>Русский</option>
              <option>Украинский</option>
              <option>China</option>
            </Select>
          </div>
          <div className="col-xs-6 sm-hidden lg-hidden">
            <Select>
              <option>United States dollar</option>
              <option>Рубли</option>
              <option>Гривны</option>
              <option>Юани</option>
            </Select>
          </div>
          <div className="col-1 sm-hidden xs-hidden" />
          <div className="col-3 col-sm-3 xs-hidden">
            <div>
              <Title>Airbnb</Title>
              <div>
                <Div>
                  <Text href="#">About us</Text>
                </Div>
                <Div>
                  <Text href="#">Careers</Text>
                </Div>
                <Div>
                  <Text href="#">Press</Text>
                </Div>
                <Div>
                  <Text href="#">Policies</Text>
                </Div>
                <Div>
                  <Text href="#">Help</Text>
                </Div>
                <Div>
                  <Text href="#">Diversity & Belonging</Text>
                </Div>
              </div>
            </div>
          </div>

          <div className="col-3 col-sm-3 xs-hidden">
            <div>
              <Title>Discover</Title>
              <div>
                <Div>
                  <Text href="#">Trust & Safety</Text>
                </Div>
                <Div>
                  <Text href="#">Travel Credit</Text>
                </Div>
                <Div>
                  <Text href="#">Gift Cards</Text>
                </Div>
                <Div>
                  <Text href="#">Airbnb Citizen</Text>
                </Div>
                <Div>
                  <Text href="#">Business Travel</Text>
                </Div>
                <Div>
                  <Text href="#">Guidebooks</Text>
                </Div>
                <Div>
                  <Text href="#">Airbnbmag</Text>
                </Div>
              </div>
            </div>
          </div>

          <div className="col-2 col-sm-2 xs-hidden">
            <div>
              <Title>Hosting</Title>
              <div>
                <Div>
                  <Text href="#">Why Host</Text>
                </Div>
                <Div>
                  <Text href="#">Hospitality</Text>
                </Div>
                <Div>
                  <Text href="#">Responsible Hosting</Text>
                </Div>
                <Div>
                  <Text href="#">Community Center</Text>
                </Div>
              </div>
            </div>
          </div>
        </div>
      </ContainerFooter>

      <div className="container">
        <RowWrapper className="row">
          <Block className="col-8 col-sm-3 col-xs-12">
            <a href="#">
              <img src={logo} />
            </a>
            <Inc>© Airbnb Inc.</Inc>
          </Block>
          <Block className="col-4 col-sm-9 col-xs-12">
            <a href="#">
              <Privacy>Terms</Privacy>
            </a>
            <a href="#">
              <Privacy>Privacy</Privacy>
            </a>
            <a href="#">
              <Privacy>Site map</Privacy>
            </a>
            <FlexImg>
              <a href="#">
                <ImgSoc src={facebook} alt="" />
              </a>
              <a href="#">
                <ImgSoc src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={inst} alt="" />
              </a>
            </FlexImg>
          </Block>
        </RowWrapper>
      </div>
    </Wrapper>
  );
}
