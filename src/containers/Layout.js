import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import quote from 'constants/quotes';
import { getAction } from 'services/reduxBreeze';

import Link from 'components/Link';
import Icon from 'components/Icon';
import IsLoggedIn from 'components/IsLoggedIn';

import logo from 'assets/logo-white.png';
import 'styles/containers/Layout.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    logout: PropTypes.func,
    getPosts: PropTypes.func,
    config: PropTypes.objectOf(PropTypes.string),
  };

  logOut = () => {
    this.props.logout();
    this.props.getPosts();
  };

  render() {
    const quote = this.props.config.Quote;
    const quoteAuthor = this.props.config.QuoteAuthor;

    return (
      <div className="Layout">
        <div className="Layout__topbar">
          <div className="Layout__topbarLeft">
            <div className="Layout__topbarItem">
              <div className="Layout__logo">
                <Link to="/">
                  <img className="Layout__logoImage" src={logo} />
                </Link>
              </div>
            </div>
          </div>
          <div className="Layout__topbarRight">
            <div className="Layout__topbarItem">
              {quote
                ? (
                  <div className="Layout__quote">
                    <div className="Layout__quoteQuote">{`"${quote}"`}</div>
                    <span className="Layout__quoteAuthor">{quoteAuthor || 'Unknown'}</span>
                  </div>
                )
                : null}
            </div>
            <div className="Layout__topbarItem">
              <IsLoggedIn>
                <Link to="/config">
                  <Icon className="Layout__configIcon" name="cog"/>
                </Link>
              </IsLoggedIn>
            </div>
            <div className="Layout__topbarItem">
              <IsLoggedIn>
                <Icon className="Layout__logoutIcon" name="power-off" onClick={this.logOut}/>
              </IsLoggedIn>
            </div>
          </div>
        </div>
        <div className="Layout__content">{this.props.children}</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    config: state.config.configValues,
  }),
  {
    logout: getAction('logout'),
    getPosts: getAction('getPosts'),
  }
)(Layout);
