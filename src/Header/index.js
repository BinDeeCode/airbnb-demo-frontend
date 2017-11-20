import React from "react";
import { Menu, Row, Li, Logo, Header, Input, Container, Img } from "./style";

import logo from "./logo.svg";
import arrow from "./arrow.svg";

export default function() {
  return (
    <Header>
      <Container className="container">
        <Row>
          <div className="col-xs-2 col-sm-1 col-lg-1">
            <Logo to="/">
              <Img src={logo} />
              <img className="lg-hidden" src={arrow} />
            </Logo>
          </div>
          <div className="col-xs-10 col-sm-7 col-lg-5">
            <Input type="text" placeholder="Try “Miami”" />
          </div>
          <div className="xs-hidden sm-hidden col-lg-2" />
          <div className="xs-hidden sm-hidden col-lg-4">
            <Menu>
              <Li href="#">Become a host</Li>
              <Li href="#">Help</Li>
              <Li href="#">Sign Up</Li>
              <Li href="#">Log In</Li>
            </Menu>
          </div>
        </Row>
      </Container>
    </Header>
  );
}
