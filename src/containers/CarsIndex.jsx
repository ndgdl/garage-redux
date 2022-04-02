import React, { Component } from 'react';
import { connect } from 'react-redux';
import Garage from './Garage';

class CarsIndex extends Component {
  createCars() {
    return this.props.cars.map((car) => {
      return (
        <div className="card-product" key={car.id}>
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg" alt="img" />
          <div className="card-product-infos">
            <h2>{`${car.brand} ${car.model}`}</h2>
            <p>{`OWNER: ${car.owner}`}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Garage />
        <div className="cars-wrapper">
          {this.createCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
