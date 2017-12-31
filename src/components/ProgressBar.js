import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'styles/components/ProgressBar.scss';

class Progressbar extends Component {
  static propTypes = {
    progress: PropTypes.number, // progress (from 0 to 1) - used when no steps provided
    steps: PropTypes.number, // number of steps
    step: PropTypes.number, // number of current step (starting from one)
  };
  static defaultProps = {
    progress: 0,
  };

  render() {
    const { progress, steps, step } = this.props;
    let progressPerCent = progress * 100;
    if (steps) {
      progressPerCent = (step - 1) / (steps - 1) * 100;
    }

    return <div className="ProgressBar">
      <div className="ProgressBar__bar" style={{ width: `${progressPerCent}%` }} />
      <div className="ProgressBar__steps">{steps ? `${step}/${steps}` : null}</div>
    </div>;
  }
}

export default Progressbar;

