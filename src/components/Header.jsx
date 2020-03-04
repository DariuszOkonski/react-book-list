import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header id="header">
      <h2 className="head">{title}</h2>
      <p className="paragraph">Currently you have 2 books to get through</p>
    </header>
  );
}

Header.defaultProps = {
  title: 'Book List'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;