import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ena Anicama's React Page</h1>
        </header>
        <p className="App-intro">
          Welcome to my React Page!<br />
          Expect great things soon...
        </p>
      </div>
    );
  }
}

export default App;
