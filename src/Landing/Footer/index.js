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
  LinkPosition,
  Logo,
  FlexImg,
  Title,
  Wrapper,
  RowWrapper,
  Privacy,
  Container,
  Select
} from "./styled";
const TextBlock = styled.div`padding-bottom: 48px;`;
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
                <LinkPosition>
                  <Link href="#">About us</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Careers</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Press</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Policies</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Help</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Diversity & Belonging</Link>
                </LinkPosition>
              </div>
            </div>
          </div>

          <div className="col-3 col-sm-3 xs-hidden">
            <TextBlock>
              <Title>Discover</Title>
              <div>
                <LinkPosition>
                  <Link href="#">Trust & Safety</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Travel Credit</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Gift Cards</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Airbnb Citizen</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Business Travel</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Guidebooks</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Airbnbmag</Link>
                </LinkPosition>
              </div>
            </TextBlock>
          </div>

          <div className="col-2 col-sm-2 xs-hidden">
            <div>
              <Title>Hosting</Title>
              <div>
                <LinkPosition>
                  <Link href="#">Why Host</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Hospitality</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Responsible Hosting</Link>
                </LinkPosition>
                <LinkPosition>
                  <Link href="#">Community Center</Link>
                </LinkPosition>
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
