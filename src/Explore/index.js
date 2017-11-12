import React from "react";
import "../gridstyle.css";
import "./fonts.css";
import styled from "styled-components";
import Card from "./Card";
import TitleSectionNoAllSee from "../TitleSectionNoAllSee";
import img from "./cardback_1.png";
import img1 from "./cardback_2.png";
import img2 from "./cardback_3.png";

export default function() {
  return (
    <div className="container">
      <div className="row">
        <TitleSectionNoAllSee name="Explore Airbnb" />
      </div>

      <div className="row rowscroll">
        <Card name="Homes" img={img} />
        <Card name="Experiences" img={img1} />
        <Card name="Restsaurans" img={img2} />
      </div>
    </div>
  );
}
