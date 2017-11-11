import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import Header from "./Header";
import ExploreAirbnb from "./ExploreAirbnb/ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Cityes from "./Cityes";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <ExploreAirbnb />

        <Experiences />

        <Homes />
        {/* <Popular />
        <Cityes /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
