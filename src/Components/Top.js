import React, { Component } from 'react';

import '../Styles/Top.css';

class Top extends Component {
  render() {
    return(
      <div className="top">
        <h1 className="title">Sohei Miyakura</h1>
        <h2 className="subTitle">I am Web Designer / Web Developer</h2>
        <p className="topDescription">I am studying abroad in San Francisco.</p>
      </div>
    );
  }
}

export default Top;
