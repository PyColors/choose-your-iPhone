import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './Paragraph.scss';

class Paragraph extends Component {

    render() {
        const { paragraph } = this.props;
    
        return (
          <p className="paragraph">
            {paragraph}cc
          </p>
        );
    }
}

Paragraph.propTypes = {
    paragraph: PropTypes.string.isRequired
};

export default Paragraph;
