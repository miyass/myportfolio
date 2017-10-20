import React, { Component } from 'react';

import logo from '../Images/kintone-logo.png';
import '../Styles/CareerKintone.css';

class CareerKintone extends Component {
  render() {
    return(
      <div className="career">
        <h1 className="careerTitle">Career</h1>
        <div className="kintoneContent">
          <h2 className="kintoneSubTitle">kintone</h2>
          <div className="kintoneLeftContent">
            <p>
            This company provide the product called 'kintone'. kintone is the business and database application platform.
            You can easily share the information and communicate with staves using kintone!
            </p>
            <h3>Work</h3>
            <ul>
              <li>I make the application for the client using kintone</li>
              <li>I make plug-in using Javasciript</li>
              <li>I educate the workers how to use kintone</li>
            </ul>
            <h3>Experience</h3>
            <ul>
              <li>Programming skill: Javascript</li>
              <li>Communication skill using English</li>
            </ul>
          </div>
          <div className="kintoneRightContent">
            <img src={logo} alt="logo" className="kintoneLogo" />
          </div>

        </div>
      </div>
    );
  }
}

export default CareerKintone;
