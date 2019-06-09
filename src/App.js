import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TopPage from './TopPage';
import RotatingBox from './RotatingBox';
import Dynamic from './Dynamic';
import logo from './logo.svg';
import './App.css';

const appHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={appHistory}>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/rotating-box" component={RotatingBox} />
          <Route exact path="/dynamic" component={Dynamic} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
