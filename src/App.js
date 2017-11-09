import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import ExploreAirbnb from "./ExploreAirbnb/ExploreAirbnb";
import Exp from "./Experiences/index";
import styled from "styled-components";
import Homes from "./Homes/index.js";
import Popular from "./Popular";
import Future from "./Future";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreAirbnb />
        <Exp />
        <Homes />
        <Popular />
        <Future />
        <Footer />
      </div>
    );
  }
}

export default App;
