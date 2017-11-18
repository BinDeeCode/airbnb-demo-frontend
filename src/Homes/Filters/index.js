import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";

const Background = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const Div = styled.div`
  margin-left: -5px;
  @media (min-width: 576px) and (max-width: 992px) {
    margin-left: -5px;
  }

  @media (max-width: 576px) {
    margin-left: -13px;
  }
`;

const Wrapper = styled.div`display: flex;`;

export default function() {
  return (
    <Background>
      <div className="container">
        <div className="row">
          <Div>
            <Wrapper>
              <DropDown
                type="calendar"
                value="Dates"
                openValue="Check in — Check out"
              />
              <DropDown type="guests" value="Guests" openValue="Guests" />
              <div className="xs-hidden sm-hidden">
                <DropDown value="Room type" openValue="Room type" />
              </div>
              <div className="xs-hidden sm-hidden">
                <DropDown value="Price" openValue="Price" />
              </div>
              <div className="xs-hidden sm-hidden">
                <DropDown value="Instant book" openValue="Instant book" />
              </div>

              <DropDown
                value="More&nbsp;filters"
                openValue="More&nbsp;filters"
              />
            </Wrapper>
          </Div>
        </div>
      </div>
    </Background>
  );
}
