import React, { Component } from 'react'
// import './Chip.css';
import SodaImg from "./assets/soda.jpg";

class Soda extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING A CAN of SODA!</h3>
        <img src={SodaImg} alt="soda image" />
      </div>
    );
  }
}

export default Soda;