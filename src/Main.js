import React, { Component } from 'react';
import './Styles/Main.css';

import Canvas from './Components/Canvas';
import Header from './Components/Header';
import Top from './Components/Top';


class Main extends Component {
  render() {
    return (
      <div>
        <Canvas />
        <div id="body">
          <Header />
          <section>
            <Top />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
