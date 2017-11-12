import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "./gridstyle.css";

import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Cities from "./Cities";
import Footer from "./Footer";

class App extends Component {
  render() {
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
}

export default App;
