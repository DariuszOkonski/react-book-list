import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../contexts/BookContext';

const Header = ({ title }) => {
  const { books } = useContext(BookContext);

  return (
    < header id="header" >
      <h2 className="head">{title}</h2>
      {
        books.length > 0 ?
          <p className="paragraph">Currently you have {books.length} books to get through</p>
          :
          null
      }
    </header >
  );
}

Header.defaultProps = {
  title: 'Book-List-App'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;