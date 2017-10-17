import React, { Component } from 'react';

import '../Styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul class="menu">
            <li class="menuList">Home</li>
            <li class="menuList">Profile</li>
            <li class="menuList">Skill</li>
            <li class="menuList">Career</li>
            <li class="menuList">Contact</li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;
