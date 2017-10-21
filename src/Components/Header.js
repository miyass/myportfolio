import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul className="menu">
            <li className="menuList1">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="menuList1">
              <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                Profile
              </Link>
            </li>
            <li className="menuList1">
              <Link to='/skill' style={{ textDecoration: 'none', color: 'white' }}>
                Skill
              </Link>
            </li>
            <li className="menuList1">
              <Link to="/career" style={{ textDecoration: 'none', color: 'white' }}>
                Career
              </Link>
            </li>

            <li className="menuList2 menuAddon">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                <p className="iconName">home</p>
              </Link>
            </li>
            <li className="menuList2">
              <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
                <p className="iconName">profile</p>
              </Link>
            </li>
            <li className="menuList2">
              <Link to="/skill" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                <p className="iconName">skill</p>
              </Link>
            </li>
            <li className="menuList2">
              <Link to="/career" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                <p className="iconName">career</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;
