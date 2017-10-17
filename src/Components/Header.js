import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul className="menu">
            <li className="menuList"><Link to="/">Home</Link></li>
            <li className="menuList">Profile</li>
            <li className="menuList">Skill</li>
            <li className="menuList">Career</li>
            <li className="menuList">Contact</li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;
