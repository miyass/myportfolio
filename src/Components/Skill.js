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
              <li className="subList">HTML</li>
              <li className="subList">
                CSS
                <ul>
                  <li>Sass</li>
                  <li>SCSS</li>
                  <li>BootStrap</li>
                </ul>
              </li>
              <li className="subList">
                Javascript
                <ul>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>kintone API</li>
                </ul>
              </li>
              <li className="subList">
                Ruby
                <ul>
                  <li>Ruby on Rails</li>
                </ul>
              </li>
              <li className="subList">
                Java
                <ul>
                  <li>Minecraft Forge API</li>
                  </ul>
                </li>
              <li className="subList">Swift</li>
              <li className="subList">Unity</li>
            </ul>
          </div>
          <div className="skillList">
            <h2>Design</h2>
            <ul>
              <li className="subList">
                Adobe
                <ul>
                  <li className="subList">Illustrator</li>
                  <li className="subList">Photoshop</li>
                  <li className="subList">Lightroom</li>
                  <li className="subList">Premiere Pro</li>
                  <li className="subList">After Effect</li>
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
