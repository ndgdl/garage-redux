import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    const garage = this.props.match.params.garage;
    this.props.createCar(garage, values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div
        className="form-bg"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)' }}
      >
        <p>{this.props.match.params.garage}</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarsNew)
);
