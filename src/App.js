import React, { Component } from 'react';
import RegisterContainer from "./Components/Registration/RegisterContainer";
import Timeline from "./Components/Home/Timeline/Timeline";
import TasksContainer from "./Components/Home/Tasks/TasksContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/tasks" component={TasksContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
