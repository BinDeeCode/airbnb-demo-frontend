import React from "react";
import styled from "styled-components";
import plus from "./plus.svg";
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

const ContentWrapper = styled.div`
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

const Title = styled.p`
  margin: 0;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;

  color: #383838;
`;
const Subtitle = styled.p`
  margin-top: 4px;
  font-family: "CircularAir";
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;

  color: #383838;
  width: 200px;
`;

const Checkbox = styled.div`
  width: 64px;
  height: 40px;

  position: absolute;

  right: 16px;

  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Indicator = styled.div`
  width: 40px;
  height: 40px;
  right: 24px;
  position: absolute;
  bottom: -1px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  outline: none;
  position: relative;
  height: 32px;
  width: auto;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-family: "CircularAir", Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 14px;
  padding: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 12px;
  color: ${props => props.colorBut ? 'white' :  '#383838'}; 
  background-color: ${props => props.colorBut ?   '#008489' : 'white'};
  margin-left: 12px;
`;



const Img = styled.img``;

export default class RoomType extends React.Component {

  openFilter = () => {
    this.props.op == "instant" ? this.props.handleOpen("") : this.props.handleOpen("instant");
  }


  render() {
    return (



<div>
      <Button colorBut={this.props.isOpen} onClick={this.openFilter}>
          {this.props.label}
      </Button>

      {
  this.props.isOpen && 
  <div>
        <DropDown>
          <ContentWrapper>
            <Wrapper>
              <div>
                <Title>Instant Book</Title>
                <Subtitle>
                  Listings you can book without waiting for host approval.
                </Subtitle>
              </div>
              <Checkbox>
                <Indicator>
                  <Img src={plus} alt="" />
                </Indicator>
              </Checkbox>
            </Wrapper>
            <PickerControl>
              <Close onClick={this.props.onClose}>Close</Close>

              <Apply onClick={this.props.onApply}>Apply</Apply>
            </PickerControl>
          </ContentWrapper>
        </DropDown>
        <Background />
      </div>}
    </div>
    );
  }
}
