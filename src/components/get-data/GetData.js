import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import PhoneColourCapacityLogic from "../phone-colour-capacity-logic/PhoneColourCapacityLogic";

// ui
import Loader from "../../components/ui/loader/Loader";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios
      .get(`../src/data/phones.json`)
      .then(res => {
          
        //--- Put the res in data
        const data = res.data;

        const groupNameValue = data.map(element => [element.groupName]);
        const ratingValue = data.map(element => [element.rating]);

        const deviceSummary = data[0].deviceSummary;
        const displayDescriptionValue = deviceSummary.map(element => [
          element.displayDescription
        ]);
        
        const colourNameValue = deviceSummary.map(element => [
          element.colourName
        ]);

        // monthlyPrice gross
        const monthlyPriceGrossValues = deviceSummary.map(element => [
          element.priceInfo.bundlePrice.monthlyPrice.gross
        ]);
    
        // hardwarePrice net
        const hardwarePriceNetValues = deviceSummary.map(element => [
          element.priceInfo.hardwarePrice.oneOffPrice.net
        ]);
        
        this.setState({
          rating: ratingValue,
          groupName: groupNameValue,
          displayDescription: displayDescriptionValue[0],
          colourName: colourNameValue,
          monthlyPriceGross64GB: monthlyPriceGrossValues[0],
          monthlyPriceGross256GB: monthlyPriceGrossValues[3],
          hardwarePriceNet64GB: hardwarePriceNetValues[0],
          hardwarePriceNet256GB: hardwarePriceNetValues[3],
          isLoading: false
        });
      })
      .catch(error => {
        // Error!!!
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const {
      selectedColorPhone,
      selectedMemoryPhone,
      monthlyPriceGross64GB,
      monthlyPriceGross256GB,
      hardwarePriceNet64GB,
      hardwarePriceNet256GB,
      groupName,
      rating,
      isLoading,
      displayName,
      displayDescription,
      colourName
    } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <PhoneColourCapacityLogic
        rating={rating}
        groupName={groupName}
        displayDescription={displayDescription}
        colourName={colourName}
        displayName={displayName}
        monthlyPriceGross64GB={monthlyPriceGross64GB}
        monthlyPriceGross256GB={monthlyPriceGross256GB}
        hardwarePriceNet64GB={hardwarePriceNet64GB}
        hardwarePriceNet256GB={hardwarePriceNet256GB}
        selectedColorPhone={selectedColorPhone}
        selectedMemoryPhone={selectedMemoryPhone}
      />
    );
  }
}

export default GetData;
