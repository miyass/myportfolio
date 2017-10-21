import React, { Component } from 'react';

import '../Styles/Skill.css';

class Skill extends Component {
  render() {
    return(
      <div className="skill">
        <h1 className="skillTitle">Skill</h1>
        <div className="skillContent">
          <div className="skillList">
            <h2 className="skillSubTitle">Programming</h2>
            <ul className="sub">
              <li className="subList">
                <a className="listName">HTML</a>
              </li>
              <li className="subList">
                <a className="listName">CSS</a>
                <ul className="sub">
                  <li className="subProgramList">Sass</li>
                  <li className="subProgramList">SCSS</li>
                  <li className="subProgramList">BootStrap</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Javascript</a>
                <ul className="sub">
                  <li className="subProgramList">jQuery</li>
                  <li className="subProgramList">React</li>
                  <li className="subProgramList">kintone API</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Ruby</a>
                <ul className="sub">
                  <li className="subProgramList">Ruby on Rails</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Java</a>
                <ul className="sub">
                  <li className="subProgramList">Minecraft Forge API</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Swift</a>
              </li>
              <li className="subList">
                <a className="listName">Unity</a>
              </li>
            </ul>
          </div>
          <div className="skillList">
            <h2 className="skillSubTitle">Design</h2>
            <ul className="sub">
              <li className="subList">
                <a className="listName">Adobe</a>
                <ul className="sub">
                  <li className="subDesignList">Illustrator</li>
                  <li className="subDesignList">Photoshop</li>
                  <li className="subDesignList">Lightroom</li>
                  <li className="subDesignList">Premiere Pro</li>
                  <li className="subDesignList">After Effect</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
