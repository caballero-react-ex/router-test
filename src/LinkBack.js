import React, { Component } from 'react'
import { Link } from "react-router-dom";

class LinkBack extends Component {
  
  render() {
    return (
      <Link to="/" style={{color: "blue"}}>&#8592; Buy more things</Link>
    );
  }
}

export default LinkBack;