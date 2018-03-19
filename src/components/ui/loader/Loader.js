 import React, { Component } from 'react';

 class Loader extends Component {

  render() {
   return (
    <div className="content-lds-ripple"><div className="lds-ripple"><div></div><div></div></div></div>
   );
  }
 }

 export default Loader;
 