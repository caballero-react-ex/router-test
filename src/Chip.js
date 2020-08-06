import React, { Component } from 'react'
// import './Chip.css';
import ChipImg from "./assets/chip.png";
import LinkBack from "./LinkBack";

class Chip extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING SOME CHIPS!</h3>
        <img src={ChipImg} alt="chip" />
        < LinkBack />
      </div>
    );
  }
}

export default Chip;