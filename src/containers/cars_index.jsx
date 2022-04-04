import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    if (!this.props.cars) {
      return "Loading...";
    }
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="card-product">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg" alt="img" />
            <div className="card-product-infos">
              <h2>{`${car.brand} ${car.model}`}</h2>
              <p>{`OWNER: ${car.owner}`}</p>
            </div>
          </div>
        </Link>
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
