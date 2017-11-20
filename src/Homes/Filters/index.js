import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

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
  render() {
    return (
      <Background>
        <div className="container">
          <div className="row">
            <Div>
              <Wrapper>
                <Filter label="Dates" />
                <Filter label="Guests" />
                <div className="xs-hidden sm-hidden">
                  <Filter label="Room type" />
                </div>
                <div className="xs-hidden sm-hidden">
                  <Filter label="Price" />
                </div>
                <div className="xs-hidden sm-hidden">
                  <Filter label="Instant book" />
                </div>

                <Filter label="More filters" />
              </Wrapper>
            </Div>
          </div>
        </div>
      </Background>
    );
  }
}
