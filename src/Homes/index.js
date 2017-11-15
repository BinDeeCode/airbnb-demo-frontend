import React from "react";
import Header from "../Header";
import Filters from "./Filters";
import Content from "./Content";

export default function() {
  return (
    <div>
      <Header />
      <Filters />
      <Content />
    </div>
  );
}
