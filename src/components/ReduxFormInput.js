import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';

import Input from 'components/Input';

class ReduxFormInput extends Component {
  static propTypes = {
    input: PropTypes.shape(fieldInputPropTypes),
    meta: PropTypes.shape(fieldMetaPropTypes),
  };

  render() {
    const { input, meta, ...rest } = this.props;

    return (
      <Input
        value={input.value}
        name={input.name}
        onChange={input.onChange}
        dirty={meta.touched}
        error={meta.error}
        {...rest}
      />
    );
  }
}

export default ReduxFormInput;
