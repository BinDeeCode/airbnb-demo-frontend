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
        <div className="col-6 col-sm-6">
          <Card
            img={data[0].img}
            price={data[0].price}
            name={data[0].name}
            roomtype={data[0].roomtype}
            superhot={data[0].superhot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[1].img}
            price={data[1].price}
            name={data[1].name}
            roomtype={data[1].roomtype}
            superhot={data[1].superhot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[2].img}
            price={data[2].price}
            name={data[2].name}
            roomtype={data[2].roomtype}
            superhot={data[2].superhot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[3].img}
            price={data[3].price}
            name={data[3].name}
            roomtype={data[3].roomtype}
            superhot={data[3].superhot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[4].img}
            price={data[4].price}
            name={data[4].name}
            roomtype={data[4].roomtype}
            superhot={data[4].superhot}
          />
        </div>
        <div className="col-6 col-sm-6 ">
          <Card
            img={data[5].img}
            price={data[5].price}
            name={data[5].name}
            roomtype={data[5].roomtype}
            superhot={data[5].superhot}
          />
        </div>
        <div className=" col-12 col-sm-12">
          <Footer />
        </div>
      </div>
    </List>
  );
}
