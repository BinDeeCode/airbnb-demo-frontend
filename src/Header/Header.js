import React from "react";
import "./header_style.css";
import "../gridstyle.css";
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
            <div className="menuDiv">
              <ul>
                <li>
                  <a href="#" className="menuLinks">
                    <div>
                      <span className="menuBorder">
                        <div className="borderDown">Become a host</div>
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="menuLinks">
                    <div>
                      <span className="menuBorder">
                        <div className="borderDown">Help</div>
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="menuLinks">
                    <div>
                      <span className="menuBorder">
                        <div className="borderDown">Sign Up</div>
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="menuLinks">
                    <div>
                      <span className="menuBorder">
                        <div className="borderDown">Log In</div>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
