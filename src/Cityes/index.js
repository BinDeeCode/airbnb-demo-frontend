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

const RelWrap = styled.div`position: relative;`;
const AsideBut = styled.aside`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  top: 212px;
  left: 1465px;
  background: #ffffff;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
`;

export default function() {
  return (
    <div calssName="container">
      <RelWrap className="row">
        <a href="#">
          <AsideBut>
            <img src={arrowAside} alt="" />
          </AsideBut>{" "}
        </a>
        <div className="col-12">
          <TitleSectionNoAllSee name="Featured destinations" links="#" />

          <div className="container">
            <div className="row">
              {dataFuture.map(function(el) {
                return (
                  <div className="col-2">
                    <FutureCard img={el.img} city={el.city} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RelWrap>
    </div>
  );
}
