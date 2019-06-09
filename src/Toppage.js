import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopPage extends Component {
  render() {
    return (
      <div>
        <h1>Intro to Three.js</h1>
        <p>Let's start WebGL with Three.js</p>
        <ul>
          <li><Link to="/rotating-box">Rotating Box</Link></li>
          <li>More experiments soon...</li>
        </ul>
      </div>
    )
  }
}

export default TopPage