import React from 'react';
import PropTypes from 'prop-types';
import { trackEvent } from 'react-tracking';

const ButtonTracking = ({ track, onClick }) => {
  const handleClick = () => {
    // Track the button click event
    track({
      action: 'buttonClick',
      page: '/User',
    });
    onClick();
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

ButtonTracking.propTypes = {
  track: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default trackEvent({
  page: '/User',
})(ButtonTracking);
