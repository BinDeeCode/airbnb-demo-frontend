import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import ExpCard from "./ExperiencesCard";

import arrow from "./arrowShape.svg";
import imgForest from "./expcardbg.png";

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
`;

export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11">
          <H2Title>Experiences</H2Title>
        </div>
        <div className="col-1">
          <a href="#">
            <NavSeeAll>
              <SeeAllButt>See all</SeeAllButt>
              <img src={arrow} />
            </NavSeeAll>
          </a>
        </div>
        <div className="col-3">
          <ExpCard
            price="$40"
            name="Forest therapy"
            reviews="44"
            img={imgForest}
          />
        </div>
        <div className="col-3">
          <ExpCard
            price="$69"
            name="Whale watching"
            reviews="46"
            img={imgForest}
          />
        </div>
        <div className="col-3">
          <ExpCard
            price="$100"
            name="Table Mountain Summit, Cable Car Down"
            reviews="60"
            img={imgForest}
          />
        </div>
        <div className="col-3">
          <ExpCard
            price="$35"
            name="Salsa Night"
            reviews="44"
            img={imgForest}
          />
        </div>
      </div>
    </div>
  );
}
