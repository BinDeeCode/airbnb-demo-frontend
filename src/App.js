import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "./gridstyle.css";
import "./fonts/fonts.css";

import { BrowserRoutre, Route, BrowserRouter } from "react-router-dom";

import Landing from "./Landing";
import Homes from "./Homes";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
