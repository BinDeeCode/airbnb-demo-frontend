import React from "react";
import styled from "styled-components";

import Dates from "./DatesDropDown";
import Guests from "./GuestsDropDown";
import RoomType from "./RoomTypeDropDown";
import Price from "./PriceDropDown";
import Instant from "./InstantBookDropDown";

const Background = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const Div = styled.div`
  margin-left: -13px;
  @media (min-width: 576px) {
    margin-left: -5px;
  }
`;

const Wrapper = styled.div`display: flex;`;

export default class Filters extends React.Component {

state= {
  isOpen: true,
  oppenedFilter: "",
}
openFilter = (key, open) => {
  this.setState({oppenedFilter: key});
}


  render() {
    return (
      <Background>
        <div className="container">
          <div className="row">
            <Div>
              <Wrapper>
                <Dates isOpen={this.state.isOpen && this.state.oppenedFilter === "dates"} handleOpen={this.openFilter} op={this.state.oppenedFilter} lable="Dates"/>
                <Guests isOpen={this.state.isOpen && this.state.oppenedFilter === "guests"} handleOpen={this.openFilter} op={this.state.oppenedFilter} lable="Guests"/>
                <RoomType isOpen={this.state.isOpen && this.state.oppenedFilter === "roomtype"} handleOpen={this.openFilter} op={this.state.oppenedFilter} lable="Room Type"/>
                <Price isOpen={this.state.isOpen && this.state.oppenedFilter === "price"} handleOpen={this.openFilter} op={this.state.oppenedFilter} lable="Price"/>
                <Instant isOpen={this.state.isOpen && this.state.oppenedFilter === "instant"} handleOpen={this.openFilter} op={this.state.oppenedFilter} lable="Instant"/>
              </Wrapper>
            </Div>
          </div>
        </div>
      </Background>
    );
  }
}
