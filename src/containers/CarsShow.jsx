import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    const { car } = this.props;

    if (!car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="card-product">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg" alt="img" />
        <div className="card-product-infos">
          <h2>{`${car.brand} ${car.model}`}</h2>
          <p>{`OWNER: ${car.owner}`}</p>
          <p className="card-product-detail">{car.plate}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === id);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
