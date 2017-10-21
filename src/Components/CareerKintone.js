import React, { Component } from 'react';

import logo from '../Images/kintone-logo.png';
import '../Styles/CareerKintone.css';

class CareerKintone extends Component {
  render() {
    return(
      <div className="career">
        <h1 className="careerTitleKintone">Career</h1>
        <div className="kintoneContent">
          <img src={logo} alt="logo" className="kintoneLogo1" />
          <h2 className="kintoneSubTitle">kintone</h2>
          <div className="kintoneLeftContent">
            <p className="companyDesc">
            This company provide the product called 'kintone'. kintone is the business and database application platform.
            You can easily share the information and communicate with staves using kintone!
            </p>
            <h3>Work</h3>
            <ul className="kintoneDetail">
              <li className="companyDesc">I make the application for the client using kintone</li>
              <li className="companyDesc">I make plug-in using Javasciript</li>
              <li className="companyDesc">I educate the workers how to use kintone</li>
            </ul>
            <h3>Experience</h3>
            <ul className="kintoneDetail">
              <li className="companyDesc">Programming skill: Javascript</li>
              <li className="companyDesc">Communication skill using English</li>
            </ul>
          </div>
          <div className="kintoneRightContent">
            <img src={logo} alt="logo" className="kintoneLogo2" />
          </div>

        </div>
      </div>
    );
  }
}

export default CareerKintone;
