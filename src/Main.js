import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles/Main.css';

import Canvas from './Components/Canvas';
import Header from './Components/Header';

import Top from './Components/Top';
import Profile from './Components/Profile';
import Skill from './Components/Skill';
import Career from './Components/Career';


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
              <Route path="/profile" component={Profile} />
              <Route path="/skill" component={Skill} />
              <Route path="/career" component={Career} />
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
