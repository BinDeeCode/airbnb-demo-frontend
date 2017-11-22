import React from "react";
import styled from "styled-components";
import entire from "./entire.svg";
import privat from "./privat.svg";
import shared from "./shared.svg";
import { Background } from "../background";

const DropDown = styled.div`
  width: 326px;
  position: fixed;
  margin-left: 11px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Type = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 15px;
`;

const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  margin-top: 24px;
  margin-left: 16px;
`;

const PickerControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Apply = styled.button`
  padding: 22px;
  padding-left: 30px;
  padding-right: 30px;
  color: #008489;
  background-color: white;
  border: none;
  outline: none;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
`;

const Close = styled.button`
  padding: 22px;
  padding-left: 30px;
  padding-right: 30px;
  color: #636363;
  background-color: white;
  border: none;
  outline: none;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
`;

const Title = styled.p`
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 16px;
  color: #383838;

  line-height: 25px;
  margin: 0px;
  margin-left: 12px;
`;
const Subtitle = styled.p`
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 12px;
  color: #383838;
  width: 190px;
  line-height: 20px;
  margin: 0px;
  margin-left: 12px;
`;

const Img = styled.img`
  position: absolute;
  right: 16px;
  top: 8px;
`;

export default class RoomType extends React.Component {
  render() {
    return (
      <div>
        <DropDown>
          <Wrapper>
            <Type>
              <CheckBox />
              <div>
                <Title>Entire home</Title>
                <Subtitle>Have a place to yourself</Subtitle>
              </div>
              <Img src={entire} alt="" />
            </Type>
            <Type>
              <CheckBox />
              <div>
                <Title>Private room</Title>
                <Subtitle>
                  Have your own room and share some common spaces
                </Subtitle>
              </div>
              <Img src={privat} alt="" />
            </Type>
            <Type>
              <CheckBox />
              <div>
                <Title>Shared room</Title>
                <Subtitle>Stay in a shared space, like a common room</Subtitle>
              </div>
              <Img src={shared} alt="" />
            </Type>
          </Wrapper>
          <PickerControl>
            <Close onClick={this.props.onClose}>Close</Close>

            <Apply onClick={this.props.onApply}>Apply</Apply>
          </PickerControl>
        </DropDown>
        <Background />
      </div>
    );
  }
}
