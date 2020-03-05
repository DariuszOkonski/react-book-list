import React, { Fragment } from 'react';
import Header from '../components/Header';
import BookItems from '../components/BookItems';

const BookList = () => {
  return (
    <Fragment>
      <Header title="Book List" />

      <BookItems />
    </Fragment>

  );
}

export default BookList;