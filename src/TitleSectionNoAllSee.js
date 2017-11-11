import React from "react";
import styled from "styled-components";
import "./gridstyle.css";
import arrow from "./Experiences/arrowShape.svg";

const H2Title = styled.h2`
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
  margin-top: 50px;
  font-siz: e 32px;
  line-height: 34px;
  color: #383838;
  padding-bottom: 2px;
`;

const SeeAllButt = styled.div`
  color: #383838;
  ont-family: Circular Air Book, Arial, Helvetica, sans-serif;
  font-size: 14px;
  float: left;
  padding-right: 8px;
  margin-top: 1px;
`;

const NavSeeAll = styled.nav`
  margin-top: 57px;
  padding: 5px;
  margin-left: 5px;
  float: right;
`;

export default function(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <H2Title>{props.name}</H2Title>
        </div>
      </div>
    </div>
  );
}
