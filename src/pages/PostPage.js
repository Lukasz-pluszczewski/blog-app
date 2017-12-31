import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAction } from 'services/reduxBreeze';

import Post from 'components/Post';
import Icon from 'components/Icon';
import Link from 'components/Link';
import Layout from 'containers/Layout';
import IsLoggedIn from 'components/IsLoggedIn';

import 'styles/pages/PostPage.scss';

class PostPage extends Component {
  static propTypes = {
    pending: PropTypes.bool,
    post: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    getPost: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  componentDidMount() {
    this.props.getPost(
      { id: this.props.match.params.id },
      { error: ({ error }) => error.statusCode === 404 ? this.props.history.push('/notfound') : null }
    );
  }

  editPost = () => {
    this.props.history.push(`/posts/${this.props.match.params.id}/edit`);
  }

  render() {
    const { post, pending } = this.props;

    return (
      <Layout>
        <div className="PostPage">
          {pending
            ? 'loading'
            : (
              <div className="PostPage__post">
                <div className="PostPage__header">
                  <Link className="PostPage__backLink" to="/">
                    <Icon className="PostPage__backIcon" name="arrow-left" />
                  </Link>
                  <h1 className="PostPage__title">{post && post.title}</h1>
                  <IsLoggedIn>
                    <Icon
                      className="PostPage__editIcon"
                      name="edit"
                      onClick={this.editPost}
                    />
                  </IsLoggedIn>
                </div>
                <Post post={post} hideTitle />
              </div>
            )
          }
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => ({
    post: state.blog.post,
  }),
  {
    getPost: getAction('getPost'),
  }
)(PostPage);
