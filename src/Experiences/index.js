import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import Cards from "./Card.js";

import img1 from "./expcardbg.png";
import img2 from "./cardBg1.png";
import img3 from "./cardBg2.png";
import img4 from "./cardBg3.png";
import arrow from "./arrowShape.svg";
import TitleSection from "../TitleSection.js";

import arrowAside from "../arrowAside.svg";
import { Wrapper } from "../Footer/styled";
import { Scroll } from "../Scroll";

const H2Title = styled.h2`
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
  margin-top: 50px;
  font-siz: e 32px;
  line-height: 34px;
  color: #383838;
  padding-bottom: 2px;
`;

const dataCard = [
  {
    price: 29,
    name: "Forest therapy",
    reviews: 44,
    img: img1
  },
  {
    price: 69,
    name: "Whale watching",
    reviews: 46,
    img: img4
  },
  {
    price: 72,
    name: "Table Mountain Summit",
    reviews: "34",
    img: img2
  },
  {
    price: 38,
    name: "Salsa Night",
    reviews: 65,
    img: img3
  }
];

export default function() {
  return (
    <div className="container">
      <div className="row">
        <TitleSection name="Experiences" links="#" />
        <Scroll>
          <div className="container">
            <div className="row rowscroll">
              {dataCard.map(function(el) {
                return (
                  <div className="col-3 col-sm-4">
                    <Cards
                      img={el.img}
                      price={el.price}
                      name={el.name}
                      reviews={el.reviews}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  );
}
