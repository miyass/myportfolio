import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Career.css';

class Career extends Component {
  render() {
    return(
      <div className="career">
        <h1 className="careerTitleTop">Career</h1>
        <div className="careerContent">
          <h2 className="careerSubTitle">Intern Experience</h2>
          <ul className="careerList">
            <li className="list lit">Life is Tech</li>
              <a className="companyDesc">This company provide that teaching teenager how to make Game, Web Site….</a>
              <p className="more">
                <Link to="/lit" style={{ textDecoration: 'none', color: 'white' }}>
                More?
                </Link>
              </p>
            <li className="list">kintone</li>
              <a className="companyDesc">This campany makes groupware called kintone.</a>
              <p className="more">
                <Link to="/kintone" style={{ textDecoration: 'none', color: 'white' }}>
                More?
                </Link>
              </p>
          </ul>
        </div>
      </div>
    );
  }
}

export default Career;
