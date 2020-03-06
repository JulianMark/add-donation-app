import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppReact extends Component {

  constructor() {
    super();
    this.state = {
      nombre: 'atuviejaentanga',
      laksjdlk: "laksjdlkj"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
    Edit <code>src/App.js</code> {this.state.nombre}.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppReact;
