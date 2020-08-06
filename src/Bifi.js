import React, { Component } from 'react'
// import './Chip.css';
import BifiImg from "./assets/bifi.jpg";

class Bifi extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING A BIFI SAUSSAGE!</h3>
        <img src={BifiImg} alt="Bifi image" />
      </div>
    );
  }
}

export default Bifi;