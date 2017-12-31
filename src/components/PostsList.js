import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { post as postPropType } from 'constants/propTypes';

import PostListItem from 'components/PostListItem';
import Icon from 'components/Icon';
import Section from 'containers/Section';

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(postPropType),
    pending: PropTypes.bool,
  };

  renderContent = () => {
    if (this.props.pending) {
      return <Icon name="circle-o-notch" spin />;
    }
    if (!this.props.posts || !this.props.posts.length) {
      return 'Nothing to see here (yet)';
    }

    return this.props.posts.map(post => (
      <Section key={post.id}>
        <PostListItem key={post.id} post={post} />
      </Section>
    ));
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.blog.posts,
    pending: state.blog.pending.getPosts,
  }),
  {}
)(PostsList);
