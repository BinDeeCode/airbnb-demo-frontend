import React from "react";
import "../gridstyle.css";

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
} from "./style.js";

import logo from "./logo.svg";
import arrow from "./arrowDown.svg";

const data = [
  {
    item: "Become a host",
    link: "#"
  },
  {
    item: "Help",
    link: "#"
  },
  {
    item: "Sign Up",
    link: "#"
  },
  {
    item: "Log In",
    link: "#"
  }
];

export default function() {
  return (
    <Header>
      <Container className="container">
        <Row className="rows">
          <div className="col-1 col-sm-1 col-xs-3">
            <Logo href="#">
              <Img src={logo} />
              <img className="lg-hidden" src={arrow} />
            </Logo>
          </div>
          <div className="col-5 col-sm-7 col-xs-9">
            <Input type="text" placeholder="Try “Miami”" />
          </div>
          <div className="col-2 sm-hidden xs-hidden" />
          <div className="col-4 sm-hidden xs-hidden">
            <Menu>
              {data.map(function(el) {
                return (
                  <Links href="#">
                    <p> {el.item} </p>
                  </Links>
                );
              })}
            </Menu>
          </div>
        </Row>
      </Container>
    </Header>
  );
}
