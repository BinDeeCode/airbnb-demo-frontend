import React from "react";
import styled from "styled-components";

import "../gridstyle.css";

const Card = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  overflow: hidden;
  width: 310px;
  @media (max-width: 576px) {
    width: 144px;
    height: 118px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const P = styled.p`
  font-size: 17px;
  color: #383838;
  margin-left: 24px;
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  @media (max-width: 576px) {
    margin: 0px;
    margin-left: 20px;
    font-size: 12px;
  }
`;

const Img = styled.img`
  @media (max-width: 576px) {
    margin: 0px;
    padding: 0px;
    width: 144px;
    height: 78px;
  }
`;

export default function(props) {
  return (
    <div className="col-4 col-sm-5 col-xs-6">
      <Card href="#">
        <Img className="xs-hidden" src={props.img} alt="" />
        <Img className="lg-hidden sm-hidden" src={props.imgmob} alt="" />
        <P>{props.name}</P>
      </Card>
    </div>
  );
}
