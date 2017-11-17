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
`;
const Div = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

const Row = styled.div`display: flex;`;

export default function() {
  return (
    <div>
      <List>
        <div className="row sm-hidden">
          <div className="col-6">
            <Card
              img={data[0].img}
              price={data[0].price}
              name={data[0].name}
              entre={data[0].entre}
              supershot={data[0].supershot}
            />
          </div>
          <div className="col-6">
            <Card
              img={data[1].img}
              price={data[1].price}
              name={data[1].name}
              entre={data[1].entre}
              supershot={data[1].supershot}
            />
          </div>
          <div className="col-6">
            <Card
              img={data[2].img}
              price={data[2].price}
              name={data[2].name}
              entre={data[2].entre}
              supershot={data[2].supershot}
            />
          </div>
          <div className="col-6">
            <Card
              img={data[3].img}
              price={data[3].price}
              name={data[3].name}
              entre={data[3].entre}
              supershot={data[3].supershot}
            />
          </div>
          <div className="col-6">
            <Card
              img={data[4].img}
              price={data[4].price}
              name={data[4].name}
              entre={data[4].entre}
              supershot={data[4].supershot}
            />
          </div>
          <div className="col-6">
            <Card
              img={data[5].img}
              price={data[5].price}
              name={data[5].name}
              entre={data[5].entre}
              supershot={data[5].supershot}
            />
          </div>
        </div>
        <div className="sm-hidden">
          <Footer />
        </div>
      </List>

      <div className="xs-hidden lg-hidden">
        <Row>
          <Div>
            <Card
              img={data[0].img}
              price={data[0].price}
              name={data[0].name}
              entre={data[0].entre}
              supershot={data[0].supershot}
            />
          </Div>
          <Div>
            <Card
              img={data[1].img}
              price={data[1].price}
              name={data[1].name}
              entre={data[1].entre}
              supershot={data[1].supershot}
            />
          </Div>
        </Row>
        <Row>
          <Div>
            <Card
              img={data[2].img}
              price={data[2].price}
              name={data[2].name}
              entre={data[2].entre}
              supershot={data[2].supershot}
            />
          </Div>
          <Div>
            <Card
              img={data[3].img}
              price={data[3].price}
              name={data[3].name}
              entre={data[3].entre}
              supershot={data[3].supershot}
            />
          </Div>
        </Row>
        <Row>
          <Div>
            <Card
              img={data[4].img}
              price={data[4].price}
              name={data[4].name}
              entre={data[4].entre}
              supershot={data[4].supershot}
            />
          </Div>
          <Div>
            <Card
              img={data[5].img}
              price={data[5].price}
              name={data[5].name}
              entre={data[5].entre}
              supershot={data[5].supershot}
            />
          </Div>
        </Row>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
