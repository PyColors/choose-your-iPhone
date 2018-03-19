import React, { Component } from "react";
import PropTypes from "prop-types";
// muicss
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

class ChangeCapacity extends Component {
  render() {

    const {
      memory,
      handleMemoryCapacity
    } = this.props;

    return (
      <div className="change-capacity">
        <p className="change-capacity__description">
          Capacity: <strong>{memory}</strong>
        </p>
        <Container>
          <Row>
            <Col xs="4" md="3" className="change-color__container-col">
              <button
                value="64GB"
                onClick={handleMemoryCapacity}
                className="change-capacity__button"
              >
                64
              </button>
            </Col>
            <Col xs="4" md="3" className="change-color__container-col">
              <button
                value="256GB"
                onClick={handleMemoryCapacity}
                className="change-capacity__button"
              >
                256
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ChangeCapacity.propTypes = {
  memory: PropTypes.string.isRequired,
  handleMemoryCapacity: PropTypes.func.isRequired
};

export default ChangeCapacity;
