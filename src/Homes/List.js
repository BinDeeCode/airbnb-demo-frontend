import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Card from "./Card";
import data from "./data.js";

const List = styled.div`
  float: left;
  width: 636px;

  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 992px) {
    width: 100%;
  }
`;

export default function() {
  return (
    <List>
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <Card
            img={data[0].img}
            price={data[0].price}
            name={data[0].name}
            roomtype={data[0].roomtype}
            superhost={data[0].superhost}
          />
        </div>
        <div className="col-lg-6 col-sm-6">
          <Card
            img={data[1].img}
            price={data[1].price}
            name={data[1].name}
            roomtype={data[1].roomtype}
            superhost={data[1].superhost}
          />
        </div>
        <div className="col-lg-6 col-sm-6">
          <Card
            img={data[2].img}
            price={data[2].price}
            name={data[2].name}
            roomtype={data[2].roomtype}
            superhost={data[2].superhost}
          />
        </div>
        <div className="col-lg-6 col-sm-6">
          <Card
            img={data[3].img}
            price={data[3].price}
            name={data[3].name}
            roomtype={data[3].roomtype}
            superhost={data[3].superhost}
          />
        </div>
        <div className="col-lg-6 col-sm-6">
          <Card
            img={data[4].img}
            price={data[4].price}
            name={data[4].name}
            roomtype={data[4].roomtype}
            superhost={data[4].superhost}
          />
        </div>
        <div className="col-lg-6 col-sm-6 ">
          <Card
            img={data[5].img}
            price={data[5].price}
            name={data[5].name}
            roomtype={data[5].roomtype}
            superhost={data[5].superhost}
          />
        </div>
        <div className=" col-lg-12 col-sm-12">
          <Footer />
        </div>
      </div>
    </List>
  );
}
