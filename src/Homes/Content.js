import React from "react";
import styled from "styled-components";
import List from "./List";
import GoogleMap from "./GoogleMap";

export default function() {
  return (
    <div className="container">
      <List />
      <GoogleMap center={{ lat: 19.23, lng: 75.62 }} zoom={8} />
    </div>
  );
}
