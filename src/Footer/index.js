import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import logo from "./logo.svg";
import inst from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

import { dataHosting, dataAirbnb, dataDiscover } from "./data";
import {
  LinksText,
  DivLogoText,
  ImgSoc,
  FlexDiv,
  LinksDiv,
  ImgLogo,
  FlexImg,
  H3,
  Wrapper,
  RowWrapper,
  Privacy,
  ContainerFooter,
  InputList
} from "./styled";

export default function() {
  return (
    <Wrapper>
      <ContainerFooter className="container">
        <div className="row rownoscroll">
          <div className="col-3 col-sm-4 xs-hidden">
            <InputList>
              <option>English</option>
              <option>Русский</option>
              <option>Украинский</option>
              <option>China</option>
            </InputList>
            <InputList>
              <option>United States dollar</option>
              <option>Рубли</option>
              <option>Гривны</option>
              <option>Юани</option>
            </InputList>
          </div>
          <div className="col-xs-6 sm-hidden lg-hidden">
            <InputList>
              <option>English</option>
              <option>Русский</option>
              <option>Украинский</option>
              <option>China</option>
            </InputList>
          </div>
          <div className="col-xs-6 sm-hidden lg-hidden">
            <InputList>
              <option>United States dollar</option>
              <option>Рубли</option>
              <option>Гривны</option>
              <option>Юани</option>
            </InputList>
          </div>
          <div className="col-1 sm-hidden xs-hidden" />
          <div className="col-3 col-sm-3 xs-hidden">
            <div>
              <H3>Airbnb</H3>
              <div>
                {dataAirbnb.map(function(el) {
                  return (
                    <LinksDiv>
                      <LinksText className="LinksTextCost" href={el.links}>
                        {el.text}
                      </LinksText>
                    </LinksDiv>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-3 col-sm-3 xs-hidden">
            <div>
              <H3>Discover</H3>
              <div>
                {dataDiscover.map(function(el) {
                  return (
                    <LinksDiv>
                      <LinksText className="LinksTextCost" href={el.links}>
                        {el.text}
                      </LinksText>
                    </LinksDiv>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-2 col-sm-2 xs-hidden">
            <div>
              <H3>Discover</H3>
              <div>
                {dataHosting.map(function(el) {
                  return (
                    <LinksDiv>
                      <LinksText className="LinksTextCost" href={el.links}>
                        {el.text}
                      </LinksText>
                    </LinksDiv>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ContainerFooter>

      <div className="container">
        <RowWrapper className="row">
          <FlexDiv className="col-8 col-sm-3 col-xs-12">
            <a href="#">
              <ImgLogo src={logo} />
            </a>
            <DivLogoText>© Airbnb Inc.</DivLogoText>
          </FlexDiv>
          <FlexDiv className="col-4 col-sm-9 col-xs-12">
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
          </FlexDiv>
        </RowWrapper>
      </div>
    </Wrapper>
  );
}
