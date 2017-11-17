import React from "react";
import Header from "../Header";
import Filters from "./Filters";
import Content from "./Content";
import styled from "styled-components";

const Div = styled.div`height: 81px;`;
const Div2 = styled.div`height: 55px;`;

export default function() {
  return (
    <div>
      <Div />
      <Filters />
      <Div2 />
      <Content />
    </div>
  );
}
