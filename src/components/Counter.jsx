import React, { Component, PropTypes } from 'react';
import Num from './Num';
import Btn from './Btn';

class Counter extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      count: this.props.initialCount
    };
    this.props.store.on('CHANGE', this._onChange.bind(this));
  }

  _onChange(data) {
    this.setState({ count: data });
  }

  handleClick() {
    this.props.action.countUp(this.state.count + 1);
  }

  render() {
    return (
      <div>
        <Num count={this.state.count} />
        <Btn text="CountUp" handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  store: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
};

export default Counter;
