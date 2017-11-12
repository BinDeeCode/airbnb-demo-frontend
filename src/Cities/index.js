import React from "react";
import styled from "styled-components";
import Card from "./Card";

import arrowAside from "../arrowAside.svg";

import TitleSectionNoAllSee from "../TitleSectionNoAllSee";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";

const cities = [
  {
    city: "Chumley’s",
    img: img1
  },
  {
    city: "Hanjan",
    img: img2
  },
  {
    city: "Prime Meats",
    img: img3
  },
  {
    city: "Seaprice",
    img: img4
  },
  {
    city: "Prime Meats",
    img: img5
  },
  {
    city: "Prime Meats",
    img: img6
  }
];

const Button = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  bottom: 121px;
  right: 3px;
  background-color: #ffffff;
  background-image: url(${arrowAside});
  background-repeat: no-repeat;
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
`;

export default function() {
  return (
    <div className="container">
      <div className="row">
        <TitleSectionNoAllSee name="Featured destinations" />
      </div>

      <div className="row rowscroll">
        {cities.map(function(el) {
          return (
            <div className="col-2 col-sm-3 col-xs-4">
              <Card img={el.img} city={el.city} />
            </div>
          );
        })}
      </div>

      <div className="row">
        <a href="#" className="sm-hidden xs-hidden">
          <Button />
        </a>
      </div>
    </div>
  );
}
