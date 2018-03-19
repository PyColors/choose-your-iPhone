import React, { Component } from "react";
import PropTypes from "prop-types";

// muicss
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

class Panel extends Component {
    
  render() {
    const { monthlyPriceGross64GB, hardwarePriceNet64GB } = this.props;

    return (
      <div className="panel">
        <Container>
          <Row>
            <Col md="6">
              <p className="panel__description panel__border-style">
                from{" "}
                <span className="panel__price">£{hardwarePriceNet64GB}</span>{" "}
                upfront cost
              </p>
            </Col>
            <Col md="6">
              <p className="panel__description">
                When you pay{" "}
                <span className="panel__price">£{monthlyPriceGross64GB}</span> a
                mouth
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Panel.propTypes = {
  monthlyPriceGross64GB: PropTypes.array.isRequired,
  hardwarePriceNet64GB: PropTypes.array.isRequired
};

export default Panel;
