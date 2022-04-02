import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
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
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
