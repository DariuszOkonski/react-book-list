import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ information }) => {
  return (
    <section id="empty">
      <p>{information}</p>
    </section>
  );
}

Empty.defaultProps = {
  information: 'No information to display'
}

Empty.propTypes = {
  information: PropTypes.string.isRequired
}

export default Empty;