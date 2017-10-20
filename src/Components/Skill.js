import React, { Component } from 'react';

import '../Styles/Skill.css';

class Skill extends Component {
  render() {
    return(
      <div className="skill">
        <h1 className="skillTitle">Skill</h1>
        <div className="skillContent">
          <div className="skillList">
            <h2>Programming</h2>
            <ul className="sub">
              <li className="subList">
                <a className="listName">HTML</a>
              </li>
              <li className="subList">
                <a className="listName">CSS</a>
                <ul>
                  <li>Sass</li>
                  <li>SCSS</li>
                  <li>BootStrap</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Javascript</a>
                <ul>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>kintone API</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Ruby</a>
                <ul>
                  <li>Ruby on Rails</li>
                </ul>
              </li>
              <li className="subList">
                <a className="listName">Java</a>
                <ul>
                  <li>Minecraft Forge API</li>
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
            <h2>Design</h2>
            <ul>
              <li className="subList">
                <a className="listName">Adobe</a>
                <ul>
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
