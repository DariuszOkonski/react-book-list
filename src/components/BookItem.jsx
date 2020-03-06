import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const BookItem = ({ id, title, author }) => {
  const history = useHistory()

  const handleDelete = () => {
    history.push('/remove', { deleteId: id });
  }

  return (
    <li id="book-item">
      <section className="left">
        <p className="paragraph"><strong>{title}</strong></p>
        <p className="paragraph">{author}</p>
      </section>

      <section className="right">
        <button onClick={handleDelete} className="btn">Delete</button>
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