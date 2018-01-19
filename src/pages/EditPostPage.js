import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAction } from 'services/reduxBreeze';

import Post from 'components/Post';
import Tabs from 'components/Tabs';
import Layout from 'containers/Layout';
import NewPostForm from 'components/NewPostForm';

import 'styles/pages/EditPostPage.scss';

class EditPostPage extends Component {
  static propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hidden: PropTypes.bool,
    tags: PropTypes.string,
    getPost: PropTypes.func,
    getPosts: PropTypes.func,
    editPost: PropTypes.func,
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      content: PropTypes.string,
      hidden: PropTypes.bool,
    }),
  };

  componentDidMount() {
    this.props.getPost(
      { id: this.props.match.params.id },
      { error: ({ error }) => error.statusCode === 404 ? this.props.history.push('/notfound') : null }
    );
  };

  handleSubmit = () => {
    this.props.editPost(
      {
        id: this.props.match.params.id,
        data: {
          title: this.props.title,
          description: this.props.description,
          tags: this.props.tags.split(' '),
          content: this.props.content,
          hidden: this.props.hidden,
        },
      },
      {
        success: () => {
          this.props.getPosts();
          this.props.history.push(`/posts/${this.props.match.params.id}`);
        },
      }
    );
  };

  render() {
    const { post, title, tags, description, content } = this.props;

    return (
      <Layout>
        <div className="EditPostPage">
          {post && (<Tabs
            back="/"
            tabs={[
              {
                name: 'Editor',
                content: (<div className="EditPostPage__form">
                  <NewPostForm
                    handleSubmit={this.handleSubmit}
                    initialValues={{
                      ...post,
                      tags: Array.isArray(post && post.tags) ? post.tags.join(' ') : post.tags,
                    }}
                  />
                </div>),
              },
              {
                name: 'Preview',
                content: (<div className="EditPostPage__preview">
                  <Post
                    post={{
                      title,
                      tags,
                      description,
                      content,
                    }}
                  />
                </div>),
              },
            ]}
          />)}
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => ({
    title: _.get(state, 'form.newPost.values.title', ''),
    tags: _.get(state, 'form.newPost.values.tags', ''),
    description: _.get(state, 'form.newPost.values.description', ''),
    content: _.get(state, 'form.newPost.values.content', ''),
    hidden: _.get(state, 'form.newPost.values.hidden', ''),
    post: state.blog.post,
  }),
  {
    getPost: getAction('getPost'),
    getPosts: getAction('getPosts'),
    editPost: getAction('editPost'),
  }
)(EditPostPage);
