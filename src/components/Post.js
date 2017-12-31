import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { post as postPropType } from 'constants/propTypes';

import Markdown from 'components/Markdown';

import 'styles/components/Post.scss';

class Post extends Component {
  static propTypes = {
    post: postPropType,
    hideTitle: PropTypes.bool,
    hideTags: PropTypes.bool,
    hideDescription: PropTypes.bool,
    hideContent: PropTypes.bool,
  };

  getTags = () => {
    const { post } = this.props;
    if (post && post.tags) {
      const postArr = Array.isArray(post.tags) ? post.tags : post.tags.split(' ');
      if (postArr.length) {
        return (
          <div className="Post__tags">
            {postArr.map(tag => tag
              ? (
                <div className="Post__tag" key={tag}>
                  {tag}
                </div>
              )
              : null)
            }
          </div>
        );
      }
    }
    return null;
  }

  render() {
    const { post, hideTitle, hideTags, hideDescription, hideContent } = this.props;

    return (
      <div className="Post">
        {hideTitle || (
          <div className="Post__title">
            <h1>
              {post && post.title}
            </h1>
          </div>
        )}
        {hideTags || this.getTags()}
        {hideDescription || (
          <div className="Post__description">
            {post && post.description}
          </div>
        )}
        {hideContent || (
          <div className="Post__content">
            <Markdown source={post && post.content}/>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
