import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAction } from 'services/reduxBreeze';

import Post from 'components/Post';
import Link from 'components/Link';
import Icon from 'components/Icon';
import IsLoggedIn from 'components/IsLoggedIn';

import 'styles/components/PostListItem.scss';

class PostListItem extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      content: PropTypes.string,
      hidden: PropTypes.bool,
    }),
    deletePost: PropTypes.func,
    getPosts: PropTypes.func,
  };

  deletePost = () => {
    this.props.deletePost({ id: this.props.post.id }, { success: () => this.props.getPosts() });
  }

  render() {
    return (
      <div className="PostListItem">
        <div className="PostListItem__header">
          <Link to={`posts/${this.props.post.id}`}>
            <h3 className="PostListItem__title">{this.props.post.title}</h3>
          </Link>
          <IsLoggedIn>
            <Icon
              className="PostListItem__removeButton"
              name="trash"
              onClick={this.deletePost}
            />
            {this.props.post.hidden
              ? <Icon
                className="PostListItem__hiddenIcon"
                name="eye-slash"
              />
              : null}
          </IsLoggedIn>
        </div>
        <Post post={this.props.post} hideContent hideTitle />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  {
    deletePost: getAction('deletePost'),
    getPosts: getAction('getPosts'),
  }
)(PostListItem);
