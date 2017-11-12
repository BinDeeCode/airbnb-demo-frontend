import React from "react";
import styled from "styled-components";
import "./gridstyle.css";
import arrow from "./Experiences/arrowShape.svg";

const H2Title = styled.h2`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  margin-top: 50px;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
  padding-bottom: 2px;
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const Text = styled.div`
  color: #383838;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 14px;
  float: left;
  padding-right: 8px;
  margin-top: 1px;
`;

const SeeAll = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
  padding-right: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
}
`;

export default function(props) {
  return (
    <Row className="col-12 col-sm-12 col-xs-12">
      <div className="col-9 col-sm-9 col-xs-9">
        <H2Title>{props.name}</H2Title>
      </div>
      <div className="col-3 col-sm-3 col-xs-3">
        <a href={props.links}>
          <SeeAll>
            <Text>See all</Text>
            <img src={arrow} />
          </SeeAll>
        </a>
      </div>
    </Row>
  );
}
