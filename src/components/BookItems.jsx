import React, { useContext } from 'react';
import BookItem from './BookItem';
import Empty from '../components/Empty';
import { BookContext } from '../contexts/BookContext';

const BookItems = () => {
  const { books } = useContext(BookContext);

  return books.length > 0 ? (
    <ul id="book-itmes">
      {
        books.map(book => <BookItem key={book.id} {...book} />)
      }
    </ul>
  ) : (
      <Empty information="There are not any books to read..." />
    );
}

export default BookItems;