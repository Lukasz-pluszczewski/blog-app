import React from 'react';
import { Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import App from 'containers/App';
import PostsListPage from 'pages/PostsListPage';
import PostPage from 'pages/PostPage';
import EditPostPage from 'pages/EditPostPage';
import NewPostPage from 'pages/NewPostPage';
import LoginPage from 'pages/LoginPage';
import ConfigPage from 'pages/ConfigPage';
import ComponentsPage from 'pages/ComponentsPage';
import NotFoundPage from 'pages/NotFoundPage';

export default (
  <ConnectedRouter history={createHistory()}>
    <App>
      <Switch>
        <Route exact path="/posts/:id" component={PostPage}/>
        <Route exact path="/posts/:id/edit" component={EditPostPage}/>
        <Route exact path="/newpost" component={NewPostPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/config" component={ConfigPage}/>
        <Route exact path="/components" component={ComponentsPage}/>
        <Route exact path="/" component={PostsListPage}/>
        <Route exact path="/:tag" component={PostsListPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </App>
  </ConnectedRouter>
);
