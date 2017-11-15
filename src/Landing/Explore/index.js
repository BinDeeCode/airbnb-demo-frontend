import React from "react";
import "../../fonts/fonts.css";
import Card from "./Card";
import TitleSectionNoAllSee from "../../UI/TitleSectionNoAllSee";
import img from "./cardback_1.png";
import img1 from "./cardback_2.png";
import img2 from "./cardback_3.png";
import imgmob from "./imgmob.png";
import imgmob1 from "./imgmob1.png";

export default function() {
  return (
    <div className="container">
      <div className="row">
        <TitleSectionNoAllSee name="Explore Airbnb" />
      </div>

      <div className="row rowscroll">
        <Card link="/homes" name="Homes" img={img} imgmob={imgmob} />
        <Card link="#" name="Experiences" img={img1} imgmob={imgmob1} />
        <Card link="#" name="Restsaurans" img={img2} imgmob={img1} />
      </div>
    </div>
  );
}
