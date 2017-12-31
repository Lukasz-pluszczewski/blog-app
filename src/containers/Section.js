import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import 'styles/containers/Section.scss';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { className, title, description, children } = this.props;

    return <div className={classnames('Section', className)}>
      {title ? <div className="Section__title">{title}</div> : null}
      {description ? <div className="Section__description">{description}</div> : null}
      <div className="Section__content">
        {children}
      </div>
    </div>;
  }
}

export default Section;
