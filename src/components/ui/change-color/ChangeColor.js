import React, { Component } from "react";
import PropTypes from "prop-types";
// muicss
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Radio from "muicss/lib/react/radio";

class ChangeColor extends Component {
  render() {
    const {
      colourName,
      handleColourName
    } = this.props;

    return (
      <div className="change-color">
        <p className="change-color__description">
          Colour: <strong>{colourName}</strong>
        </p>
        <Container>
          <Row>
            <Col xs="4" md="4">
              <button
                value="Gold"
                onClick={handleColourName}
                className={`change-color__button change-color__button--bg-gold`}
              />
            </Col>
            <Col xs="4" md="4">
              <button
                value="Silver"
                onClick={handleColourName}
                className="change-color__button change-color__button--bg-silver"
              />
            </Col>
            <Col xs="4" md="4">

              <button
                value="Space Grey"
                onClick={handleColourName}
                className="change-color__button change-color__button--bg-space-grey"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ChangeColor.propTypes = {
  colourName: PropTypes.string.isRequired,
  handleColourName: PropTypes.func.isRequired
};

export default ChangeColor;
