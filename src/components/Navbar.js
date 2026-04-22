import { Link } from "react-router-dom";
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
          <Link to={"Home"}><li>Home</li></Link>
          <Link to={"Contact"}><li>Contact</li></Link>
          <Link to={"About"}><li>About</li></Link>
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