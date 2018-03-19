import React, { Component } from "react";
import PropTypes from "prop-types";

class Title extends Component {
    
  render() {
    const { title } = this.props;

    return <h1 className="title">{title}</h1>;
  }
}

Title.propTypes = {
  title: PropTypes.array.isRequired
};

export default Title;
