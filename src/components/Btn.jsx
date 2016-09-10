import React, { PropTypes } from 'react';

const Btn = ({ text, handleClick }) =>
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>;

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Btn;
