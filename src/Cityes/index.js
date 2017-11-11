import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import FutureCard from "./FutureCard.js";

import arrowAside from "../arrowAside.svg";

import TitleSectionNoAllSee from "../TitleSectionNoAllSee.js";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";

const dataFuture = [
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

const Aside = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  bottom: 121px;
  left: calc(89% + 45px);
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
    <div calssName="container">
      <div className="row">
        <a href="#" />
        <div className="col-12 col-sm-12 col-xs-12">
          <TitleSectionNoAllSee name="Featured destinations" links="#" />

          <div className="container">
            <div className="row rowscroll">
              {dataFuture.map(function(el) {
                return (
                  <div className="col-2 col-sm-3 col-xs-4">
                    <FutureCard img={el.img} city={el.city} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <a href="#" className="sm-hidden xs-hidden">
          <Aside> </Aside>
        </a>
      </div>
    </div>
  );
}
