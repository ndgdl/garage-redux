import React, { Component } from 'react';

class Garage extends Component {
  render() {
    return (
      <div className="garage-wrapper">
        <div
          className="garage-img"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)'}}
          >
          <div className="logo-center">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="logo" />
          </div>
        </div>

        <div className="garage-content">
          <div className="garage-text">
            <h1>Garage Gaudin</h1>
            <p>Our garage is the best. Reasonnable prices, always on time, we are the best (and fictionnal).</p>
          </div>
          <button>Add a car</button>
        </div>
      </div>
    );
  }
}

export default Garage;
