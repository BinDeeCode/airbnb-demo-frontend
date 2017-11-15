import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Card from "./Card";
import data from "./data.js";

const List = styled.div`
  float: left;
  width: 636px;
  @media (min-width: 576px) and (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default function() {
  return (
    <List>
      <div className="row">
        <div className="col-sm-6 col-6 ">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
        <div className="col-sm-6 col-6 ">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data.img}
            price={data.price}
            name={data.name}
            entre={data.entre}
            supershot={data.supershot}
          />
        </div>
      </div>
      <Footer />
    </List>
  );
}
