import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul className="menu">
            <li className="menuList"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
            <li className="menuList"><Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link></li>
            <li className="menuList"><Link to='/skill' style={{ textDecoration: 'none', color: 'white' }}>Skill</Link></li>
            <li className="menuList"><Link to="/career" style={{ textDecoration: 'none', color: 'white' }}>Career</Link></li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;
