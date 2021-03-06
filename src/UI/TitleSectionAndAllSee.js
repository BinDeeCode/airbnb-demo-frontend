import React from "react";
import styled from "styled-components";
import arrow from "./arrowShape.svg";
import { Link } from "react-router-dom";
const Name = styled.h2`
  font-family: "CircularAir";
  font-weight: bold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin-top: 50px;
  padding-bottom: 2px;
  @media (max-width: 576px) {
    font-size: 24px;
  }

  @media (max-width: 345px) {
    font-size: 20px;
  }
`;

const Text = styled.div`
  color: #383838;
  font-family: "Circular Air Book", Arial, Helvetica, sans-serif;
  font-size: 14px;
  float: left;
  padding-right: 8px;
  margin-top: 1px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const SeeAll = styled.a`
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
const Wrapper = styled(Link)`
width: 235px;
}
`;

export default function(props) {
  return (
    <Row className="col-lg-12 col-sm-12 col-xs-12">
      <div className="col-lg-9 col-sm-9 col-xs-9">
        <Name>{props.name}</Name>
      </div>
      <Wrapper to={props.link}>
        <SeeAll>
          <Text>See&nbsp;all</Text>
          <img src={arrow} />
        </SeeAll>
      </Wrapper>
    </Row>
  );
}
