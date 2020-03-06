import React, { Fragment } from 'react';
import Header from '../components/Header';
import JunkBook from '../components/JunkBook';

const RemoveBook = () => {
  return (
    <Fragment>
      <Header title="Remove Book" />

      <JunkBook />
    </Fragment>
  );
}

export default RemoveBook;