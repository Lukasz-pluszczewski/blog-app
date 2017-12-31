import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Icon from 'components/Icon';
import Link from 'components/Link';

import 'styles/components/Tabs.scss';

class Tabs extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, content: PropTypes.node })),

    // custom features
    back: PropTypes.string,
  };
  constructor(props) {
    super(props);

    this.state = {
      value: props.tabs[0].name,
    };
  }

  changeTab = tabName => () => {
    if (!_.isNil(this.props.value) && this.props.onChange) {
      return this.props.onChange(tabName);
    }
    this.setState({ value: tabName });
  };

  getActiveTabName = () => _.isNil(this.props.value) ? this.state.value : this.props.value;

  renderBackIcon = () => {
    if (_.isString(this.props.back)) {
      return (
        <Link className="Tabs__backIcon" to={this.props.back}>
          <Icon name="arrow-left"/>
        </Link>
      );
    } else if (_.isFunction(this.props.back)) {
      return (
        <Icon className="Tabs__backIcon" name="arrow-left" onClick={this.props.back}/>
      );
    }
    return null;
  }

  render() {
    const activeTabName = this.getActiveTabName();

    return (
      <div className={classnames('Tabs', this.props.className)}>
        <div className="Tabs__tabs">
          {this.renderBackIcon()}
          {this.props.tabs.map(tab => (
            <div
              key={tab.name}
              className={classnames('Tabs__tab', { 'Tabs__tab--active': tab.name === activeTabName })}
              onClick={this.changeTab(tab.name)}
            >{tab.name}</div>
          ))}
        </div>
        {this.props.tabs.map(tab => (
          <div
            className={classnames('Tabs__content', { 'Tabs__content--active': tab.name === activeTabName })}
            key={tab.name}
          >
            {tab.content}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  {}
)(Tabs);
