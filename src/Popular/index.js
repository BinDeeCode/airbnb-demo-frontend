import React from "react";
import styled from "styled-components";
import TitleSection from "../TitleSection";
import "../gridstyle.css";
import PopularCard from "./PopularCard.js";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";

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

export default function() {
  return (
    <div calssName="container">
      <div className="row">
        <div className="col-12">
          <TitleSection
            name="Popular reservations around the world"
            links="#"
          />

          <div className="container">
            <div className="row">
              {dataPopularCard.map(function(el) {
                return (
                  <div className="col-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
