import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import tokenService from 'services/tokenService';
import { getAction } from 'services/reduxBreeze';

import Layout from 'containers/Layout';
import LoginForm from 'components/LoginForm';

import 'styles/pages/LoginPage.scss';

class LoginPage extends Component {
  static propTypes = {
    login: PropTypes.func,
    loginFormValues: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    history: PropTypes.shape({
      replace: PropTypes.func,
    }),
  };

  componentDidMount = () => {
    this.redirect();
  }

  componentDidUpdate = () => {
    this.redirect();
  }

  redirect = () => {
    if (this.checkIfLoggedIn()) {
      this.props.history.replace('/');
    }
  }

  checkIfLoggedIn = () => {
    const { auth } = this.props;
    return auth && !auth.expired && auth.user && auth.user.username;
  }

  submit = () => {
    const { username, password } = this.props.loginFormValues;
    this.props.login(
      { username, password },
      {
        success: ({ result }) => {
          tokenService.updateToken(result.body.token);
          this.redirect();
        },
      }
    );
  }

  render() {
    return (
      <Layout>
        <div className="LoginPage">
          <LoginForm handleSubmit={this.submit}/>
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => ({
    loginFormValues: _.get(state, 'form.login.values'),
    auth: state.auth.authDetails,
  }),
  {
    login: getAction('login'),
  }
)(LoginPage);
