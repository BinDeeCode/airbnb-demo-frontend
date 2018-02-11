import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Card from "./Card";

const List = styled.div`
  float: left;
  width: 636px;

  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 992px) {
    width: 100%;
  }
`;

export default class Homes extends React.Component {
  state = {
    items: null
  };

  componentDidMount() {
    fetch("https://airbnb-demo-api.now.sh/v1/homes")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ items: json.items });
      });
  }

  render() {
    if (this.state.items === null) {
      return "";
    } else
      return (
        <List>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <Card
                img={this.state.items[0].images[0].picture}
                price={this.state.items[0].price}
                name={this.state.items[0].name}
                roomtype={
                  this.state.items[0].kind === "entire_home"
                    ? "Entire home · " + this.state.items[0].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[0].bedsCount +
                      " beds"
                }
                superhost={this.state.items[0].reviewsCount}
              />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Card
                img={this.state.items[1].images[1].picture}
                price={this.state.items[1].price}
                name={this.state.items[1].name}
                roomtype={
                  this.state.items[1].kind === "entire_home"
                    ? "Entire home · " + this.state.items[1].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[1].bedsCount +
                      " beds"
                }
                superhost={this.state.items[1].reviewsCount}
              />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Card
                img={this.state.items[2].images[2].picture}
                price={this.state.items[2].price}
                name={this.state.items[2].name}
                roomtype={
                  this.state.items[2].kind === "entire_home"
                    ? "Entire home · " + this.state.items[2].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[2].bedsCount +
                      " beds"
                }
                superhost={this.state.items[2].reviewsCount}
              />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Card
                img={this.state.items[3].images[3].picture}
                price={this.state.items[3].price}
                name={this.state.items[3].name}
                roomtype={
                  this.state.items[3].kind === "entire_home"
                    ? "Entire home · " + this.state.items[3].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[3].bedsCount +
                      " beds"
                }
                superhost={this.state.items[3].reviewsCount}
              />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Card
                img={this.state.items[4].images[4].picture}
                price={this.state.items[4].price}
                name={this.state.items[4].name}
                roomtype={
                  this.state.items[4].kind === "entire_home"
                    ? "Entire home · " + this.state.items[4].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[4].bedsCount +
                      " beds"
                }
                superhost={this.state.items[4].reviewsCount}
              />
            </div>
            <div className="col-lg-6 col-sm-6 ">
              <Card
                img={this.state.items[5].images[5].picture}
                price={this.state.items[5].price}
                name={this.state.items[5].name}
                roomtype={
                  this.state.items[5].kind === "entire_home"
                    ? "Entire home · " + this.state.items[5].bedsCount + " beds"
                    : "Private room · " +
                      this.state.items[5].bedsCount +
                      " beds"
                }
                superhost={this.state.items[5].reviewsCount}
              />
            </div>
            <div className=" col-lg-12 col-sm-12">
              <Footer />
            </div>
          </div>
        </List>
      );
  }
}
