import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { getAction } from 'services/reduxBreeze';
import tokenService from 'services/tokenService';

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    setToken: PropTypes.func,
  };

  componentWillMount() {
    this.props.setToken(tokenService.loadAuth());
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(connect(
  state => ({

  }),
  {
    setToken: getAction('setToken'),
  }
)(App));
