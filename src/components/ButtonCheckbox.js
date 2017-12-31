import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'components/Button';

import 'styles/components/ButtonCheckbox.scss';

const buttonCheckboxConfig = {
  disableOnChangeWhenDisabled: true,
  disableOnClickWhenDisabled: false,
};

class ButtonCheckbox extends Component {
  static propTypes = {
    // button checkbox
    className: PropTypes.string,
    text: PropTypes.string,

    // state
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,

    // actions
    onChange: PropTypes.func.isRequired,

    // label
    label: PropTypes.node,

    // error
    error: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

    // settings
    fullWidth: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    return () => {
      if (!buttonCheckboxConfig.disableOnChangeWhenDisabled || !this.props.disabled) {
        this.props.onChange(!this.props.value);
      }
    };
  }

  render() {
    return (
      <div
        className={classnames(
          'ButtonCheckbox',
          this.props.className,
          {
            'ButtonCheckbox--error': this.props.error,
            'ButtonCheckbox--loading': this.props.loading,
            'ButtonCheckbox--fullWidth': this.props.fullWidth,
          }
        )}
      >
        {this.props.label ? <label className="ButtonCheckbox__label">{this.props.label}</label> : null}
        <div className="ButtonCheckbox__buttons">
          <Button
            className={classnames(
              'ButtonCheckbox__Button',
              { 'ButtonCheckbox__Button--selected': this.props.value }
            )}
            type="button"
            onClick={this.clickHandler()}
          >
            {this.props.text}
          </Button>
        </div>
        {this.props.error
          ? <div className="ButtonCheckbox__error">
            {Array.isArray(this.props.error)
              ? <ul>
                {this.props.error.map(error => <li key={error}>{error}</li>)}
              </ul>
              : this.props.error}
          </div>
          : <div className="ButtonCheckbox__error" />}
      </div>
    );
  }
}

export default ButtonCheckbox;
