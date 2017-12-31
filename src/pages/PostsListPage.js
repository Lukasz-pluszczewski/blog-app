import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAction } from 'services/reduxBreeze';

import IsLoggedIn from 'components/IsLoggedIn';
import Layout from 'containers/Layout';
import Icon from 'components/Icon';
import Link from 'components/Link';
import PostsList from 'components/PostsList';

import 'styles/pages/PostsListPage.scss';

class PostsListPage extends Component {
  static propTypes = {
    getPosts: PropTypes.func,
  };

  componentDidMount() {
    this.props.getPosts({ tag: this.props.match.params.tag });
  }

  addNewPostRedirect = () => {
    this.props.history.push('/newpost');
  }


  render() {
    return (
      <Layout>
        <div className="PostsListPage">
          <div className="PostsListPage__header">
            <h1>Philosophy blog</h1>
            <IsLoggedIn>
              <Link to="newpost">
                <Icon className="PostsListPage__addNewButton" onClick={this.addNewPostRedirect} name="plus" />
              </Link>
            </IsLoggedIn>
          </div>
          <PostsList/>
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => ({}),
  {
    getPosts: getAction('getPosts'),
  }
)(PostsListPage);
