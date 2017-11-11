import React from "react";
import styled from "styled-components";
import TitleSection from "../TitleSection";
import "../gridstyle.css";
import PopularCard from "./PopularCard.js";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

import arrowAside from "../arrowAside.svg";

const dataPopularCard = [
  {
    cook: "Speakeasy",
    name: "Chumley’s",
    price: "60",
    img: img1
  },
  {
    cook: "Korean gastropub",
    name: "Hanjan",
    price: "50",
    img: img2
  },
  {
    cook: "German american",
    name: "Prime Meats",
    price: "55",
    img: img3
  },
  {
    cook: "Fine seafood",
    name: "Seaprice",
    price: "70",
    img: img4
  }
];

const Aside = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  bottom: 140px;
  left: calc(95% + 8px);
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
        <div className="col-12">
          <TitleSection name="Popular reservations around the world" />
        </div>
        <div className="container">
          <div className="row rowscroll">
            {dataPopularCard.map(function(el) {
              return (
                <div className="col-3 col-sm-4 col-xs-6">
                  <PopularCard
                    img={el.img}
                    cook={el.cook}
                    name={el.name}
                    price={el.price}
                  />
                </div>
              );
            })}
          </div>
          <div className="row">
            <a href="#" className="sm-hidden xs-hidden">
              <Aside />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
