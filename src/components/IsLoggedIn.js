import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class IsLoggedIn extends Component {
  static propTypes = {
    children: PropTypes.node,
    auth: PropTypes.shape({
      authDetails: PropTypes.shape({
        user: PropTypes.shape({
          username: PropTypes.string,
        }),
        expired: PropTypes.bool,
      }),
    }),
    history: PropTypes.shape({
      replace: PropTypes.func,
    }),
    redirect: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  componentDidMount = () => {
    this.redirect();
  }

  componentDidUpdate = () => {
    this.redirect();
  }

  redirect = () => {
    if (this.props.redirect && !this.checkIfLoggedIn()) {
      this.props.history.replace(this.props.redirect);
    }
  }

  checkIfLoggedIn = () => {
    const { auth } = this.props;
    return auth && !auth.expired && auth.user && auth.user.username;
  }

  render() {
    return this.checkIfLoggedIn()
      ? this.props.children
      : null;
  }
}

export default withRouter(connect(
  state => ({
    auth: state.auth.authDetails,
  })
)(IsLoggedIn));
