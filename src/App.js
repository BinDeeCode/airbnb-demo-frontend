import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import ExploreAirbnb from "./ExploreAirbnb/ExploreAirbnb";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreAirbnb />
      </div>
    );
  }
}

export default App;
