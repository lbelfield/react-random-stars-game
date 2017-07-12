import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/less/bootstrap.less'


import Game from './Game/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
