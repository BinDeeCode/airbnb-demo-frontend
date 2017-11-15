import React from "react";
import {
  Menu,
  Row,
  Paragraph,
  Logo,
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
            <Logo to="/">
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
              <Paragraph href="#">
                <p> Become a host </p>
              </Paragraph>
              <Paragraph href="#">
                <p> Help </p>
              </Paragraph>
              <Paragraph href="#">
                <p> Sign Up </p>
              </Paragraph>
              <Paragraph href="#">
                <p> Log In </p>
              </Paragraph>
            </Menu>
          </div>
        </Row>
      </Container>
    </Header>
  );
}
