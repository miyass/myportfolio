import React, { Component } from 'react';

import '../Styles/Career.css';

class Career extends Component {
  render() {
    return(
      <div className="career">
        <h1 className="careerTitle">Career</h1>
        <div className="careerContent">
          <h2 className="careerSubTitle">Intern Experience</h2>
          <ul className="careerList">
            <li className="list lit">Life is Tech</li>
              <a>This company provide that teaching teenager how to make Game, Web Site….</a>
              <p className="more">More?</p>
            <li className="list">kintone</li>
              <a>This campany makes groupware called kintone.</a>
              <p className="more">More?</p>
          </ul>
        </div>
      </div>
    );
  }
}

export default Career;
