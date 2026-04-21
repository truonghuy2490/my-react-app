import "./Navbar.css";
import React, { Component } from "react";
class Navbar extends Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <nav id="navbar">
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>

        <div className="nav-details">
          <p className="nav-username">
            {this.props.username}
          </p>
        </div>
      </nav>
    );
  }
}


export default Navbar;