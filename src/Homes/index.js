import React from "react";
import Header from "../Header";
import Filters from "./Filters";
import Content from "./Content";
import styled from "styled-components";

const PaddingHeader = styled.div`height: 81px;`;
const PaddingFilters = styled.div`height: 55px;`;

export default function() {
  return (
    <div>
      <PaddingHeader />
      <Filters />
      <PaddingFilters />
      <Content />
    </div>
  );
}
