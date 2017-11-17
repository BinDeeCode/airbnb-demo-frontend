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
        bootstrapURLKeys={{
          key: "AIzaSyAL0L8Ol0cJL2ceO1o7DY7j3K-QiV9UIxU",
          language: "en"
        }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </Gmap>
  );
}
