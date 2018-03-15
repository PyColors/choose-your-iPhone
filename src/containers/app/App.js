import React, { Component } from 'react';
import Paragraph from '../../components/ui/paragraph/Paragraph';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      isLoading: true
    };
  }


  componentDidMount() {
    axios.get(`../src/data/phones.json`)
      .then(res => {
        const phones = res.data;
        console.log(phones[0].deviceSummary)
        this.setState({
          phones: phones[0].deviceSummary,
          isLoading: false
        });
      }).catch((error) => {
        // Error!!!
        this.setState({
          isLoading: false
        });
      });
  }





  render() {
    const { phones, isLoading } = this.state;
    return (
      <main>
        <h1> h1  </h1>
 
 
          {(phones.length > 0) ? (
              phones.map(function (phone, indexItem) {
                return (
                  <div className="carousel__item" key={indexItem}>
                    <p> deviceId: {phone.deviceId} </p>
                    <p> displayName: {phone.displayName} </p>
                    <p> displayDescription: {phone.displayDescription} </p>
                    <p> colourName: {phone.colourName} </p>
                    <p> colourHex: {phone.colourHex} </p>
                    <p> memory: {phone.memory} </p>
                    <p> leadPlanId: {phone.leadPlanId} </p>
   
                      <p> id: {phone.merchandisingMedia[0].id} </p>
                      <p> coco2: {phone.merchandisingMedia[0].value} </p>
                      
                     <p> bundleId: {phone.priceInfo.bundlePrice.bundleId} </p>
                      <p> bundleId gross: {phone.priceInfo.bundlePrice.monthlyPrice.gross} </p> 
                      <p> bundleId net: {phone.priceInfo.bundlePrice.monthlyPrice.net} </p> 
                      <p> bundleId vat: {phone.priceInfo.bundlePrice.monthlyPrice.vat} </p>
                      
                      <p>bundlePrice monthlyDiscountPrice gross: {phone.priceInfo.bundlePrice.monthlyDiscountPrice.gross} </p>
                      <p>bundlePrice monthlyDiscountPrice net: {phone.priceInfo.bundlePrice.monthlyDiscountPrice.net} </p>
                      <p>bundlePrice monthlyDiscountPrice vat: {phone.priceInfo.bundlePrice.monthlyDiscountPrice.vat} </p>
                      
                      <p> hardwareId: {phone.priceInfo.hardwarePrice.hardwareId} </p>
                        <p> hardwareId  gross: {phone.priceInfo.hardwarePrice.oneOffPrice.gross} </p>
                        <p> hardwareId net: {phone.priceInfo.hardwarePrice.oneOffPrice.net} </p>
                        <p> hardwareId vat: {phone.priceInfo.hardwarePrice.oneOffPrice.vat} </p>
                      
                      <p> oneOffDiscountPrice gross: {phone.priceInfo.hardwarePrice.oneOffDiscountPrice.gross} </p>
                      <p> oneOffDiscountPrice net: {phone.priceInfo.hardwarePrice.oneOffDiscountPrice.net} </p>
                      <p> oneOffDiscountPrice vat: {phone.priceInfo.hardwarePrice.oneOffDiscountPrice.vat} </p>
                  </div>
                );
              })
            ) : null
          }
         <Paragraph paragraph="coco test" />
         
         
         <header>
          <div className="container">header</div>
        </header>
        
        <div className="content container">
          <section>section</section>
        </div>
        
        <footer>
          <div className="container">container</div>
        </footer>
        
        <a className="outline" href="#/">@</a>


      </main>
    );
  }
}

export default App;
