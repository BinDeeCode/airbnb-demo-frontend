import React from "react";
import { Menu, Row, Item, Logo, Header, Input, Container, Img } from "./style";

import logo from "./logo.svg";
import arrow from "./arrow.svg";

export default function() {
  return (
    <Header>
      <Container className="container">
        <Row>
          <div className="col-xs-2 col-sm-1 col-1">
            <Logo to="/">
              <Img src={logo} />
              <img className="lg-hidden" src={arrow} />
            </Logo>
          </div>
          <div className="col-xs-10 col-sm-7 col-5">
            <Input type="text" placeholder="Try “Miami”" />
          </div>
          <div className="xs-hidden sm-hidden col-2" />
          <div className="xs-hidden sm-hidden col-4">
            <Menu>
              <Item href="#">
                <p> Become a host </p>
              </Item>
              <Item href="#">
                <p> Help </p>
              </Item>
              <Item href="#">
                <p> Sign Up </p>
              </Item>
              <Item href="#">
                <p> Log In </p>
              </Item>
            </Menu>
          </div>
        </Row>
      </Container>
    </Header>
  );
}
