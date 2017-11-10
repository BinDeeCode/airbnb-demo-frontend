import React from "react";
import styled from "styled-components";
import TitleSection from "../TitleSection";
import "../gridstyle.css";
import HomesCard from "./HomesCard.js";
import imgCard2 from "./homesCard2.png";
import imgCard1 from "./homesCard1.png";
import imgCard3 from "./homesCard3.png";
import arrowAside from "../arrowAside.svg";

const dataHomesCard = [
  {
    img: imgCard1,
    price: "82",
    name: "La Salentina, see, nature & relax",
    entre: "Entire house  ·  9 beds",
    supershot: "97 · Superhost "
  },
  {
    img: imgCard3,
    price: "90",
    name: "Your private 3 bedr. riad and exclusi…",
    entre: "Entire house  ·  5 beds",
    supershot: "161 · Superhost"
  },
  {
    img: imgCard2,
    price: "200",
    name: "Dreamy Tropical Tree House",
    entre: "Entire treehouse  ·  1 bed",
    supershot: "364 · Superhost"
  }
];

export default function() {
  return (
    <div calssName="container">
      <div className="row">
        <div className="col-12">
          <TitleSection name="Homes" links="#" />

          <div className="container">
            <div className="row">
              {dataHomesCard.map(function(el) {
                return (
                  <div className="col-4">
                    <HomesCard
                      img={el.img}
                      price={el.price}
                      name={el.name}
                      entre={el.entre}
                      supershot={el.supershot}
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
