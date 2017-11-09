import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import "./style.css";
import logo from "./img/Shape.svg";
import inst from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";

import { dataHosting, dataAirbnb, dataDiscover } from "./data.js";
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
  ContainerFooter,
  InputList
} from "./styled.js";

export default function() {
  return (
    <Wrapper>
      <ContainerFooter className="container">
        <div className="row">
          <div className="col-3">
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
          <div className="col-1" />
          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-2">
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
        <div className="row">
          <FlexDiv className="col-8">
            <a href="#">
              <ImgLogo src={logo} />
            </a>
            <DivLogoText>© Airbnb Inc.</DivLogoText>
          </FlexDiv>
          <FlexDiv className="col-4">
            <a href="#">
              <div>Terms</div>
            </a>
            <a href="#">
              <DivLogoText>Privacy</DivLogoText>
            </a>
            <a href="#">
              <DivLogoText>Site map</DivLogoText>
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
        </div>
      </div>
    </Wrapper>
  );
}
