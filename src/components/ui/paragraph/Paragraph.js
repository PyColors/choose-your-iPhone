import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Paragraph extends Component {

  render () {
    const { paragraph } = this.props

    return <p className="paragraph">{paragraph}</p>
  }
}

Paragraph.propTypes = {
  paragraph: PropTypes.array.isRequired
}

export default Paragraph
