import React from "react";
import styled from "styled-components";
import stars from "../../UI/star.svg";
import arrow from "./arrowDown.svg";
import lamp from "./lamp.png";
import flag from "./flag.svg";

const Sticker = styled.div`
  margin-top: 24px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  padding: 24px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Price = styled.p`
  margin: 0;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  font-size: 24px;
  color: #383838;
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-left: 4px;
  color: #636363;
`;

const Raiting = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding-bottom: 24px;
`;

const Count = styled.p`
  margin: 0;
  margin-top: 3px;
  margin-left: 8px;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  color: #383838;
`;

const Dates = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
`;
const Checkin = styled.div`
  width: 50%;
`;

const Title = styled.p`
  margin: 0px;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: 12px;
  font-size: 12px;

  color: #383838;
`;
const Message = styled.p`
  margin-top: 11px;
  width: 100%;
  text-align: center;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  color: #383838;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding-bottom: 24px;
`;
const Input = styled.input`
  margin-top: 8px;
  background: #ffffff;
  height: 40px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  font-family: "CircularAir";
  font-weight: normal;
  width: calc(100% - 12px);
  color: #636363;
  font-size: 14px;
  padding-left: 12px;
  outline: none;
`;
const Guests = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const Select = styled.select`
  margin-top: 8px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  outline: none;
  height: 40px;

  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  color: #636363;
  padding-left: 12px;
  border-radius: 0px;
  box-decoration-break: none;
  appearance: none;
  :-ms-expand {
    display: none;
  }
`;

const Button = styled.button`
  margin-top: 24px;
  border: none;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
  height: 45px;
  background: #ff5a5f;
  border-radius: 4px;
  outline: none;
  width: 100%;
`;

const BeenViewed = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const TitleBeenViewed = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: 14px;
  font-size: 14px;
  margin: 0px;
  color: #383838;
`;

const SubTitleBeenViewed = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  width: 206px;
  margin: 0px;
  margin-top: 4px;
  color: #383838;
`;

const Report = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReportWrapper = styled.div`
  display: flex;
`;

const ReportTitle = styled.p`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  padding-left: 8px;
  color: #383838;
`;

export default function() {
  return (
    <div>
      <Sticker>
        <Wrapper>
          <PriceWrapper>
            <Price>$41</Price>
            <Subtitle>per night</Subtitle>
          </PriceWrapper>
          <Raiting>
            <img src={stars} alt="" />
            <Count>111</Count>
          </Raiting>
          <Dates>
            <Checkin>
              <Title>Check In</Title>
              <Input type="text" placeholder="mm/dd/yyyy”" />
            </Checkin>
            <Checkin>
              <Title>Check Out</Title>
              <Input type="text" placeholder="mm/dd/yyyy”" />
            </Checkin>
          </Dates>
          <Guests>
            <Title>Guests</Title>
            <Select>
              <option>1 guest</option>
            </Select>
          </Guests>
          <Button>Request to Book</Button>
          <Message>You won’t be charged yet</Message>
          <BeenViewed>
            <div>
              <TitleBeenViewed>This home is on people’s minds.</TitleBeenViewed>
              <SubTitleBeenViewed>
                It’s been viewed 500+ times in the past week.
              </SubTitleBeenViewed>
            </div>
            <img src={lamp} alt="" />
          </BeenViewed>
        </Wrapper>
      </Sticker>
      <Report>
        <ReportWrapper>
          <img src={flag} alt="" />
          <ReportTitle>Report this listing</ReportTitle>
        </ReportWrapper>
      </Report>
    </div>
  );
}
