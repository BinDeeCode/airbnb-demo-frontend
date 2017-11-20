import React from "react";
import styled from "styled-components";

import CalendarDropDown from "./CalendarDropDown";
import Guests from "./GuestsDropDown";

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
  color: ${props => (props.isOpen ? "white" : "#383838")};
  background-color: ${props => (props.isOpen ? "#008489" : "white")};
  margin-left: 12px;
`;

export default class DropDown extends React.Component {
  state = { isOpen: false, openedFilter: "null" };

  toggleOpen = e => {
    !this.state.isOpen
      ? this.setState({ isOpen: true })
      : this.setState({ isOpen: false });
  };

  onApply = e => {
    this.setState({ isOpen: false });
    alert("Apply");
  };

  render() {
    return (
      <div>
        <Button isOpen={this.state.isOpen} onClick={this.toggleOpen}>
          {this.state.isOpen && this.props.label == "Dates"
            ? "Check in — Check out"
            : this.props.label}
        </Button>
        {this.state.isOpen &&
          this.props.label == "Dates" && (
            <CalendarDropDown
              onApply={this.onApply}
              onClose={this.toggleOpen}
            />
          )}
        {this.state.isOpen &&
          this.props.label == "Guests" && (
            <Guests onApply={this.onApply} onClose={this.toggleOpen} />
          )}
      </div>
    );
  }
}
