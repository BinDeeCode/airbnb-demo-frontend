import React from "react";
import { Background } from "../background";
import styled from "styled-components";
import arrow from "./arrow.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPicker } from "react-dates";

import close from "../GuestsDropDown/close.svg";
import "./daypicker.css";
const Arrow = styled.img`
  padding-left: 16px;
  padding-right: 16px;
`;
const Img = styled.img`
  margin-left: 12px;
  margin-top: 4px;
`;

const PickerControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: "CircularAir";
  font-weight: normal;
  font-size: 16px;
`;

const CheckIn = styled.div`
  color: #0f7276;
  border-bottom: 1px solid #0f7276;
`;

const Reset = styled.div`
  color: #0f7276;
  margin-right: 20px;
`;

const DropDownCard = styled.div`
  position: absolute;
  left: 8px;
  @media (min-width: 576px) and (max-width: 992px) {
    left: 24px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 131px;
  z-index: 5;
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

const DayPickerWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  height: 131px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`;
const Control = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  height: 48px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "CircularAir";
  font-weight: normal;
  font-size: 14px;
  color: #383838;
`;

const CalendarControl = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-family: "CircularAir";
  font-weight: 300;
  font-size: 18px;

  color: #636363;
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

export default class CalendarDropDown extends React.Component {



  openFilter = () => {
   this.props.op == "dates" ?  this.props.handleOpen("") :  this.props.handleOpen("dates")  ;
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
  <DropDownCard>
          <div className="sm-hidden xs-hidden">
            <DayPickerWrapper>
              <DayPicker hideKeyboardShortcutsPanel />

              <PickerControl>
                <Close onClick={this.props.onClose}>Close</Close>

                <Apply onClick={this.props.onApply}>Apply</Apply>
              </PickerControl>
            </DayPickerWrapper>
          </div>
          <div className="xs-hidden lg-hidden">
            <DayPickerWrapper>
              <DayPicker hideKeyboardShortcutsPanel numberOfMonths={1} />

              <PickerControl>
                <Close onClick={this.props.onClose}>Close</Close>

                <Apply onClick={this.props.onApply}>Apply</Apply>
              </PickerControl>
            </DayPickerWrapper>
          </div>
          <div className="sm-hidden lg-hidden">
            <Wrapper>
              <Header>
                <Control>
                  <Img onClick={this.props.onClose} src={close} alt="" />
                  <div>When</div>
                  <Reset>Reset</Reset>
                </Control>
                <CalendarControl>
                  <CheckIn>Check-in</CheckIn>
                  <Arrow src={arrow} />
                  <div>Check-out</div>
                </CalendarControl>
              </Header>

              <DayPicker
                verticalHeight="100%"
                orientation="verticalScrollable"
                hideKeyboardShortcutsPanel
                numberOfMonths={6}
              />
            </Wrapper>
          </div>
        </DropDownCard>
        <Background />
        </div>
}
    
        
      </div>
    );
  }
}
