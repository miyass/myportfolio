import React, { Component } from 'react';

import '../Styles/Profile.css';

class Profile extends Component {
  render() {
    return(
      <div className="profile">
        <h1 className="profileTitle">Profile</h1>
        <h1 className="profileSubTitle">I like ... Camera</h1>
        <div className="profileContent">
          <h2>name <a>Sohei Miyakura</a></h2>
          <h2>age</h2>
          <h2>introduction</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
