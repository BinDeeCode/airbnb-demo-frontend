import React from "react";
import "../gridstyle.css";
import "./ExploreAirbnb.css";
import card1 from "./cardback_1.png";
import card2 from "./cardback_2.png";
import card3 from "./cardback_3.png";
import mobCard1 from "./mobCard1.png";
import mobCard2 from "./mobCard2.png";
import styled from "styled-components";

const H2Title = styled.h2`
  margin: 0;
  margin-top: 48px;
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
`;
export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12">
          <H2Title>Explore Airbnb</H2Title>
        </div>
        <div className="wrapper col-sm-12">
          <div className="col-4 col-sm-5 col-xs-6">
            <a href="#">
              <div className="card">
                <img src={card1} />
                <div className="cardText">Homes</div>
              </div>
            </a>
          </div>

          <div className="col-4 col-sm-5 col-xs-6">
            <a href="#">
              <div className="card">
                <img src={card2} />
                <div className="image-card-1" />
                <div className="cardText">Experiences</div>
              </div>
            </a>
          </div>
          <div className="col-4 col-sm-5 col-xs-6">
            <a href="#">
              <div className="card">
                <img src={card3} />
                <div className="cardText">Restaurants</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
