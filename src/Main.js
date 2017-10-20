import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Styles/Main.css';

import Canvas from './Components/Canvas';
import Header from './Components/Header';

import Top from './Components/Top';
import Profile from './Components/Profile';
import Skill from './Components/Skill';
import Career from './Components/Career';
import CareerLit from './Components/CareerLit';
import CareerKintone from './Components/CareerKintone';


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
              <Route path="/lit" component={CareerLit} />
              <Route path="/kintone" component={CareerKintone} />
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
