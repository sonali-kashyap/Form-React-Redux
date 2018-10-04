import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/buttons.js';
import {Operations} from './components/operations';


class App extends Component {
  render() {
    return (
      <div className="App">
        
         <h1>Hello</h1>
         <Operations />
      </div>
    );
  }
}

export default App;
