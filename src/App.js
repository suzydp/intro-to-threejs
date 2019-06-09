import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import RotatingBox from './RotatingBox';
import logo from './logo.svg';
import './App.css';

const appHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={appHistory}>
        <p>Let's start WebGL with Three.js</p>
        <RotatingBox />
      </Router>
    </div>
  );
}

export default App;
