import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ id, title, author }) => {
  return (
    <li id="book-item">
      <section className="left">
        <p><strong>{author}</strong></p>
        <p>{title}</p>
      </section>

      <section className="right">
        <button className="btn">Delete</button>
        <button className="btn">Edit</button>
      </section>
    </li>
  );
}

BookItem.propsTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default BookItem;