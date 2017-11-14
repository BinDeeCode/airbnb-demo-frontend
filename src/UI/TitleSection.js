import React from "react";
import styled from "styled-components";
import arrow from "./arrowShape.svg";

const Name = styled.h2`
  font-family: "Circular Air Bold", Arial, Helvetica, sans-serif;
  margin-top: 50px;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
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
const Wrapper = styled.div`
width: 235px;
}
`;

export default function(props) {
  return (
    <Row className="col-12 col-sm-12 col-xs-12">
      <div className="col-9 col-sm-9 col-xs-9">
        <Name>{props.name}</Name>
      </div>
      <Wrapper>
        <a href={props.links}>
          <SeeAll>
            <Text>See&nbsp;all</Text>
            <img src={arrow} />
          </SeeAll>
        </a>
      </Wrapper>
    </Row>
  );
}
