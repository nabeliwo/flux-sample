import React, { PropTypes } from 'react';

const Num = ({ count }) => <p>Count: {count}</p>;

Num.propTypes = {
  count: PropTypes.number.isRequired
};

export default Num;
