import React, { Component } from 'react';
import RegisterS1 from './Components/Registration/FirstScreen/RegisterS1'
import RegisterS2 from './Components/Registration/FirstScreen/RegisterS2'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <RegisterS1 />
        <RegisterS2 />
      </div>
    );
  }
}

export default App;
