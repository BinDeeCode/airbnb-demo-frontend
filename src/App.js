import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import ExploreAirbnb from "./ExploreAirbnb/ExploreAirbnb";
import Exp from "./Experiences/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreAirbnb />
        <Exp />
      </div>
    );
  }
}

export default App;
