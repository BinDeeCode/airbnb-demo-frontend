import React from "react";
import "./header_style.css";
import logo from "./img/Shape.svg";
import searchIcon from "./img/searchIcon.svg";

export default function() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <a href="#" className="logoLink">
              <div className="logoLinkDiv">
                <img src={logo} className="AirbnbLogo" alt="logo" />
              </div>
            </a>
          </div>
          <div className="col-5">
            <input
              type="text"
              className="search"
              placeholder="Try &quot;Miami&quot;"
            />
          </div>
          <div className="col-2" />
          <div className="col-4">
            <ul>
              <li>
                <a href="#">
                  <div>
                    <div className="menuBorder">Become a host</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <div className="menuBorder">Help</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <div className="menuBorder">Sign Up</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <div className="menuBorder">Log In</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
