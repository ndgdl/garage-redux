import { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render() {
    return this.props.cars.map((car) => {
      return car.brand;
    });
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
