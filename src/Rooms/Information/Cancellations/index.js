import React from "react";
import styled from "styled-components";
import guard from "./guard.svg";

const Cancellations = styled.div`
  font-size: 16px;
  color: #383838;
  padding-bottom: 23px;
  border-bottom: 1px solid #eaebf0;
  padding-top: 23px;
  font-family: "CircularAir";
  font-weight: 300;
`;

const Title = styled.h3`
  font-family: "CircularAir";
  font-weight: normal;
  color: #383838;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: none;
`;

const SecondTitle = styled.h3`
  font-weight: normal;
  font-size: 16px;
  color: #383838;
  margin-bottom: 4px;
`;

const Paragraph = styled.p`
  color: #383838;
  font-family: "CircularAir";
  font-weight: 300;
  margin-bottom: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThirdTitle = styled.p`
  color: #383838;
  font-family: "CircularAir";
  font-weight: 300;
  margin-bottom: 16px;
`;

const Divider = styled.div`
  background-color: #727272;
  mix-blend-mode: normal;
  opacity: 0.2;
  width: 65px;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #0f7276;
  display: inline;
  font-family: "CircularAir";
  font-weight: 300;
`;

export default props => (
  <Cancellations>
    <Title>Cancellations</Title>
    <Wrapper>
      <div>
        <SecondTitle>Free cancellation</SecondTitle>
        <Paragraph>
          Cancel within 48 hours of booking to get a full refund.
        </Paragraph>
      </div>
      <img src={guard} />
    </Wrapper>
    <Divider />
    <ThirdTitle>Flexible</ThirdTitle>
    <Paragraph>
      Cancel up to 24 hours before check in and get a full refund (minus service
      fees). Cancel within 24 hours of your trip and the firs..
      <Link href="#"> Read more</Link>
    </Paragraph>
  </Cancellations>
);
