import { ADD_BOOK } from '../types/types';
import uuid from 'uuid/v1';

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { id: uuid(), title: action.book.title, author: action.book.author }];
    default:
      return state;
  }
}

export default bookReducer;