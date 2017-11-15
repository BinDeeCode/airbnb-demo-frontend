import React from "react";
import styled from "styled-components";
import List from "./List";
import Map from "./Map";

export default function() {
  return (
    <div>
      <div className="container">
        <List />
        <Map center={{ lat: 19.23, lng: 75.62 }} zoom={8} />
      </div>
    </div>
  );
}
