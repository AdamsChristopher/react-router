import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="d-flex justify-content-center">
            <NavLink className="btn btn-primary m-2" exact to="/">Home</NavLink>
            <NavLink className="btn btn-primary m-2" to="/notre-histoire">History</NavLink>
          </div >
          <div className="d-flex justify-content-center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
