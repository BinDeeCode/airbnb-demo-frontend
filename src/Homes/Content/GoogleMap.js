import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const Gmap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: calc(50% + 150px);
  top: 0px;
  z-index: -1;
`;

export default function(props) {
  return (
    <Gmap className="sm-hidden xs-hidden">
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </Gmap>
  );
}
