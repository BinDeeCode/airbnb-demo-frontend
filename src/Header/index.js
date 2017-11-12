import React from "react";

import {
  Menu,
  Row,
  Links,
  Logo,
  Wrapper,
  Header,
  Input,
  Container,
  Img
} from "./style";

import logo from "./logo.svg";
import arrow from "./arrow.svg";

export default function() {
  return (
    <Header>
      <Container className="container">
        <Row className="rows">
          <div className="col-1 col-sm-1 col-xs-2">
            <Logo href="#">
              <Img src={logo} />
              <img className="lg-hidden" src={arrow} />
            </Logo>
          </div>
          <div className="col-5 col-sm-7 col-xs-10">
            <Input type="text" placeholder="Try “Miami”" />
          </div>
          <div className="col-2 sm-hidden xs-hidden" />
          <div className="col-4 sm-hidden xs-hidden">
            <Menu>
              <Links href="#">
                <p> Become a host </p>
              </Links>
              <Links href="#">
                <p> Help </p>
              </Links>
              <Links href="#">
                <p> Sign Up </p>
              </Links>
              <Links href="#">
                <p> Log In </p>
              </Links>
            </Menu>
          </div>
        </Row>
      </Container>
    </Header>
  );
}
