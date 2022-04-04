import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    const { garage } = this.props;
    this.props.createCar(garage, values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  required = (value) => {
    return value ? undefined : 'Required';
  }

  requiredCaps = (value) => {
    return value && value === value.toUpperCase() ? undefined : 'Only caps!';
  }

  requiredNoSpeChar = (value) => {
    return value && !/[^\w-]/.test(value) ? undefined : 'No special characters';
  }

  renderField = (field) => {
    const { touched, error, warning } = field.meta;
    return (
      <div className="form-group">
        <label htmlFor={field.name}>{field.label}</label>
        <div>
          <input
            className="form-control"
            type={field.type}
            {...field.input}
          />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>)) }
        </div>
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
            validate={[this.required]}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
            validate={[this.required]}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            validate={[this.required]}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            validate={[this.required, this.requiredCaps, this.requiredNoSpeChar]}
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

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
