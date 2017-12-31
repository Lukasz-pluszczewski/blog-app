import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';

import ButtonCheckbox from 'components/ButtonCheckbox';

class ReduxFormButtonCheckbox extends Component {
  static propTypes = {
    input: PropTypes.shape(fieldInputPropTypes),
    meta: PropTypes.shape(fieldMetaPropTypes),
  };

  render() {
    const { input, meta, ...rest } = this.props;

    return (
      <ButtonCheckbox
        value={!!input.value}
        name={input.name}
        onChange={input.onChange}
        dirty={meta.touched}
        error={meta.error}
        {...rest}
      />
    );
  }
}

export default ReduxFormButtonCheckbox;
