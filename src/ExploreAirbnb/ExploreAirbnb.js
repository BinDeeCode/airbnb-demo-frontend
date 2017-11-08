import React from "react";
import "../gridstyle.css";
import "./ExploreAirbnb.css";
import card1 from "./img/cardback_1.png";
import card2 from "./img/cardback_2.png";
import card3 from "./img/cardback_3.png";
import styled from "styled-components";

const H2Title = styled.h2`
  margin: 0;
  margin-top: 48px;
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
`;

const card = [
  {
    img: card1,
    name: 'Homes',
  },
  {
    img: card2,
    name: 'Experiences',
  },
  {
    img: card3,
    name: 'Restaurants',
  },
]

export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <H2Title>Explore Airbnb</H2Title>
        </div>
        {card.map(function(el) {
          return (
            <div className="col-4">
                <a href="#">
                  <div className="card">
                    <img src={el.img} />
                    <div className="cardText">{el.name}</div>
                  </div>
                </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}
