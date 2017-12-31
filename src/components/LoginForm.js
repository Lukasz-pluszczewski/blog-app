import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import ReduxFormInput from 'components/ReduxFormInput';
import Button from 'components/Button';

import 'styles/components/LoginForm.scss';

const validate = values => {
  const errors = {};
  if (!values.username || values.username.length < 4) {
    errors.username = 'Username must be at least 4 characters long';
  }
  if (!values.password || values.password.length < 4) {
    errors.password = 'Password must be at least 4 characters long';
  }
  return errors;
};

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <Field
          name="username"
          component={ReduxFormInput}
          type="text"
          label="Username"
          fullWidth
        />
        <Field
          name="password"
          component={ReduxFormInput}
          type="password"
          label="Password"
          fullWidth
        />
        <Button className="LoginForm__submitButton" type="submit">Login</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
