import React from "react";
import styled from "styled-components";
import numberOfReviews from "./numberOfReviews.svg";

const NumberOfReviews = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media only screen and (min-width: 320px) {
    margin-top: 0px;
  }
`;

const ReviewCount = styled.div`
  border-radius: 6px;
  font-size: 18px;
  text-align: center;
  padding: 6px 10px;
  background-image: url(${numberOfReviews});
  color: white;
`;

const Text = styled.span`
  font-size: 18px;
  color: #636363;
  margin-left: 16px;
`;

export default props => (
  <NumberOfReviews>
    <ReviewCount>153</ReviewCount>
    <Text>Reviews</Text>
  </NumberOfReviews>
);
