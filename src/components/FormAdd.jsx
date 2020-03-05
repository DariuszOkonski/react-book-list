import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import { ADD_BOOK } from '../types/types';

const FormAdd = () => {
  const { dispatch } = useContext(BookContext);
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_BOOK, book: {
        title, author
      }
    });

    setTitle('');
    setAuthor('');
    history.push('/');
  }

  const handleClick = () => {
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit} id="form-add">
      <div>
        <input
          type="text"
          placeholder="add title..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="add author..."
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <section className="btn-container">
        <button type="button" onClick={handleClick} className="btn">Cancel</button>
        <button type="submit" className="btn">Add</button>
      </section>
    </form>
  );
}

export default FormAdd;