import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import { EDIT_BOOK } from '../types/types';

const FormEdit = () => {
  const history = useHistory();
  const bookId = history.location.state.editId;
  const { books, dispatch } = useContext(BookContext);
  const [isOff, setIsOff] = useState(true)

  const [title, setTitle] = useState(books.find(book => book.id === bookId).title);
  const [author, setAuthor] = useState(books.find(book => book.id === bookId).author);

  const handleCancel = () => {
    history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: EDIT_BOOK, book: {
        id: bookId,
        title,
        author
      }
    });

    history.push('/');
  }

  const handleChange = (e) => {
    setIsOff(false);

    if (e.target.name === 'title')
      setTitle(e.target.value);
    else
      setAuthor(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <p className="paragraph">Book ID: {bookId}</p>
      <div>
        <input
          type="text"
          name="title"
          placeholder="add title..."
          required
          value={title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          placeholder="add author..."
          required
          value={author}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <section className="btn-container">
        <button type="button" onClick={handleCancel} className="btn">Cancel</button>
        <button disabled={isOff} type="submit" className={`btn ${isOff && 'btnOff'}`}>Save</button>
      </section>
    </form>
  );
}

export default FormEdit;