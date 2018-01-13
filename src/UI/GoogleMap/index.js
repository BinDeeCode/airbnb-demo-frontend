import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 192px;
  width: 100%;
  @media (min-width: 320px) {
    height: 474px;
  }
`;

export default props => {
  return (
    <div>
      <Wrapper>
        <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
      </Wrapper>
    </div>
  );
};
