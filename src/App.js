import React, { Component } from 'react';
import Speaker from './speaker/Speaker';
import './App.css';

class App extends Component {
  state = {
    message: 'nothing to say'
  }
  speak = () => {
    this.setState({ message: 'you are mocking me'})
  }
  render() {
    return (
      <div className="App">
        <Speaker message={this.state.message} speak={this.speak} />
      </div>
    );
  }
}

export default App;
