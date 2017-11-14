import React from "react";

import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Cities from "./Cities";
import Footer from "../Footer";

export default function() {
  return (
    <div>
      <Header />
      <Explore />

      <Experiences />

      <Homes />

      <Popular />

      <Cities />

      <Footer />
    </div>
  );
}