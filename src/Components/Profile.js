import React, { Component } from 'react';

import '../Styles/Profile.css';

class Profile extends Component {
  render() {
    return(
      <div className="profile">
        <h1 className="profileTitle">Profile</h1>
        <h1 className="profileSubTitle">I like ... Camera</h1>
        <div className="profileContent">
          <p className="profileText">
          My name is Sohei Miyakura. I am a University student. My major is Marketing.
          I am interested in programming, especially Web design and Web Development.
          In Japan, I taught teenager IT technology as internship, such as Web programming, Game , Design.
          </p>
          <p className="profileText">
          I am studying abroad in USA to learn English and programming.<br />
          I work at the caompany called kintone. I made plug-in using Javascript.
          </p>
        </div>
        <div className="contact">
          <h2 className="contactTitle">Contact</h2>
          <ul className="contactList">
            <li className="contactDetail"><a href="https://www.facebook.com/Vencha.Miyakura"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a></li>
            <li className="contactDetail"><a href="https://www.instagram.com/venchaaa/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a></li>
            <li className="contactDetail"><a href="https://github.com/miyass"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
