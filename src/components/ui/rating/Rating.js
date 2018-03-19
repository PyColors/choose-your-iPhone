import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactStars from "react-stars";

class Rating extends Component {
  render() {
    const { rating } = this.props;

    let ratingValue = Math.ceil(rating);

    return (
      <div className="rating">
        <ReactStars
          count={5}
          size={30}
          value={ratingValue}
          color2={"#ffd700"}
        />
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.array.isRequired
};

export default Rating;
