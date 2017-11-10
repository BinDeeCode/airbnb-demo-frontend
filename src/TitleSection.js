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

const NavSeeAll = styled.div`
  margin-top: 57px;
  padding: 5px;
  padding-left: 5px;
  width: 100%;
  @media (min-width: 576px) and (max-width: 1000px) {
    padding-left: 60px;
  }
`;

export default function(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-sm-10">
          <H2Title>{props.name}</H2Title>
        </div>
        <div className="col-1 col-sm-2">
          <a href={props.links}>
            <NavSeeAll>
              <SeeAllButt>See all</SeeAllButt>
              <img src={arrow} />
            </NavSeeAll>
          </a>
        </div>
      </div>
    </div>
  );
}
