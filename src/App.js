import React, { Component } from 'react';
import Navbar from './components/navbar'
import Pizza from './components/pizza'
import Menu from './components/menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pizza/>
        <Menu/>
      </div>
    );
  }
}

export default App;
