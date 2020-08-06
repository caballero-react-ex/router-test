import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './VendingMachine.css';

class VendingMachine extends Component {
  
  render() {
    return (
      <div>
        <h1>Hallo, I am a Vending Machine, please choose a product</h1>
        <div className="btn-container">
          <Link to="/chip" className="btn">Buy chips</Link>
          <Link to="/soda" className="btn">Buy Soda</Link>
          <Link to="/bifi" className="btn">Buy Bifi</Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;