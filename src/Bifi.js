import React, { Component } from 'react'
// import './Chip.css';
import BifiImg from "./assets/bifi02.jpg";
import LinkBack from "./LinkBack";

class Bifi extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING A BIFI SAUSSAGE!</h3>
        <img src={BifiImg} alt="Bifi" />
        < LinkBack />
      </div>
    );
  }
}

export default Bifi;