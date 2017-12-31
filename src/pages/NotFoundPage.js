import React from 'react';

import Layout from 'containers/Layout';
import Link from 'components/Link';
import Icon from 'components/Icon';

import 'styles/pages/NotFoundPage.scss';

const NotFoundPage = () => (
  <Layout>
    <div className="NotFoundPage">
      <img src="https://memegenerator.net/img/instances/41337918/404-this-is-not-the-page-you-are-looking-for.jpg"/>
      <Link className="NotFoundPage__backLink" to="/">
        <Icon className="NotFoundPage__backIcon" name="arrow-left"/>
        Go back to homepage
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
