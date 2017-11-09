import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import ExploreAirbnb from "./ExploreAirbnb/ExploreAirbnb";
import Exp from "./Experiences/index";
import styled from "styled-components";
import Homes from "./Homes/index.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreAirbnb />
        <Exp />
        <Homes />
      </div>
    );
  }
}

export default App;
