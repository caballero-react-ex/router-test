import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <div className="Navbar">
          <NavLink exact activeClassName="active-nav" to="/" className="btn-nav">Home</NavLink>
          <NavLink exact activeClassName="active-nav" to="/chip" className="btn-nav">Buy chips</NavLink>
          <NavLink exact activeClassName="active-nav" to="/soda" className="btn-nav">Buy Soda</NavLink>
          <NavLink exact activeClassName="active-nav" to="/bifi" className="btn-nav">Buy Bifi</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;