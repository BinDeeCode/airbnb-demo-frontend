import React from "react";
import "../../fonts/fonts.css";
import Card from "./Card";
import TitleSection from "../../UI/TitleSection";
import img2 from "./cardback_1.png";
import img1 from "./cardback_2.png";
import img from "./cardback_3.png";
import imgmob from "./imgmob.png";
import imgmob1 from "./imgmob1.png";

export default function() {
  return (
    <div className="container">
      <div className="row">
        <TitleSection name="Explore Airbnb" />
      </div>

      <div className="row rowscroll">
        <Card link="/homes" name="Homes" img={img} imgmob={imgmob} />
        <Card link="#" name="Experiences" img={img2} imgmob={imgmob1} />
        <Card link="#" name="Restsaurans" img={img1} imgmob={img1} />
      </div>
    </div>
  );
}
