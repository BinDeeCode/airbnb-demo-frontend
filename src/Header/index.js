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
        <Row className="row">
          <div className="col-1">
            <a href="#">
              <Img src={logo} />{" "}
            </a>
          </div>
          <div className="col-5">
            <Input type="text" placeholder="Try “Miami”" />
          </div>
          <div className="col-2" />
          <div className="col-4">
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
