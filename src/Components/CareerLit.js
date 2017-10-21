import React, { Component } from 'react';

import logo from '../Images/lit-logo.png';
import '../Styles/CareerLit.css';

class CareerLit extends Component {
  render() {
    return(
      <div className="career">
        <h1 className="careerTitleLit">Career</h1>
        <div className="litContent">
          <img src={logo} alt="logo" className="litLogo1" />
          <h2 className="litSubTitle">Life is Tech!</h2>
          <div className="litLeftContent">
            <p className="companyDesc">
              This company attempts the camp for 3 - 8 days. This camp aims to draw out the creativity of teenagers through the study of cutting edge Information Technology such as iPhone application development and game design/programming.
            </p>
            <h3>Work</h3>
            <ul className="litDetail">
              <li className="companyDesc">I teach teenager how to make Game using Unity</li>
            </ul>
            <h3>Experience</h3>
            <ul className="litDetail">
              <li className="companyDesc">Programming skill: Java, Unity, Ruby</li>
              <li className="companyDesc">Design skill: Illustrator, Photoshop</li>
              <li className="companyDesc">Facilitation, Team building Skill</li>
            </ul>
          </div>
          <div className="litRightContent">
          <img src={logo} alt="logo" className="litLogo2" />
          </div>
        </div>
      </div>
    );
  }
}

export default CareerLit;
