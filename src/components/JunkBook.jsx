import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import { DELETE_BOOK } from '../types/types';

const JunkBook = () => {
  const history = useHistory();
  const { books, dispatch } = useContext(BookContext);

  const deleteId = history.location.state.deleteId;

  const handleCancel = () => {
    history.push('/');
  }

  const handleDelete = () => {
    dispatch({ type: DELETE_BOOK, id: deleteId });
    history.push('/');
  }

  return (
    <section id="junk-book">
      <p style={{ marginBottom: '1rem' }} className="paragraph">Do you want to remove book:</p>
      <p className="paragraph">Title: <strong>{books.find(book => book.id === deleteId).title}</strong></p>
      <p className="paragraph">Author: <strong>{books.find(book => book.id === deleteId).author}</strong></p>

      <section className="btn-container">
        <button onClick={handleCancel} type="button" className="btn">Cancel</button>
        <button onClick={handleDelete} type="submit" className="btn">Delete</button>
      </section>
    </section >
  );
}

export default JunkBook;