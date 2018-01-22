import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-breeze';
import _ from 'lodash';

import { getAction } from 'services/reduxBreeze';

import Input from 'components/Input';
import Layout from 'containers/Layout';

import 'styles/pages/ConfigPage.scss';

class EditPostPage extends Component {
  static propTypes = {
    setConfig: PropTypes.func,
    getConfig: PropTypes.func,
    setConfigValue: PropTypes.func,
    deleteConfigValue: PropTypes.func,
    config: PropTypes.objectOf(PropTypes.string),
  };
  constructor(props) {
    super(props);
    this.state = {
      newConfigName: 'newConfigName',
    };
  }

  componentDidMount() {
    this.props.getConfig();
  };

  saveConfig = _.debounce(() => {
    this.props.setConfig({ data: this.props.config });
  }, 1000);

  setConfigValue = fieldName => e => {
    this.props.setConfigValue({ field: fieldName, value: e.target.value });
    this.saveConfig();
  };

  addNewConfigValue = () => {
    this.props.setConfigValue({ field: this.state.newConfigName, value: '' });
    this.saveConfig();
  };

  deleteConfigValue = fieldName => () => {
    this.props.deleteConfigValue(fieldName);
    this.saveConfig();
  };

  changeNewConfigName = e => this.setState({ newConfigName: e.target.value });

  render() {
    const fieldAlreadyExists = _.has(this.props.config, this.state.newConfigName);
    console.log('ConfigPage', 'this.props.config', this.props.config);

    return (
      <Layout>
        <div className="ConfigPage">
          {_.map(this.props.config, (value, name) => (
            <div className="ConfigPage__configLine" key={name}>
              <Input
                className="ConfigPage__configInput"
                value={value}
                onChange={this.setConfigValue(name)}
                icon="trash"
                iconPosition="right"
                onIconClick={this.deleteConfigValue(name)}
                label={name}
                fullWidth
              />
            </div>
          ))}
          <div className="ConfigPage__newConfig">
            <Input
              className="ConfigPage__newConfigName"
              value={this.state.newConfigName}
              onChange={this.changeNewConfigName}
              icon={!fieldAlreadyExists ? 'plus' : 'times'}
              iconPosition="right"
              onIconClick={!fieldAlreadyExists ? this.addNewConfigValue : null}
              label="Add new config"
              fullWidth
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(
  {
    config: 'config.configValues',
  },
  {
    getConfig: getAction('getConfig'),
    setConfig: getAction('setConfig'),
    setConfigValue: getAction('setConfigValue'),
    deleteConfigValue: getAction('deleteConfigValue'),
  }
)(EditPostPage);
