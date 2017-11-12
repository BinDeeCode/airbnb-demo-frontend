import React from "react";
import styled from "styled-components";
import Cards from "./Card";
import img1 from "./expcardbg.png";
import img2 from "./cardBg1.png";
import img3 from "./cardBg2.png";
import img4 from "./cardBg3.png";
import arrow from "./arrowShape.svg";
import TitleSection from "../TitleSection";
import arrowAside from "../arrowAside.svg";

const cards = [
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
    reviews: 34,
    img: img2
  },
  {
    price: 38,
    name: "Salsa Night",
    reviews: 65,
    img: img3
  }
];

export const Button = styled.div`
  position: absolute;

  height: 40px;
  width: 40px;
  border-radius: 40px;
  top: 145px;
  right: 5px;
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
        <TitleSection name="Experiences" links="#" />
      </div>
      <div className="row rowscroll">
        {cards.map(function(el) {
          return (
            <div className="col-3 col-sm-4 col-xs-6">
              <Cards
                img={el.img}
                price={el.price}
                name={el.name}
                reviews={el.reviews}
              />
            </div>
          );
        })}
        <a href="#" className="sm-hidden xs-hidden">
          <Button />
        </a>
      </div>
    </div>
  );
}
