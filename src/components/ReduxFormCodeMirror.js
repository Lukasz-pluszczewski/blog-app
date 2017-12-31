import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

import 'styles/components/ReduxFormCodeMirror.scss';

class ReduxFormCodeMirror extends Component {
  static propTypes = {
    input: PropTypes.shape(fieldInputPropTypes),
    meta: PropTypes.shape(fieldMetaPropTypes),
  };

  handleChange = (editor, data, value) => {
    this.props.input.onChange(value);
  }

  render() {
    const { input, meta, ...rest } = this.props;

    return (
      <CodeMirror
        value={input.value}
        onBeforeChange={this.handleChange}
        {...rest}
      />
    );
  }
}

export default connect(
  state => ({}),
  {}
)(ReduxFormCodeMirror);
