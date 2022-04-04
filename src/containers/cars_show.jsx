import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';

import { fetchCar, deleteCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
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
        <button
          onClick={this.handleClick}
        >
          <BsFillTrashFill />
        </button>
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
    { fetchCar, deleteCar },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
