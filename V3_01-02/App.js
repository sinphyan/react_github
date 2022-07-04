import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 1,
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.count}</h1>
          <button onClick={this.addCount}>add</button>
        </header>
      </div>
    );
  
}
}

/*
 01. must close
 02. self close
 03.className / htmlFor
 04. onClick （駝峰式命名）
 05.{}
*/

export default App;