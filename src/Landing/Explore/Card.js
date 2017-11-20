import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = styled(Link)`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  overflow: hidden;
  width: 144px;
  height: 118px;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (min-width: 576px) {
    width: 310px;
    height: 72px;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const P = styled.p`
  font-family: Circular Air;
  font-weight: bold;
  line-height: normal;
  color: #383838;
  margin: 0px;
  margin-left: 20px;
  font-size: 12px;
  @media (min-width: 576px) {
    margin-left: 24px;
    font-size: 17px;
  }
`;

const Img = styled.img`
  margin: 0px;
  padding: 0px;
  width: 144px;
  height: 78px;
  @media (min-width: 576px) {
    width: 96px;
    height: 72px;
  }
`;

export default function(props) {
  return (
    <div className="col-xs-6 col-sm-5 col-lg-4">
      <Card to={props.link}>
        <Img className="xs-hidden" src={props.img} alt="" />
        <Img className="lg-hidden sm-hidden" src={props.imgmob} alt="" />
        <P>{props.name}</P>
      </Card>
    </div>
  );
}
