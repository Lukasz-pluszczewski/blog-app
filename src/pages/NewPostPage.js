import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAction } from 'services/reduxBreeze';

import Markdown from 'components/Markdown';
import Tabs from 'components/Tabs';
import Layout from 'containers/Layout';
import NewPostForm from 'components/NewPostForm';

import 'styles/pages/NewPostPage.scss';

class NewPostPage extends Component {
  static propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string,
    addPost: PropTypes.func,
    getPosts: PropTypes.func,
  };

  handleSubmit = () => {
    this.props.addPost(
      {
        title: this.props.title,
        description: this.props.description,
        tags: this.props.tags.split(' '),
        content: this.props.content,
      },
      {
        success: () => {
          this.props.getPosts();
          this.props.history.push('/');
        },
      }
    );
  };

  render() {
    return (
      <Layout>
        <div className="NewPostPage">
          <Tabs
            back="/"
            tabs={[
              {
                name: 'Editor',
                content: (<div className="NewPostPage__form">
                  <NewPostForm handleSubmit={this.handleSubmit}/>
                </div>),
              },
              {
                name: 'Preview',
                content: (<div className="NewPostPage__preview">
                  <h1>{this.props.title}</h1>
                  <Markdown source={this.props.content}/>
                </div>),
              },
            ]}
          />
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
  }),
  {
    addPost: getAction('addPost'),
    getPosts: getAction('getPosts'),
  }
)(NewPostPage);
