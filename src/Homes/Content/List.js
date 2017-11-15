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
            img={data[0].img}
            price={data[0].price}
            name={data[0].name}
            entre={data[0].entre}
            supershot={data[0].supershot}
          />
        </div>
        <div className="col-sm-6 col-6 ">
          <Card
            img={data[1].img}
            price={data[1].price}
            name={data[1].name}
            entre={data[1].entre}
            supershot={data[1].supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[2].img}
            price={data[2].price}
            name={data[2].name}
            entre={data[2].entre}
            supershot={data[2].supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[3].img}
            price={data[3].price}
            name={data[3].name}
            entre={data[3].entre}
            supershot={data[3].supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[4].img}
            price={data[4].price}
            name={data[4].name}
            entre={data[4].entre}
            supershot={data[4].supershot}
          />
        </div>
        <div className="col-6 col-sm-6">
          <Card
            img={data[5].img}
            price={data[5].price}
            name={data[5].name}
            entre={data[5].entre}
            supershot={data[5].supershot}
          />
        </div>
      </div>
      <Footer />
    </List>
  );
}
