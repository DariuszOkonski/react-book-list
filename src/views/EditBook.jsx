import React, { Fragment } from 'react';
import Header from '../components/Header';
import FormEdit from '../components/FormEdit';

const EditBook = () => {
  return (
    <Fragment>
      <Header title="Edit Book" />

      <FormEdit />
    </Fragment>
  );
}

export default EditBook;