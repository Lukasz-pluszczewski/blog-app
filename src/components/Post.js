import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { post as postPropType } from 'constants/propTypes';

import Icon from 'components/Icon';
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

      if (postArr.length && !(postArr.length === 1 && !postArr[0])) {
        return (
          <div className="Post__tags">
            <Icon className="Post__tagsIcon" name="tags" />
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

    if (post) {
      return (
        <div className="Post">
          {hideTitle || (
            <div className="Post__title">
              <h1>
                {post && post.title}
              </h1>
            </div>
          )}
          <div className="Post__info">
            {hideTags || this.getTags()}
            <div className="Post__dateContainer">
              <Icon className="Post__dateIcon" name="clock-o"/>
              <div className="Post__date">
                { post && moment(post.date).format('DD-MM-YYYY') }
              </div>
            </div>
          </div>
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
    return null;
  }
}

export default Post;
