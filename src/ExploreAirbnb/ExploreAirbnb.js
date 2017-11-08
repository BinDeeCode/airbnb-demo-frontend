import React from "react";
import "../gridstyle.css";
import "./ExploreAirbnb.css";
import card1 from "./img/cardback_1.png";
import card2 from "./img/cardback_2.png";
import card3 from "./img/cardback_3.png";

export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Explore Airbnb</h2>
        </div>
        <div className="col-4">
          <a href="#">
            <div className="card">
              <img src={card1} />
              <div className="cardText">Homes</div>
            </div>
          </a>
        </div>

        <div className="col-4">
          <a href="#">
            <div className="card">
              <img src={card2} />
              <div className="cardText">Experiences</div>
            </div>
          </a>
        </div>
        <div className="col-4">
          <a href="#">
            <div className="card">
              <img src={card3} />
              <div className="cardText">Restaurants</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
