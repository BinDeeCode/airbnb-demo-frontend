import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import inst from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

import {
  Link,
  Inc,
  ImgSoc,
  Block,
  LinkWrapper,
  Logo,
  FlexImg,
  Title,
  Wrapper,
  RowWrapper,
  Privacy,
  Container,
  Select
} from "./styled";

export default function() {
  return (
    <Wrapper>
      <Container className="container">
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
                <LinkWrapper>
                  <Link href="#">About us</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Careers</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Press</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Policies</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Help</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Diversity & Belonging</Link>
                </LinkWrapper>
              </div>
            </div>
          </div>

          <div className="col-3 col-sm-3 xs-hidden">
            <div>
              <Title>Discover</Title>
              <div>
                <LinkWrapper>
                  <Link href="#">Trust & Safety</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Travel Credit</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Gift Cards</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Airbnb Citizen</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Business Travel</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Guidebooks</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Airbnbmag</Link>
                </LinkWrapper>
              </div>
            </div>
          </div>

          <div className="col-2 col-sm-2 xs-hidden">
            <div>
              <Title>Hosting</Title>
              <div>
                <LinkWrapper>
                  <Link href="#">Why Host</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Hospitality</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Responsible Hosting</Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link href="#">Community Center</Link>
                </LinkWrapper>
              </div>
            </div>
          </div>
        </div>
      </Container>

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
