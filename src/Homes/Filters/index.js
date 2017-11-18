import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
              <Button
                type="calendar"
                value="Dates"
                openValue="Check in — Check out"
              />
              <Button type="guests" value="Guests" openValue="Guests" />
              <div className="xs-hidden sm-hidden">
                <Button value="Room type" />
              </div>
              <div className="xs-hidden sm-hidden">
                <Button value="Price" />
              </div>
              <div className="xs-hidden sm-hidden">
                <Button value="Instant book" />
              </div>

              <Button value="More&nbsp;filters" />
            </Wrapper>
          </Div>
        </div>
      </div>
    </Background>
  );
}
