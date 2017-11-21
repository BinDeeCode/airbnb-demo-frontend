import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./slider.css";
import price from "./price.svg";
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
const Background = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  margin-top: 24px;
  margin-left: 16px;
`;

const PickerControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
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
const Img = styled.img`
  position: absolute;
  bottom: 6px;
  left: 37px;
`;

const PriceRange = styled.p`
  font-family: "CircularAir";
  font-weight: 300;
  line-height: normal;
  font-size: 16px;
  margin: 0;
  color: #383838;
`;

const PriceRangePicker = styled.div`
  position: relative;
  width: 100%;
  padding-top: 98px;
`;

const NightlyPrice = styled.p`
  font-family: "CircularAir";
  font-weight: 300;
  line-height: normal;
  font-size: 12px;
  margin-top: 7px;
  color: #383838;
`;

export default class RoomType extends React.Component {
  render() {
    return (
      <div>
        <DropDown>
          <Wrapper>
            <PriceRange>$10 — $1000+</PriceRange>
            <NightlyPrice>The average nightly price is $75.</NightlyPrice>

            <PriceRangePicker>
              <Img src={price} alt="" />
              <Rheostat min={10} max={1000} values={[10, 1000]} />
            </PriceRangePicker>
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