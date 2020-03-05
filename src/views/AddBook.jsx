import React, { Fragment } from 'react';
import Header from '../components/Header';
import FormAdd from '../components/FormAdd';

const AddBook = () => {
  return (
    <Fragment>
      <Header title="Add Book" />

      <FormAdd />
    </Fragment>
  );
}

export default AddBook;