import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// muicss
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

// ui
import Img from "../ui/img/Img";
import Paragraph from "../../components/ui/paragraph/Paragraph";
import Rating from "../../components/ui/rating/Rating";
import Title from "../../components/ui/title/Title";
import ChangeColor from "../../components/ui/change-color/ChangeColor";
import ChangeCapacity from "../../components/ui/change-capacity/ChangeCapacity";
import Panel from "../../components/ui/panel/Panel";

// imgs
import imgPhoneGold from "../../../images/Apple_iPhone_8_Gold-full-product-front.png";
import imgPhoneSilver from "../../../images/Apple_iPhone_8_Silver_WS2-full-product-front.png";
import defaulImgPhone from "../../../images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png";

class PhoneColourCapacityLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColorPhone: "Space Grey",
      selectedMemoryPhone: "64GB"
    };
  }

  render() {
    const {
      monthlyPriceGross64GB,
      monthlyPriceGross256GB,
      hardwarePriceNet64GB,
      hardwarePriceNet256GB,
      groupName,
      rating,
      displayDescription
    } = this.props;

    const { selectedColorPhone, selectedMemoryPhone } = this.state;

    this.handleColourName = e => {
      if (
        e.target.value === "Gold" ||
        e.target.value === "Silver" ||
        e.target.value === "Space Grey"
      ) {
        this.setState({
          selectedColorPhone: e.target.value
        });
      }
    };

    this.handleMemoryCapacity = e => {
      if (e.target.value === "64GB" || e.target.value === "256GB") {
        this.setState({
          selectedMemoryPhone: e.target.value
        });
      }
    };

    return (
      <Row>
        <Col md="6">
          {selectedColorPhone === "Gold" ? (
            <Img src={imgPhoneGold} alt={groupName} />
          ) : null}

          {selectedColorPhone === "Silver" ? (
            <Img src={imgPhoneSilver} alt={groupName} />
          ) : null}

          {selectedColorPhone === "Space Grey" ? (
            <Img src={defaulImgPhone} alt={groupName} />
          ) : null}
        </Col>
        <Col md="6">
          <Title title={groupName} />
          <Rating rating={rating} />
          <Paragraph paragraph={displayDescription} />
          <Row>
            <Col md="6">
              <ChangeColor
                colourName={selectedColorPhone}
                handleColourName={(e) => this.handleColourName(e)}
              />
            </Col>
            <Col md="6">
              <ChangeCapacity
                handleMemoryCapacity={(e) =>
                  this.handleMemoryCapacity(e)
                }
                memory={selectedMemoryPhone}
              />
            </Col>
          </Row>
          <Panel
            monthlyPriceGross64GB={
              selectedMemoryPhone === "64GB"
                ? monthlyPriceGross64GB
                : monthlyPriceGross256GB
            }
            hardwarePriceNet64GB={
              selectedMemoryPhone === "64GB"
                ? hardwarePriceNet64GB
                : hardwarePriceNet256GB
            }
          />
        </Col>
      </Row>
    );
  }
}

PhoneColourCapacityLogic.propTypes = {
  monthlyPriceGross64GB: PropTypes.array.isRequired,
  monthlyPriceGross256GB: PropTypes.array.isRequired,
  hardwarePriceNet64GB: PropTypes.array.isRequired,
  hardwarePriceNet256GB: PropTypes.array.isRequired,
  groupName: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired,
  displayDescription: PropTypes.array.isRequired,
  colourName: PropTypes.array.isRequired
};

export default PhoneColourCapacityLogic;
