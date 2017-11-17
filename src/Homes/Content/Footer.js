import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";
import location from "./location.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const Location = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 100%;
  bottom: 24px;
  right: 8px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`;
const Page = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #008489;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 16px;
`;

const Active = styled(Page)`
  background: #008489;
  color: white;
`;

const Next = styled(Page)`
  width: 31px;
  height: 31px;
  border: 1px solid #008489;
`;

const Information = styled(Navigation)`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
  margin-top: 15px;
`;

const Warning = styled(Information)`
  color: #636363;
  margin-top: 39px;
  padding-bottom: 88px;
`;

export default function() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <Navigation>
              <Active href="#">1</Active> <Page href="#">2</Page>
              <Page href="#">3</Page> <Page href="#">...</Page>
              <Page href="#">17</Page>
              <Next href="#">
                <img src={arrow} />
              </Next>
            </Navigation>
            <Information>1 – 18 of 300+ Rentals</Information>

            <Warning>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </Warning>
          </Wrapper>
        </div>
      </div>
      <div className="lg-hidden">
        <Location>
          <img src={location} />
        </Location>
      </div>
    </div>
  );
}
