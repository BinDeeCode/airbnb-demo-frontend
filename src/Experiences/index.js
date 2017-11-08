import React from "react";
import styled from "styled-components";
import "../gridstyle.css";
import ExpCard from "./ExperiencesCard.js";

import arrow from "./arrowShape.svg";
import imgForest from "./img/expcardbg.png";

const H2Title = styled.h2`
  font-family: Circular Air Bold, Arial, Helvetica, sans-serif;
  margin-top: 50px;
  font-siz: e 32px;
  line-height: 34px;
  color: #383838;
  padding-bottom: 2px;
`;

const SeeAllButt = styled.div`
  color: #383838;
  ont-family: Circular Air Book, Arial, Helvetica, sans-serif;
  font-size: 14px;
  float: left;
  padding-right: 8px;
  margin-top: 1px;
`;

const NavSeeAll = styled.nav`
  margin-top: 57px;
  padding: 5px;
`;

const contentData = [
  {
    img: imgForest,
    price: '$5',
    name: 'blabla',
    reviews: 'xyew tachku',
  },
  {
    img: imgForest,
    price: '$50',
    name: 'warn!',
    reviews: 'obosratcsya',
  },
]

export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11">
          <H2Title>Experiences</H2Title>
        </div>
        <div className="col-1">
          <a href="#">
            <NavSeeAll>
              <SeeAllButt>See all</SeeAllButt>
              <img src={arrow} />
            </NavSeeAll>
          </a>
        </div>
        {contentData.map(function(el) {
          return (
            <div className="col-3">
              <ExpCard
                price={el.price}
                name={el.name}
                reviews={el.reviews}
                img={el.img}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}
