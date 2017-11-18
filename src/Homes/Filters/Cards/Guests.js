import React from "react";
import styled from "styled-components";
import plus from "./plus.svg";
import minus from "./minus.svg";
import close from "./close.svg";

const Subtitle = styled.div`
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #383838;
  margin-top: 7px;
`;

const Title = styled.h3`
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: 10px;
  font-size: 20px;

  color: #383838;
`;

const HeaderXs = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "CircularAir";
  font-weight: normal;
  font-size: 14px;
  color: #383838;
`;

const Close = styled.div`
  margin-left: 12px;
  margin-top: 4px;
`;

const Reset = styled.div`
  color: #0f7276;
  margin-right: 10px;
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  margin-top: 23px;
`;
const Input = styled.div`
  position: absolute;
  display: flex;
  right: 15px;
  align-items: center;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: 200;
  font-size: 18px;
  @media (max-width: 576px) {
    right: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 28px;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #383838;
  @media (max-width: 576px) {
    margin-left: 12px;
  }
`;

const Background = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  z-index: -1;
`;

const GuestsCard = styled.div`
  z-index: 1;
  width: 326px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-left: 83px;
  position: relative;
  @media (max-width: 576px) {
    position: fixed;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 48px;
    height: 100%;
  }
`;

const Save = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px -1px 0px #d5d5d5;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const ButtonSave = styled.button`
  width: 100%;
  height: 100%;
  background: #ff5a5f;
  border-radius: 4px;
  color: white;
  font-family: "CircularAir";
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border: 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropDownCard = styled.div`
  position: absolute;
  left: 6px;
  @media (min-width: 576px) and (max-width: 992px) {
    left: 22px;
  }
`;

const ActionCancel = styled.div`
  padding: 25px;
  padding-left: 35px;
  padding-right: 35px;
  color: #636363;
`;

const ActionApply = styled.div`
  padding: 25px;
  padding-left: 35px;
  padding-right: 35px;
  color: #008489;
`;
const Count = styled.div`
  padding-left: 19px;
  padding-right: 19px;
`;
const Plus = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 132, 137, 0.5);
  box-sizing: border-box;
  border-radius: 22px;
`;
export default function() {
  return (
    <div>
      <DropDownCard>
        <GuestsCard>
          <div>
            <Row>
              <Title>Adults</Title>
              <Input>
                <a href="#">
                  <Minus>
                    <img src={minus} alt="" />
                  </Minus>
                </a>
                <Count>0</Count>
                <a href="#">
                  <Plus>
                    <img src={plus} alt="" />
                  </Plus>
                </a>
              </Input>
            </Row>
            <Row>
              <Item>
                <Title>Children</Title>
                <Subtitle>Ages 2 — 12</Subtitle>
              </Item>
              <Input>
                <a href="#">
                  <Minus>
                    <img src={minus} alt="" />
                  </Minus>
                </a>
                <Count>0</Count>
                <a href="#">
                  <Plus>
                    <img src={plus} alt="" />
                  </Plus>
                </a>
              </Input>
            </Row>
            <Row>
              <Item>
                <Title>Infants</Title>
                <Subtitle>Under 2</Subtitle>
              </Item>
              <Input>
                <a href="#">
                  <Minus>
                    <img src={minus} alt="" />
                  </Minus>
                </a>
                <Count>0</Count>
                <a href="#">
                  <Plus>
                    <img src={plus} alt="" />
                  </Plus>
                </a>
              </Input>
            </Row>
            <div className="xs-hidden">
              <Action>
                <a href="#">
                  <ActionCancel>Cancel</ActionCancel>
                </a>
                <a href="#">
                  <ActionApply>Apply</ActionApply>
                </a>
              </Action>
            </div>
            <div className="lg-hidden sm-hidden">
              <HeaderXs>
                <Close>
                  <img src={close} alt="" />
                </Close>
                <div>Guest</div>
                <Reset>Reset</Reset>
              </HeaderXs>
            </div>
            <div className="lg-hidden sm-hidden">
              <Save>
                <ButtonSave>Save</ButtonSave>
              </Save>
            </div>
          </div>
        </GuestsCard>
      </DropDownCard>
      <Background />
    </div>
  );
}
