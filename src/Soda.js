import React, { Component } from 'react'
// import './Chip.css';
import SodaImg from "./assets/soda.jpg";
import LinkBack from "./LinkBack";

class Soda extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING A CAN of SODA!</h3>
        <img src={SodaImg} alt="soda" />
        < LinkBack />
      </div>
    );
  }
}

export default Soda;