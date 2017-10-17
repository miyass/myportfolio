import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles/Main.css';

import Canvas from './Components/Canvas';
import Header from './Components/Header';
import Top from './Components/Top';


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Canvas />
          <div id="body">
            <Header />
            <section>
              <Route exact path="/" component={Top} />
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
