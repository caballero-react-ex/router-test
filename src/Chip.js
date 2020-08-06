import React, { Component } from 'react'
// import './Chip.css';
import ChipImg from "./assets/chip.png";

class Chip extends Component {
  
  render() {
    return (
      <div>
        <h3>YOU ARE GETTING SOME CHIPS!</h3>
        <img src={ChipImg} alt="chip image" />
      </div>
    );
  }
}

export default Chip;