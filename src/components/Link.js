import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink as RouterLink } from 'react-router-dom';

import 'styles/components/Link.scss';

export default class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <RouterLink
        className={classnames('Link', this.props.className)}
        to={this.props.to}
      >
        {this.props.children}
      </RouterLink>
    );
  }
}
