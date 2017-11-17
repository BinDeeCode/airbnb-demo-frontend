import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Cities from "./Cities";
import Footer from "./Footer";

const Div = styled.div`height: 80px;`;

export default function() {
  return (
    <div>
      <Div />
      <Explore />

      <Experiences />

      <Homes />

      <Popular />

      <Cities />

      <Footer />
    </div>
  );
}
